# shellcheck disable=SC2148



docker build -t shadow-reading  .

containers=$(docker ps -a | grep shadow-reading | awk '{print $1}')
if [ -n "$containers" ]; then
  echo "$containers" | xargs docker rm -f
fi

# shellcheck disable=SC2046
docker run -d  -p 3050:3000  -v $(pwd)/audio_cache:/app/audio_cache shadow-reading shadow-reading1
