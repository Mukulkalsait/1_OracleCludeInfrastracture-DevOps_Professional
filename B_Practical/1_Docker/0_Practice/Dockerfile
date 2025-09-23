FROM alpine:3.20  
WORKDIR /applicatoin/1
RUN ["adduser","-D","m_dock"]
RUN apk add --no-cache cmatrix
CMD [ "sh" ]
USER m_dock

# Y: Run on docker => cmatrix -asu 3 -C yellow
