# Pulse Back-End

## Installation
```
  $ brew install postgres gradle
  $ brew tap caskroom/cask
  $ brew install brew-cask
  $ brew cask install java
```

## Database Setup
Pulse currently supports PostgreSQL 9.4 and you will need a database user (default: pivotal with blank password) and database (default: pulse) created *before* database migration
are executed.

You may manually run database migrations by executing
```
  $ ./gradlew flywayMigrate -i
```

## Development/Deployment

**For development**:
```
  $ ./gradlew bootRun
```
The application will be available at [http://localhost:8081](http://localhost:8081).

**For deployment**:  
Make sure you have an ElephantSQL service associated with your space/app and set the `DB_NAME` env variable for your
backend app to the appropriate url to your ElephantSQL service.  
```
  $ ./gradlew clean build
  $ cf push pulse-acceptance-backend -p build/libs/pulse-*.jar
```
Flyway migrations must be run from your local dev machine and target your ElephantSQL instnace. You will find the appropriate database credentials for Flyway in your ElephantSQL Management Console.  

### Environment Variables
`SERVER_PORT`: Sets the http port, defaults to `8081`  
`DB_USERNAME`: Sets the database username, defaults to `pivotal`  
`DB_PASSWORD`: Sets the database user password, defaults to no password  
`DB_NAME`: Sets the database url, defaults to `pulse`  

## Testing
```
  $ ./gradlew clean build
```
## Troubleshooting
If you receive an error similar to  
```
Unable to obtain Jdbc connection from DataSource (jdbc:postgresql://localhost:5432/pulse) for user 'pivotal': Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
  Connection to localhost:5432 refused. Check that the hostname and port are correct and that the postmaster is accepting TCP/IP connections.
  Connection refused
  ```
  This is likely due to the fact that your postgres database is not currently running. You may find information on
  running your postgres install by executing the `brew info postgres` command.  
