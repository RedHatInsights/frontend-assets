FROM quay.io/cloudservices/caddy-ubi:ec1577c

COPY LICENSE /licenses/

ENV CADDY_TLS_MODE http_port 8000

COPY ./Caddyfile /opt/app-root/src/Caddyfile
COPY src /opt/app-root/src/dist/
COPY ./package.json /opt/app-root/src
WORKDIR /opt/app-root/src
CMD ["caddy", "run", "--config", "/opt/app-root/src/Caddyfile"]
