FROM mcr.microsoft.com/powershell
RUN mkdir -p /demo

# IMP: swithc shell in windows before command.
SHELL ["pwsh","-command"]  
RUN "Hello Windows on Docker !" | Out-File -Path /demo/message.txt

# Y: RUN =>  docker run <img-name> cat /demo/message.txt
