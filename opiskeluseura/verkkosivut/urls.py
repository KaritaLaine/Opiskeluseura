from django.urls import path
from . import views

urlpatterns = [
    path('', views.etusivu, name='etusivu'), 
    path('opiskeluhuoneet/', views.opiskeluhuoneet, name='opiskeluhuoneet'),
    path('uloskirjautuminen/', views.uloskirjautuminen, name='uloskirjautuminen'),
    path('rekisterointi/', views.rekisterointi, name='rekisterointi'),
]