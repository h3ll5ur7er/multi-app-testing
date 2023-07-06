FROM python:3.11.0a1-alpine3.14
RUN apk add --no-cache rust cargo
RUN pip install fastapi uvicorn pydantic redis
COPY . /app
WORKDIR /app
EXPOSE 8000
ENTRYPOINT uvicorn main:api --host 0.0.0.0 --port 8000
