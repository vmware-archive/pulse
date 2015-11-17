# Pulse Back-End

## Installation
```
  $ brew install postgres gradle
  $ brew tap caskroom/cask
  $ brew install brew-cask
  $ brew cask install java
```

## Database Setup
Pulse currently support PostgreSQL 9.4 and you will need a database user and database created *before* database migration
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
```
  $ ./gradlew clean build
  $ java -jar build/libs/pulse-*.jar
```

### Environment Variables
`SERVER_PORT`: Sets the http port, defaults to `8081`  
`DB_USERNAME`: Sets the database username, defaults to `pivotal`  
`DB_PASSWORD`: Sets the database user password, defaults to no password  
`DB_NAME`: Sets the database url, defaults to `pulse`  

## Testing
```
  $ ./gradlew clean build
```
