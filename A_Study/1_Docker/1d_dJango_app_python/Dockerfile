FROM python:3.12-alpine
WORKDIR /app
COPY ./requirements.txt /app/
RUN pip install --no-cache-dir -r ./requirements.txt

COPY ./devops/ /app/
RUN python3 manage.py migrate 
# R: The above command needs to exicute in order to run app so we ran it before. it also requires only 1st time.
EXPOSE 8000
ENTRYPOINT [ "python3" ]
CMD [ "manage.py","runserver","0.0.0.0:8000" ]
