from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from django.core.paginator import Paginator
from . import graphs
# Create your views here.
TOPICS = []
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
		global TOPICS
		TOPICS = graphs.topic_board()
		topics = Paginator(TOPICS, 20)
		page_number = request.GET.get('page')
		page_obj = topics.get_page(page_number)
		#topics = ['Hash']*100
		return render(request, 'trends/topics.html',context={"topics":page_obj})

class TopicDetail(View):
	def get(self,request,name):
		if request.is_ajax():
			context = graphs.topic_graph(name.strip())
			return JsonResponse(context,status=200)
		else :
			return render(request, 'trends/topics_detail.html',context={"topic":name})



class About(View):
	def get(self,request):
		return render(request, 'trends/about.html')
