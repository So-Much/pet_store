from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class BaseItem(BaseModel):
    name : str
    description : str | None = None
    price : float
    tax : float
    tags : list[str] = []
    

@app.get('/')
async def root() -> str:
    return "Hello World"
