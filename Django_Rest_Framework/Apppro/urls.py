from django.urls import path, include
from . import views
from rest_framework import routers
router = routers.DefaultRouter()
router.register(r'test', views.TestView)

urlpatterns = [
    path('', include(router.urls)),
    path('test', include('rest_framework.urls', namespace='rest_framework'))
]
