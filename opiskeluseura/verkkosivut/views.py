from django.shortcuts import render

# Create your views here.
def etusivu(request):
    return render(request, 'etusivu.html')

def kirjaudu(request):
    return render(request, 'kirjautuminen.html')