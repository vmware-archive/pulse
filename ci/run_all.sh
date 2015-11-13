#!/bin/bash

set -e

kill_processes() {
  pkill -TERM -P $FRONTEND_SERVER_PID
  kill $BACKEND_SERVER_PID
}

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
  npm start &
  FRONTEND_SERVER_PID=$!
  test_url "http://localhost:8080"
  cd ..
}

backend_unit_tests() {
  cd backend
  ./gradlew flywayMigrate -i
  ./gradlew build
  java -jar build/libs/pulse-*.jar &
  BACKEND_SERVER_PID=$!
  test_url "http://localhost:8081"
  cd ..
}

integration_tests() {
  cd integration_tests
  bundle install --path local/vendor
  bundle exec rspec
  cd ..
}

trap kill_processes ERR
frontend_unit_tests
backend_unit_tests
integration_tests
kill_processes

