# FastAPI Project

## Description
This is a FastAPI project that serves as the backend for a pet store application.

## Features
- API endpoints for managing pets, customers, and orders
- Authentication and authorization using JWT tokens
- Database integration with SQLAlchemy
- Automatic API documentation with Swagger UI
- Unit tests with Pytest

## Installation
1. Clone the repository: `git clone https://github.com/your-username/fastapi-project.git`
2. Install the dependencies: `pip install -r requirements.txt`

## Configuration
1. Create a `.env` file in the project root directory.
2. Add the following environment variables:
    - `DATABASE_URL`: URL of the database connection
    - `SECRET_KEY`: Secret key for JWT token generation
    - `API_PREFIX`: Prefix for API routes (e.g., `/api/v1`)
    - `DEBUG`: Set to `True` for development mode, `False` for production mode

## Usage
1. Run the application: `uvicorn main:app --reload`
2. Access the API documentation at `http://localhost:8000/docs`

## Testing
1. Run the unit tests: `pytest`

## Contributing
Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).