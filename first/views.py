from django.shortcuts import render

# Create your views here.



def index(request):
    return render(request, 'first/index.html')


def aboutus(request):
    return render(request, 'first/aboutus.html')

def product(request):
    return render(request, 'first/product.html')


def product_detail(request):
    return render(request, 'first/product_detail.html')



def log_reg(request):
    return render(request, 'first/log_reg.html')




def user_dashboard(request):
    return render(request, 'first/user_dashboard.html')


