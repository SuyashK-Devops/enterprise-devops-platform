from fastapi import APIRouter
from schemas.product import Product

router = APIRouter(
    prefix="/products",
    tags=["Products"]
)

products = [
    Product(
        id=101,
        name="Laptop",
        price=1250.0
    ),
    Product(
        id=102,
        name="Keyboard",
        price=85.0
    ),
    Product(
        id=103,
        name="Mouse",
        price=45.0
    )
]


@router.get("/", response_model=list[Product])
def get_products():
    return products
