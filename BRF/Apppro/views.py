from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TestSer, Test

class TestView(viewsets.ModelViewSet):
    queryset = Test.objects.all()
    serializer_class = TestSer


