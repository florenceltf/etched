FROM klakegg/hugo:0.74.3-ext-onbuild AS build

FROM httpd:2.4
COPY --from=build /target/ /usr/local/apache2/htdocs/

# Create the password
ARG PASSWORD
RUN mkdir -p /etc/apache2
RUN htpasswd -b -c /etc/apache2/.htpasswd etched ${PASSWORD}

# Update the configuration
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf
