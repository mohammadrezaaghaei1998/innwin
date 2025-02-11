from django.urls import path
from . import views

urlpatterns = [
   
    path('company_detail', views.company_detail, name='company_detail'),
    path('company_dashboard', views.company_dashboard, name='company_dashboard'),
    path('company_registeration', views.company_registeration, name='company_registeration'),
    path('company_login', views.company_login, name='company_login'),
    path('catalogues', views.catalogues, name='catalogues'),
    path('catalogue_detail', views.catalogue_detail, name='catalogue_detail'),
]