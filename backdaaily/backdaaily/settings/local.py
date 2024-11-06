from .base import *
from dotenv import load_dotenv
import os

# Carga el archivo .env en el directorio raíz
load_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env'))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("DJANGO_SECRET_KEY")

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv("DB_NAME_LOCAL"),
        'USER': os.getenv("DB_USER_LOCAL"),
        'PASSWORD': os.getenv("DB_PASSWORD_LOCAL"),
        'HOST': os.getenv("DB_HOST_LOCAL"),
        'PORT': os.getenv("DB_PORT_LOCAL"),
    }
}


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = '/app/staticfiles/'


# Media files
# Defines the base URL and directory to serve user uploaded files during development
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'