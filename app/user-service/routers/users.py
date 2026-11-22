from fastapi import APIRouter
from schemas.user import User

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

users = [
    User(
        id=1,
        name="Alice",
        role="Administrator"
    ),
    User(
        id=2,
        name="Bob",
        role="Developer"
    ),
    User(
        id=3,
        name="Charlie",
        role="DevOps Engineer"
    ),
]


@router.get("/", response_model=list[User])
def get_users():
    return users
