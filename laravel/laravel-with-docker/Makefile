up:
	docker-compose up -d --build

down:
	docker-compose down

start:
	docker-compose run --rm artisan serve


install-laravel:
	docker-compose run --rm composer create-project --prefer-dist laravel/laravel:^7.4 app

composer:
	# run é pra rodar em algum container
	# a flag --rm é pra matar o container dps disso?
	# 'composer' aqui é o container que vai rodar o comando
	# Não precisa colocar o comando 'composer' dps do nome do container, pq é padrão chamar o nome do container
	docker-compose run --rm composer

migrate:
	docker-compose run --rm artisan migrate

migrate-rollback:
	docker-compose run --rm artisan migrate:rollback

npm-install:
	docker-compose run --rm npm install
	
npm-run-dev:
	docker-compose run --rm npm run dev



