from django.urls import path
from . import views

app_name = 'digit_recognition'

urlpatterns = [
    path('', views.DigitRecognition.as_view(), name='toppage'),
]