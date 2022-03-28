https://adonisjs.com
https://www.patreon.com/adonisframework

## Installation
- npm install
- copy the .env.example and rename it as .env and add your credentials such as : 
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=6uAi51riDxmcX1eUXmxeck1b8m-1w3Rh
DRIVE_DISK=local
SESSION_DRIVER=cookie
CACHE_VIEWS=false
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=your_database_user
MYSQL_PASSWORD=your_database_password
MYSQL_DB_NAME=your_database_name
MYSQL_DEBUG=true
```
- then run :
- node ace migration:run
- node ace db:seed
- node ace serve --watch

To rallback all migrations: 
- node ace migration:rollback --batch 0


## packages installed to create this project
- npm i @adonisjs/lucid
- node ace configure @adonisjs/lucid
- npm install phc-argon2
- node ace make:model User -m
- node ace make:seeder User
- node ace migration:run
- node ace db:seed
- node ace make:controller UsersController
- https://docs.adonisjs.com/guides/auth/introduction
- npm i @adonisjs/auth
- node ace configure @adonisjs/auth
- node ace make:model Post -mc

## Source of information:
- https://www.opensourceagenda.com/projects/awesome-adonisjs 


## Todo