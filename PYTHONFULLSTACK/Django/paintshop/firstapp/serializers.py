from rest_framework import serializers
from .models import login
from .models import register
from .models import products



class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model =login
        fields = '__all__'
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model =register
        fields = '__all__'
class AddProductSerializer(serializers.ModelSerializer):
    class Meta:
        model =products
        fields = '__all__'     