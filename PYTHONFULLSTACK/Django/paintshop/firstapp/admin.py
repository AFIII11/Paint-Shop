from django.contrib import admin
from .models import login,register,products,contact

# Register your models here.
admin.site.register(login)
admin.site.register(register)
admin.site.register(products)
admin.site.register(contact)
