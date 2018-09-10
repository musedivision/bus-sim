SHELL:=/bin/bash

export PROJECT_NAME := bus_sim

build: ## Build the container
	docker build -t $(PROJECT_NAME) .

build-nc: ## Build the container without caching
	docker build --no-cache -t $(PROJECT_NAME) .

run: ## Run container
	docker run --rm -it  --env-file=./config.env --name="$(PROJECT_NAME)" $(PROJECT_NAME)

up: build run ## start app


stop: ## Stop and remove a running container
	-docker stop $(PROJECT_NAME) || true
	-docker rm $(PROJECT_NAME) || true