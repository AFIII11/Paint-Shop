
from django.urls import path
from . import views

urlpatterns = [
path('UserRegisterSerializerAPIView',views.UserRegisterSerializerAPIView.as_view(),name='UserRegisterSerializerAPIView'),
path('Getalldata',views.Getalldata.as_view(),name='Getalldata'),
path('LoginUserAPIView',views.LoginUserAPIView.as_view(),name='LoginUserAPIView'),
path('AddProduct',views.AddProduct.as_view(),name='AddProduct'),
path('Getproduct',views.Getproduct.as_view(),name='Getproduct'),
path('Deleteproduct/<int:id>',views.Deleteproduct.as_view(),name='Deleteproduct'),


]

