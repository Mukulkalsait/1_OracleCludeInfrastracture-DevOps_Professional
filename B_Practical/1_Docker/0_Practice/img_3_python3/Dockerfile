FROM python:3.12.5-slim

WORKDIR /python-app
# CMD [ "python3" ] DX: if i run this command, (which is invalid) CONTAINER => EXIT.

COPY ./app.py .

ENV eSECRET_API_KEY=75C57EA3C2B5C5EA\
  url=https://vihaanaitech.com/main/Apis/app_key_verify.php\
  eVERIFICATION_KEY=8A9AB63614582D29
# Y: EXTRAS 
# app_host='0.0.0.0' app_='5000'\
# lsl="ls -altir"\
# username='mukul_dk'\

CMD [ "python3", "app.py" ]

