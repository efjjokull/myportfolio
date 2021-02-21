from django.urls import path
from . import views

app_name = 'p2v'

urlpatterns = [
    path('', views.P2v.as_view(), name='toppage'),
    path('submitName',views.submitCalculatedAns),
]