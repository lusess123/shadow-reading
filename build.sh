
containers=$(docker ps -a | grep shadow-reading | awk '{print $1}')
if [ -n "$containers" ]; then
  echo "$containers" | xargs docker rm -f
fi

docker build -t shadow-reading  .

docker run -d  -p 3050:3000  shadow-reading
