from django.contrib import admin
from django.urls import path, include
from applications.archdaily.api.v1 import routers as archdaily_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(archdaily_router.urlpatterns)),  # API Routes
]