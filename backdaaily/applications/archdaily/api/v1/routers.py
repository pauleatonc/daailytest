from rest_framework.routers import DefaultRouter
from .viewsets import HomePageDataViewSet

router = DefaultRouter()
router.register(r'homepage', HomePageDataViewSet, basename='homepage')

urlpatterns = router.urls