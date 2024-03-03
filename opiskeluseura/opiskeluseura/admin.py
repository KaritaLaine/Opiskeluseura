from django.contrib import admin

from .models import Tehtava

class TehtavaAdmin(admin.ModelAdmin):
    fields = ["nimi", "hinta"]

admin.site.register(Tehtava, TehtavaAdmin)