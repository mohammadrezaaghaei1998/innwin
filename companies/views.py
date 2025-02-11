from django.shortcuts import render

# Create your views here.



def company_registeration(request):
    return render(request, 'companies/company_registeration.html')


def company_detail(request):
    return render(request, 'companies/company_detail.html')

def company_dashboard(request):
    return render(request, 'companies/company_dashboard.html')


def company_login(request):
    return render(request, 'companies/company_login.html')


def catalogues(request):
    return render(request, 'companies/catalogues.html')


def catalogue_detail(request):
    return render(request, 'companies/catalogue_detail.html')
