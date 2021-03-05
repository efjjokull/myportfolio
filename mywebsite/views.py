from django.shortcuts import render
from django.views import generic
from .models import Article
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView, LogoutView
from .forms import LoginForm
# Create your views here.

class PageView(generic.ListView):
    template_name = 'pages/index.html'
    model = Article

    def get_template_names(self):
        
        if self.request.user.is_authenticated:
            template_name = 'pages/loggedPage.html'
        else:
            template_name = self.template_name

        return [template_name]

class CreateArticle(generic.CreateView):
    template_name = 'pages/create.html'
    model = Article
    fields = ('title', 'content','author', )

    success_url = reverse_lazy('mywebsite:listpage')

    def get_template_names(self):
        
        if self.request.user.is_authenticated:
            template_name = 'pages/loggedCreate.html'
        else:
            template_name = self.template_name

        return [template_name]

class ListArticle(generic.ListView):
    template_name = 'pages/list.html'
    model = Article

class DetailArticle(generic.DetailView):
    template_name = 'pages/detail.html'
    model = Article
    context_object_name = 'item' # default_name is object

    def get_template_names(self):
        
        if self.request.user.is_authenticated:
            template_name = 'pages/loggedDetail.html'
        else:
            template_name = self.template_name

        return [template_name]

class DeleteAticle(generic.DeleteView):
    template_name = 'pages/delete.html'
    model = Article
    context_object_name = 'item'
    success_url = reverse_lazy('mywebsite:toppage')

    def get_template_names(self):
        
        if self.request.user.is_superuser:
            template_name = 'pages/loggedDelete.html'
        else:
            template_name = self.template_name

        return [template_name]

class UpdateArticle(generic.UpdateView):
    template_name = 'pages/update.html'
    model = Article
    fields = ('title', 'content', )
    success_url = reverse_lazy('mywebsite:toppage')

    def get_template_names(self):
        
        if self.request.user.is_superuser:
            template_name = 'pages/loggedUpdate.html'
        else:
            template_name = self.template_name

        return [template_name]

class LoginPage(LoginView):
    form_class = LoginForm
    template_name = 'pages/login.html'

    def get_template_names(self):
        
        if self.request.user.is_authenticated:
            template_name = 'pages/loggedlogin.html'
        else:
            template_name = self.template_name

        return [template_name]

class LogoutPage(LogoutView):
    template_name = 'pages/logout.html'
    