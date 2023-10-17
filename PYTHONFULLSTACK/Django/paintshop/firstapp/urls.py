
from django.urls import path
from . import views

urlpatterns = [
path('UserRegisterSerializerAPIView',views.UserRegisterSerializerAPIView.as_view(),name='UserRegisterSerializerAPIView'),
path('Getalldata',views.Getalldata.as_view(),name='Getalldata'),
path('LoginUserAPIView',views.LoginUserAPIView.as_view(),name='LoginUserAPIView'),
path('AddProduct',views.AddProduct.as_view(),name='AddProduct'),
path('Getproduct',views.Getproduct.as_view(),name='Getproduct'),
path('Deleteproduct/<int:id>',views.Deleteproduct.as_view(),name='Deleteproduct'),
path('Editproduct/<int:id>',views.Editproduct.as_view(),name='Editproduct'),
path('Update_product/<int:id>',views.Update_product.as_view(),name='Update_product'),
path('AddContact',views.AddContact.as_view(),name='AddContact'),
path('GetContact',views.GetContact.as_view(),name='GetContact'),
path('Replymessage',views.Replymessage.as_view(),name='Replymessage'),
path('getsinglecontact/<int:id>',views.getsinglecontact.as_view(),name='getsinglecontact'),
path('SearchProducts/<char>',views.SearchProducts.as_view(),name='SearchProducts'),



]

