from django.urls import path
from verkkosivut import views

# Olemassa olevat url osoitteet
urlpatterns = [
    path('', views.etusivu, name='etusivu'), 
    path('opiskeluhuoneet/', views.opiskeluhuoneet, name='opiskeluhuoneet'),
    path('uloskirjautuminen/', views.uloskirjautuminen, name='uloskirjautuminen'),
    path('rekisterointi/', views.rekisterointi, name='rekisterointi'),
    path('403/', views.ei_paasya, name='403'),
]
