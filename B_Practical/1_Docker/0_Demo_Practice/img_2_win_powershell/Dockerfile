FROM mcr.microsoft.com/powershell
RUN mkdir -p /demo
# swithc shell in windows
SHELL ["pwsh","-command"] 
RUN "Hello Windows on Docker !" | Out-File -Path /demo/message.txt

# Y: RUN =>  docker run <img-name> cat /demo/message.txt
