import fastapi
import uvicorn
import redis
from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    email: str

api = fastapi.FastAPI()

r = redis.Redis(host='redis', port=6379, db=0)
@api.get("/{name}/{age}/{email}", response_model=User)
def index(name: str, age: int, email=str) -> User:
    user_data = User(name=name, age=age, email=email)
    r.set("user", user_data.json())
    return user_data


if __name__ == "__main__":
    uvicorn.run(api, host="0.0.0.0", port=8000)
