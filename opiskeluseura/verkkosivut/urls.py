from django.urls import path
from verkkosivut import views

# 404-virheviesti
handler404 = 'verkkosivut.views.virhe_404'

# Olemassa olevat url osoitteet
urlpatterns = [
    path('', views.etusivu, name='etusivu'), 
    path('opiskeluhuoneet/', views.opiskeluhuoneet, name='opiskeluhuoneet'),
    path('uloskirjautuminen/', views.uloskirjautuminen, name='uloskirjautuminen'),
    path('rekisterointi/', views.rekisterointi, name='rekisterointi'),
    path('403/', views.ei_paasya, name='403'),
]
