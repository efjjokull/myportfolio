from django.shortcuts import render
from django.views import generic
from gensim.models import word2vec
from django.http.response import HttpResponse
# Create your views here.


# load model    --- model version is 11 ---
model = word2vec.Word2Vec.load('v11.model')


class P2v(generic.TemplateView):
    template_name = 'pages/p2v.html'

    def get_context_data(self, **kwargs):
        # load character name 
        character_name = []
        with open('static/character_name.txt','r',encoding="utf-8") as names:
            for name in names:
                character_name.append(name.rstrip())

        # load character type
        character_type = []
        with open('static/character_type.txt','r',encoding="utf-8") as names:
            for name in names:
                character_type.append(name.rstrip())

        context = super().get_context_data(**kwargs)
        context['character_name'] = character_name
        context['character_type'] = character_type

        return context

def submitCalculatedAns(request):
    poke_name = request.GET.get('c_name')
    poke_type = request.GET.get('c_type')
    output = model.most_similar(positive=[poke_name, poke_type])
    outname = []
    out = []
    for lis in output:

        a = str(lis[0])+"： 類似度 "+str(round(lis[1]*100,1))+"％,"
        out.append(a)

    return HttpResponse(out[:3])





