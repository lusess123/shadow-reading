# shellcheck disable=SC2148

docker build -t shadow-reading .

containers=$(docker ps -a --filter "ancestor=shadow-reading" --format "{{.ID}}")
if [ -n "$containers" ]; then
  docker rm -f $(echo "$containers")
fi

# Remove any existing container with the same name
if docker ps -a --filter "name=shadow-reading1" --format '{{.Names}}' | grep -w shadow-reading1; then
  docker rm -f shadow-reading1
fi

docker run -d --name shadow-reading1 -p 3050:3000 -v $(pwd)/audio_cache:/app/audio_cache shadow-reading