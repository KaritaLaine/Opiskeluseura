from django.urls import path
from . import views

urlpatterns = [
    path('', views.etusivu, name='etusivu'), 
    path('kirjaudu', views.kirjaudu, name='kirjaudu'),
    path('opiskeluhuoneet', views.opiskeluhuoneet, name='opiskeluhuoneet'),
    path('uloskirjautuminen', views.uloskirjautuminen, name='uloskirjautuminen'),
]