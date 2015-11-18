#!/bin/bash
##
## Usage:
##  Runs all tests and starts the frontend and backend servers
##    - arguments
##      test: Runs all tests and exits immediately
##

set -e

kill_processes() {
  if [ -n "${FRONTEND_SERVER_PID}" ]; then
    pkill -TERM -P $FRONTEND_SERVER_PID
  fi

  if [ -n "${BACKEND_SERVER_PID}" ]; then
    kill $BACKEND_SERVER_PID
  fi
}

trap kill_processes EXIT

test_url() {
  set +e
  UP=7
  while [ $UP -ne 0 ]; do
    sleep 1
    echo "($1 not up, yet...)"
    curl --silent $1 > /dev/null
    UP=$?
  done
  set -e
}

frontend_unit_tests() {
  cd frontend
  npm install
  npm test
  cd ..
}

start_frontend() {
  cd frontend
  npm start &
  FRONTEND_SERVER_PID=$!
  test_url "http://localhost:8080"
  cd ..
}

start_backend() {
  cd backend
  java -jar build/libs/pulse-*.jar &
  BACKEND_SERVER_PID=$!
  test_url "http://localhost:8081"
  cd ..
}

backend_unit_tests() {
  cd backend
  ./gradlew flywayMigrate -i
  ./gradlew clean build
  cd ..
}

integration_tests() {
  cd integration_tests
  bundle install --path local/vendor
  bundle exec rspec
  cd ..
}

if [ $# -eq 1 ] && [ "$1" != "test" ]; then
  echo "Unknown argument: $1"
  exit 1
fi

frontend_unit_tests
start_frontend
backend_unit_tests
start_backend
integration_tests

if [ -z "$1" ]; then
  echo 'Press any key to exit....'
  read -p "$*"
fi
