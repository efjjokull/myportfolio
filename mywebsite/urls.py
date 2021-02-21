from django.urls import path
from . import views

app_name = 'mywebsite'

urlpatterns = [
    path('', views.PageView.as_view(), name='toppage'),
    path('list/', views.ListArticle.as_view(), name='listpage'),
    path('detail/<int:pk>', views.DetailArticle.as_view(), name='detailpage'),
    path('delete/<int:pk>', views.DeleteAticle.as_view(), name='deletepage'),
    path('create/', views.CreateArticle.as_view(), name='createpage'),
    path('update/<int:pk>', views.UpdateArticle.as_view(), name='updatepage'),
    path('login/', views.LoginPage.as_view(), name='loginpage'),
    path('logout/', views.LogoutPage.as_view(), name='logoutpage'),
    
]