from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class rekisterointiForm(UserCreationForm):
    # Käyttäjätunnuksen syötekenttä
    username = forms.CharField(
        label='Username',
        min_length=3,
        max_length=150,
        help_text='',
        widget=forms.TextInput(attrs={'class': 'form-control'}),
    )
    
    # Salasanan syöttökenttä
    password1 = forms.CharField(
        label='Password',
        min_length=8,
        # Piilotettu syötekenttä salasanalle
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
    )
    
    # Salasanan vahvistus
    password2 = forms.CharField(
        label='Confirm Password',
        min_length=8,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}),
    )

    class Meta:
        model = User
        # Näytettävät kentät käyttäjälle
        fields = ['username', 'password1', 'password2']