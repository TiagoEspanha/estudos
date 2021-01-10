

# de qual imagem na nuvem vamos basear nossa imagem customizada
FROM php:7.4-fpm-alpine

run docker-php-ext-install pdo pdo_mysql