from rest_framework import serializers
from .models import Test
class TestSer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Test
        fields = ('id', 'title', 'comment','image', 'price')
