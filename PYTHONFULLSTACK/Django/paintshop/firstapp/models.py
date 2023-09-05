from django.db import models

# Create your models here.
from django.db import models
class login(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class register(models.Model):
    name=models.CharField(max_length=30)
    contact=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    user_status=models.CharField(max_length=30)
    log_id=models.ForeignKey(login,on_delete=models.CASCADE)

class products(models.Model):
    name=models.CharField(max_length=30)
    catagories=models.CharField(max_length=30)
    brands=models.CharField(max_length=30)
    contact=models.CharField(max_length=30)
    color=models.CharField(max_length=30)
