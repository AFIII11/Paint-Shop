from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
from django.shortcuts import render,redirect
from .serializers import UserRegisterSerializer
from .serializers import LoginSerializer
from .serializers import AddProductSerializer
from .serializers import contactViewSerializer
from .models import login
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import register,products,contact



class UserRegisterSerializerAPIView(GenericAPIView):
    serializer_class_register=UserRegisterSerializer
    serializer_class_login=LoginSerializer
    serializer_class_products=AddProductSerializer

    def post(self,request):
        login_id=''
        Name=request.data.get('Name')
        
        Email=request.data.get('Email')
        Phone_Number=request.data.get('Phone_Number')
        username=request.data.get('username')
        password=request.data.get('password')
        image=request.data.get('image')
        role='user'
        userstatus='0'
        if(login.objects.filter(username=username)):
            return Response({'message':'Duplicate username Found!'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
            print(serializer_login)

        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
            print(login_id)
        serializer=self.serializer_class_register(data={'name':Name,'email':Email,'contact':Phone_Number,'log_id':login_id,'user_status':userstatus,'image':image})    
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'User Registered Successfully','success':True},status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class LoginUserAPIView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self,request):
        catagory=""
        email=""
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=login.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serializer=LoginSerializer(logreg,many=True)
            for i in read_serializer.data:
                id=i['id']
                role=i['role']
            regdata=register.objects.all().filter(log_id=id).values()   
            print(regdata)  
            for i in regdata:
                user_id=i['id']
                user_status=i['user_status']
                email=i['email']
              
              

            return Response({'data':{'login_id':id,'email':email,'username':username,'password':password,'role':role,'user_id':user_id,'user_status':user_status,}})
        else:
            return Response({'data':'username or password is invalid','success':False,},status=status.HTTP_400_BAD_REQUEST)


class Getalldata(GenericAPIView):
   serializer_class=UserRegisterSerializer
   def get(self,request):
      queryset=register.objects.all()
      if(queryset.count()>0):
         serializer=UserRegisterSerializer(queryset,many=True)
         return Response({'data':serializer.data,'message':'Your Items Updated','success':True},status=status.HTTP_200_OK)
      else:
            return Response({'data':'no data available','success':False},status=status.HTTP_201_CREATED)
      


      
class AddProduct(GenericAPIView):
    serializer_class_products=AddProductSerializer
    

    def post(self,request):
        login_id=''
        name=request.data.get('name')
        color=request.data.get('color')
        
        catagories=request.data.get('catagories')
        
        brands=request.data.get('brands')
        contact=request.data.get('contact')
        serializer=self.serializer_class_products(data={'name':name,'color':color,'catagories':catagories,'brands':brands,'contact':contact})    
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'product Registered Successfully','success':True},status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
    

class Getproduct(GenericAPIView):
   serializer_class=AddProductSerializer
   def get(self,request):
      queryset=products.objects.all()
      if(queryset.count()>0):
         serializer=AddProductSerializer(queryset,many=True)
         return Response({'data':serializer.data,'message':'Your Items Updated','success':True},status=status.HTTP_200_OK)
      else:
            return Response({'data':[],'message':'no data available','success':False},status=status.HTTP_201_CREATED)

class Deleteproduct(GenericAPIView):
   def delete(self,request,id):
      queryset=products.objects.get(pk=id)
      queryset.delete()
      return Response({'message':'Deleted   Successfully','success':False},status=status.HTTP_201_CREATED)
class Editproduct(GenericAPIView):
   def get(self,request,id):
      queryset=products.objects.filter(pk=id).values()
      return Response({'data':queryset,'message':'Edited  Successfully','success':False},status=status.HTTP_200_OK)

class Update_product(GenericAPIView):
        serializer_class=AddProductSerializer
        def put(self,request,id):
            queryset=products.objects.get(pk=id)
            print(queryset)
            serializer=AddProductSerializer(instance=queryset,data=request.data,partial=True)
            print(serializer)
            if serializer.is_valid():
                serializer.save()
                return Response({'data':serializer.data,'message':'updated succesfully','success':True},)
            else:
                return Response({'data':'something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)



class AddContact(GenericAPIView):
    serializer_class=contactViewSerializer
    
    def post(self,request):
        fname=request.data.get('fname')
        lname=request.data.get('lname')
        contact=request.data.get('phonenumber')
        email=request.data.get('email')
        message=request.data.get('message')
        serializer=self.serializer_class(data={'fname':fname,'lname':lname,'contact':contact,'email':email,'message':message,})
        print(serializer) 
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated succesfully','success':True},)
        else:
            return Response({'data':'something went wrong','success':False},status=status.HTTP_400_BAD_REQUEST)


class GetContact(GenericAPIView):
   serializer_class=contactViewSerializer
   def get(self,request):
      queryset=contact.objects.all()
      if(queryset.count()>0):
         serializer=contactViewSerializer(queryset,many=True)
         return Response({'data':serializer.data,'message':'Your Contacts Updated','success':True},status=status.HTTP_200_OK)
      else:
            return Response({'data':[],'message':'no data available','success':False},status=status.HTTP_201_CREATED)
