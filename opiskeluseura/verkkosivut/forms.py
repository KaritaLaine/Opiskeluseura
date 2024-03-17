from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.utils.translation import gettext as _

class rekisterointiForm(UserCreationForm):
    # Käyttäjätunnuksen syötekenttä
    username = forms.CharField(
        label='Käyttäjätunnus',
        min_length=3,
        max_length=150,
        help_text='',
        widget=forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Käyttäjätunnus'}),
        error_messages={
            'required': 'Käyttäjätunnus vaaditaan.',
            'min_length': 'Käyttäjätunnuksen pituus tulee olla vähintään 3 merkkiä.',
            'max_length': 'Käyttäjätunnus saa olla enintään 150 merkkiä pitkä.',
            'unique': 'Käyttäjätunnus on jo käytössä. Valitse toinen käyttäjätunnus.', 
        }
    )
    
    # Salasanan syöttökenttä
    password1 = forms.CharField(
        label='Salasana',
        min_length=8,
        # Piilotettu syötekenttä salasanalle
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Salasana'}),
        error_messages={
            'required': 'Salasana vaaditaan.',
            'min_length': 'Salasanan pituus tulee olla vähintään 8 merkkiä.',
            'password_too_similar':'Käyttäjätunnus ja salasana ovat liian samanlaisia.',
        }
    )
    
    # Salasanan vahvistus
    password2 = forms.CharField(
        label='Salasana uudelleen',
        min_length=8,
        widget=forms.PasswordInput(attrs={'class': 'form-control', 'placeholder': 'Salasana'}),
        error_messages={
            'required': 'Salasanan vahvistus vaaditaan.',
            'min_length': 'Salasanan vahvistuksen pituus tulee olla vähintään 8 merkkiä.',
        }
    )
  
    # Salasanat eivät täsmää virhekoodi
    def __init__(self, *args, **kwargs):
        self.error_messages['password_mismatch'] = 'Salasanat eivät täsmää.'
        self.error_messages['password_too_similar'] = 'Käyttäjätunnus on liian samanlainen kuin salasana.'
        super().__init__(*args, **kwargs)
    
    class Meta:
        model = User
        # Näytettävät kentät käyttäjälle
        fields = ['username', 'password1', 'password2']
