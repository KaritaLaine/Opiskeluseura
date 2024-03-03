from django.db import models

class Tehtava(models.Model):
    otsikko = models.CharField(max_length=200)
    nimi = models.CharField(max_length=200)
    hinta = models.IntegerField(default = 0)

def __str__(self):
    return f"{self.otsikko} - {self.nimi} - {self.hinta}"