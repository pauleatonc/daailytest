from rest_framework.routers import DefaultRouter
from .viewsets import HomePageDataViewSet, CarouselViewSet, EditorChoiceViewSet

router = DefaultRouter()
router.register(r'homepage', HomePageDataViewSet, basename='homepage')
router.register(r'carousel', CarouselViewSet, basename='carousel')
router.register(r'editor-choice', EditorChoiceViewSet, basename='editor-choice')

urlpatterns = router.urls