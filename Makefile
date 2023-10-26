build:
	docker build -t internship-front:v0.01 .
run:
	docker run -p 3000:3000 -d --rm --name internship-front-cont --env-file ./.env -v logs:/app/data internship-front:v0.01
stop:
	docker stop internship-front-cont
