from rest_framework import serializers
from .models import login
from .models import register
from .models import products
from .models import contact




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
class contactViewSerializer(serializers.ModelSerializer):     
      class Meta:
        model =contact
        fields = '__all__'
        
