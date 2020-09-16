from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse,HttpResponse
import time
from . import graphs
# Create your views here.

def index(request):
	if request.is_ajax():
		context = {
		"india" : graphs.getIndia(),
		"piechart" : graphs.getPieChart(),
		"bargraph" : graphs.getBar(),
		}
		return JsonResponse(context,status=200)
	else :
		return render(request,'trends/index.html')

class Topic(View):
	def get(self,request):
		topics = graphs.topic_board()
		#topics = ['Hash']*100
		return render(request, 'trends/topics.html',context={"topics":topics})

class TopicDetail(View):
	def get(self,request):
		return HttpResponse('<h1>Detail</h1>')



class About(View):
	def get(self,request):
		return render(request, 'trends/about.html')
