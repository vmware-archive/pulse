# Installation

```
  $ brew install phantomjs
  $ bundle install
```

# Testing
You may run the integration tests with our ci script, which will configure your environment and start the frontend and
backend servers as well as run all tests.
```
  $ cd .. && ./ci/run.sh test
```

If you want to run the integration tests manually you need to have a front end web server running at http://localhost:8080
and the backend server running at http://localhost:8081.
```
  $ rspec
```


