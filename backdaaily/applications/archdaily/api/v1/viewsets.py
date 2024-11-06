from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import HomePageDataSerializer

class HomePageDataViewSet(viewsets.ViewSet):
    def list(self, request):
        data = {
            "main_menu": [
                "Projects", "Products & BIM", "Folders", "News", "Professionals", "Jobs"
            ],
            "hero": {
                "carousel": [
                    {
                        "title": "Restaurant of Metasequoia Grove in Shan Wan Village / goa",
                        "src": "https://images.adsttc.com/media/images/6247/c383/3e4b/31c1/9d00/005a/medium_jpg/f.jpg",
                        "link": "https://www.archdaily.com/979531/restaurant-of-metasequoia-grove-in-shan-wan-village-goa"
                    },
                    {
                        "title": "Ca L’Àgata House / El Fil Verd, Estudi d'Arquitectura",
                        "src": "https://images.adsttc.com/media/images/6247/4be9/3e4b/31c1/9d00/0013/medium_jpg/_FI_elfilverd_ca_l__agata_19_%C2%A9milena_villalba_ok.jpg",
                        "link": "https://www.archdaily.com/979568/ca-lagata-house-el-fil-verd-estudi-darquitectura"
                    },
                    {
                        "title": "Picalo Cabin / Gerard Dombroski Workshop",
                        "src": "https://images.adsttc.com/media/images/6246/cb2c/1db7/dc01/65ea/3887/medium_jpg/dsf2029lrg.jpg",
                        "link": "https://www.archdaily.com/979529/picalo-cabin-gerard-dombroski-workshop"
                    }
                ],
                "editor_choice": {
                    "title": "From Representation to Reality: 19 Projects that Rethink Representation Techniques",
                    "src": "https://images.adsttc.com/media/images/622b/69cd/b9fa/780e/7d2e/f1ac/medium_jpg/fi.jpg",
                    "link": "https://www.archdaily.com/978226/from-representation-to-reality-19-projects-that-rethink-representation-techniques"
                },
                "banner": {
                    "src": "https://tpc.googlesyndication.com/simgad/10074669701303473094",
                    "link": "https://www.archdaily.com/monthly-topics"
                }
            }
        }
        serializer = HomePageDataSerializer(data)
        return Response(serializer.data)
