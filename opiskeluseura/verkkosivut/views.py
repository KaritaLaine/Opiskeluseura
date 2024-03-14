from django.shortcuts import render
# "messages" avulla voimme näyttää kustomoituja viestejä käyttäjille
# + näyttää ne templeteissä.
from django.contrib import messages
# Djangon autentikaatiot sisään- ja uloskirjautumiseen
from django.contrib.auth import authenticate, login, logout
# Importit class näkymän parametrille joka vaatii käyttäjää
# olemaan sisäänkirjautuneena nähdäkseen sivun (funktionäkymät)
from django.contrib.auth.decorators import login_required, user_passes_test
# Importit "testeille joiden käyttäjien on läpäistävä" jotta he pääsevät tietyille sivulle (class näkymät)
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
# Importit "toimenpiteille" joita tehdään jos käyttäjällä ei ole oikeutta sivuun
from django.core.exceptions import PermissionDenied, ValidationError

from django.shortcuts import get_object_or_404, redirect, render


def etusivu(request):
    """
    Funktio sisäänkirjautumista varten, sekä uudelleenohjaus etusivulle jos
    käyttäjä on jo kirjautunut tai uudelleenohjaus kirjautumissivulle jos
    käyttäjän antamat todentamistiedot ovat virheelliset.
    """
    if request.method == 'POST':
        username = request.POST.get('käyttäjätunnus')
        password = request.POST.get('salasana')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('opiskeluhuoneet')
        else:
            # Kirjautumistiedot ovat väärät, näytä viesti
            messages.error(request, 'Antamasi salasana tai käyttäjätunnus on väärä!')
    
    # Render the etusivu template with or without an error message
    return render(request, 'etusivu.html')
        
        
def uloskirjautuminen(request):
    logout(request)
    return redirect('etusivu')

def kirjaudu(request):
    return render(request, 'kirjautuminen.html')

def opiskeluhuoneet(request):
    return render(request, 'opiskeluhuoneet.html')