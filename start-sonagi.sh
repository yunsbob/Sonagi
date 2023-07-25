docker-compose -f docker-compose-sonagi.yml pull

COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose-sonagi.yml up --build -d

docker rmi -f $(docker images -f "dangling=true" -q) || true