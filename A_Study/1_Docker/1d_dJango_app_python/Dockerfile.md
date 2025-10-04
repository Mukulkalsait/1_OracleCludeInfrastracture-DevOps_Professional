## given orignal

FROM ubuntu

WORKDIR /app

COPY requirements.txt /app/
COPY devops /app/

RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

SHELL ["/bin/bash", "-c"]

RUN python3 -m venv venv1 && \
source venv1/bin/activate && \
pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD source venv1/bin/activate && python3 manage.py runserver 0.0.0.0:8000

## IDEAL ONE:

FROM python:3.12-slim

# Set working dir

WORKDIR /app

# Install dependencies

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project code

COPY devops /app/

# Expose Django default port

EXPOSE 8000

# Run Django server

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
