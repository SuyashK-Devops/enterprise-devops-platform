up:
	docker compose up -d

down:
	docker compose down

build:
	docker compose build

restart:
	docker compose restart

logs:
	docker compose logs -f

status:
	docker compose ps

clean:
	docker compose down -v
