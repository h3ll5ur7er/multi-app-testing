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
@api.get("/", response_model=User)
def index() -> User:
    user_data = r.get("user")
    if user_data:
        return User.parse_raw(user_data)


if __name__ == "__main__":
    uvicorn.run(api, host="0.0.0.0", port=8000)
