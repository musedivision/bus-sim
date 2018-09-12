SHELL:=/bin/bash
.PHONY: test

export DOCKER_REPO_URL := musedivision
export PROJECT_NAME := bus-sim
export VERSION=$(shell jq -rM '.version' package.json)




build: ## Build the container
	docker build -t $(PROJECT_NAME) .

build-nc: ## Build the container without caching
	docker build --no-cache -t $(PROJECT_NAME) .

run: ## Run container
	docker run --rm -it  --env-file=./config.env --name="$(PROJECT_NAME)" $(PROJECT_NAME)

up: stop build run ## start app


test:
	mocha

stop: ## Stop and remove a running container
	-docker stop $(PROJECT_NAME) || true
	-docker rm $(PROJECT_NAME) || true

clean:
	#-docker rmi $$(docker images --quiet --filter "dangling=true")
	-docker rmi -f $$(docker images | grep "^<none>" | awk '{print $3}')
	-docker rmi -f $$(docker images --filter='reference=$(PROJECT_NAME)' -a -q)

##################################################################################################
#    publish  container
##################################################################################################

release: build-nc publish ## Make a release

# Docker publish
publish: publish-latest publish-version ## Publish the `{version}` ans `latest` tagged containers

publish-latest: tag-latest ## Publish the `latest` tagged container
	@echo 'publish latest to $(DOCKER_REPO_URL)'
	docker push $(DOCKER_REPO_URL)/$(PROJECT_NAME):latest

publish-version: tag-version ## Publish the `{version}` tagged container
	@echo 'publish $(VERSION) to $(DOCKER_REPO_URL)'
	docker push $(DOCKER_REPO_URL)/$(PROJECT_NAME):$(VERSION)

# Docker tagging
tag: tag-latest tag-version ## Generate container tags for the `{version}` ans `latest` tags

tag-latest: ## Generate container `{version}` tag
	@echo 'create tag latest'
	docker tag $(PROJECT_NAME) $(DOCKER_REPO_URL)/$(PROJECT_NAME):latest

tag-version: ## Generate container `latest` tag
	@echo 'create tag $(VERSION)'
	docker tag $(PROJECT_NAME) $(DOCKER_REPO_URL)/$(PROJECT_NAME):$(VERSION)

sim:
	docker run -i $(DOCKER_REPO_URL)/$(PROJECT_NAME):latest