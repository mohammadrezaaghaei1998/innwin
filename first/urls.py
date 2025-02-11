from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('aboutus', views.aboutus, name='aboutus'),
    path('product', views.product, name='product'),
    path('product_detail', views.product_detail, name='product_detail'),
    path('log_reg', views.log_reg, name='log_reg'),
    path('user_dashboard', views.user_dashboard, name='user_dashboard'),
   


]