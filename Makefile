# Makefile

# Variables
DOCKER_COMPOSE = docker-compose

# Phony targets
.PHONY: build run clean fclean

# Build all services
build:
	$(DOCKER_COMPOSE) build

# Run all services
run:
	$(DOCKER_COMPOSE) up

# Stop and remove containers, networks
clean:
	$(DOCKER_COMPOSE) down

# Full clean: stop and remove containers, networks, images, and volumes
fclean: clean
	$(DOCKER_COMPOSE) down --rmi all --volumes --remove-orphans
	docker system prune -af

re: clean all

# Default target
all: build run