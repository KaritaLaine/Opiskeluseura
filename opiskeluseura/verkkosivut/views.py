from django.shortcuts import render, redirect
# "messages" avulla voimme näyttää kustomoituja viestejä käyttäjille
# + näyttää ne templeteissä.
from django.contrib import messages
# Djangon autentikaatiot sisään- ja uloskirjautumiseen
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .forms import rekisterointiForm

# Etusivu ja kirjautumisominaisuus
def etusivu(request):
    """
    Funktio sisäänkirjautumista varten, sekä uudelleenohjaus 
    opiskeluhuoneet-sivulle, jos käyttäjä on kirjautunut. Error-viesti 
    lomakkeeseen, jos käyttäjän antamat todentamistiedot ovat virheelliset.
    """
    
    # AJAX-tekniikan avulla sivua voidaan päivittää ilman koko sivun
        # uudelleen lataamista. Tällöin saamme näkyviin kirjautumisominaisuuteen
        # error-viestin, kun käyttäjätunnukset menevät väärin ilman, että koko
        # sivua päivitetään.
    
    if request.method == 'POST':
        # Hae käyttäjän antamat tiedot lomakkeelta
        username = request.POST.get('käyttäjätunnus')
        password = request.POST.get('salasana')
        # Tarkistetaan, ovatko käyttäjän antamat tiedot oikein
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Jos käyttäjätiedot ovat oikein, kirjaudutaan sisään
            login(request, user)
            # Tarkistetaan, onko kyseessä AJAX-pyyntö
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'success': True, 'redirect_url': '/opiskeluhuoneet'})
            # Jos kyseessä ei ole AJAX-pyyntö, ohjataan käyttäjä opiskeluhuoneet-sivulle
                # eli kirjautuminen on onnistunut
            else:
                return redirect('opiskeluhuoneet')
        else:
             # Jos käyttäjätunnukset syötetään väärin, näytetään error-viesti
            error_message = 'Antamasi salasana tai käyttäjätunnus on väärä.'
            # Eli jos kyseessä on AJAX-pyyntö, palautetaan error-viesti
            if request.headers.get('x-requested-with') == 'XMLHttpRequest':
                return JsonResponse({'success': False, 'message': error_message})
            else:
                messages.error(request, error_message)
                return redirect('etusivu')
    return render(request, 'etusivu.html')

# Uloskirjautumisominaisuus
def uloskirjautuminen(request):
    logout(request)
    # Uudelleen ohjataan käyttäjä etusivulle
    return redirect('etusivu')

# Rekisteröityminen
def rekisterointi(request):
    # Tarkistetaan, onko lomake lähetetty oikein
    if request.method == 'POST':
        form = rekisterointiForm(request.POST)
        # Tarkistetaan, onko lomakkeen syötekentät täytetty oikein. Jos on,
        # rekisteröinti onnistuu ja käyttäjä ohjataan etusivulle
        if form.is_valid():
            # Etusivulle tulee popup-viesti rekisteröinnin onnistumisesta
            messages.success(request, 'Rekisteröinti onnistui. Voit nyt kirjautua sisään.')
            return redirect('etusivu')
    # Jos lomaketta ei ole lähetetty oikein, palautetaan tyhjä lomake
    else:
        form = rekisterointiForm()
    return render(request, 'rekisterointi.html', {'form': form})

# Opiskeluhuoneet
def opiskeluhuoneet(request):
    return render(request, 'opiskeluhuoneet.html')