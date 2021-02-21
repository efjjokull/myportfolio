from django.shortcuts import render
from django.views import generic

# Create your views here.

class DigitRecognition(generic.TemplateView):
    template_name = 'pages/recognition.html'