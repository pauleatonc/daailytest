from rest_framework import serializers

class CarouselItemSerializer(serializers.Serializer):
    title = serializers.CharField()
    src = serializers.URLField()
    link = serializers.URLField()

class EditorChoiceSerializer(serializers.Serializer):
    title = serializers.CharField()
    src = serializers.URLField()
    link = serializers.URLField()

class BannerSerializer(serializers.Serializer):
    src = serializers.URLField()
    link = serializers.URLField()

class HeroSerializer(serializers.Serializer):
    carousel = CarouselItemSerializer(many=True)
    editor_choice = EditorChoiceSerializer()
    banner = BannerSerializer()

class HomePageDataSerializer(serializers.Serializer):
    main_menu = serializers.ListField(child=serializers.CharField())
    hero = HeroSerializer()