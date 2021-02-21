from django import forms
from django.contrib.auth.forms import AuthenticationForm

"""
class Article(forms.Form):
    title = models.CharField(max_length=50)
    content = models.TextField()

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
"""
class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            field.widget.attrs['class'] = 'form-control'
            field.widget.attrs['placeholder'] = field.label