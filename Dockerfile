FROM nginx:stable-alpine

# Copy static site into nginx html folder
COPY ./ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
