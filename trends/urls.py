from django.urls import path
from . import views

app_name = 'trends'

urlpatterns = [
	# mysite.com/ 
    path('',views.index,name='index'),

    # mysite.com/topics
    path('topics/',views.Topic.as_view(),name='topics'),

    # mysite.com/about
    path('about/', views.About.as_view(),name='about'),
]