# DaailyTest

This project is a sample application that includes a Django backend and a React frontend, both deployed with Docker Compose to facilitate development and container management. The application's goal is to replicate a section of ArchDaily's homepage.

## Project Structure

The project structure is as follows:

daailytest/ 
  ├── backdaaily/ # Django backend code 
  ├── front/ # React frontend code 
  ├── .env # Environment variables file 
  ├── .gitignore # Git ignore configuration 
  └── docker-compose.yml # Docker Compose configuration

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

1. **Clone the Repository**

   Clone this repository to your local machine:

git clone https://github.com/pauleatonc/daailytest.git cd daailytest


2. **Set Up Environment Variables**

**To facilitate reviewing the exercise the .env file is in the repository. So it is not necesary to creat it again**

These variables configure the connection to the PostgreSQL database used by the backend.

## Running the Application

To start the entire application (frontend and backend) with Docker Compose, run the following command:

sudo docker compose -f docker-compose-dev.yml up --build

This command will:

- Build and deploy containers for the backend (Django), frontend (React), and database (PostgreSQL).
- Expose the frontend at `http://localhost:5173` and the backend at `http://localhost:8000`.

### Accessing the Application

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:8000](http://localhost:8000)

## Backend Structure (Django)

The Django backend is located in the `backdaaily` folder and is configured to connect to a PostgreSQL database. It includes basic configurations for migrations, static files, and frontend integration.

### Database Migrations

**Migrations are automated in the docker compose**

### Create Super User

To create a superuser on the backend, execute:

sudo docker compose exec -it backend bash 
python manage.py createsuperuser

### Static Files

Static files are collected in the `/app/staticfiles` folder within the `backend` container.

## Frontend Structure (React)

The React frontend is located in the `front` folder. It is set up to interact with the backend via the environment variable `VITE_API_URL`.

### Frontend Environment Variables

In the `docker-compose.yml` file, `VITE_API_URL` is defined so that the frontend can make requests to the backend at `http://localhost:8000`.
