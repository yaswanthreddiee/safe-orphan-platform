from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def home(request):
    return Response({
        "title": "SafeOrphan",
        "tagline": "AI Enabled Social Welfare Platform"
    })
