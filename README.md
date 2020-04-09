# Back End Taks(Nodejs)
Back End write in Node for a Android(react-native) app toDo list.

## Clone
`git clone https://github.com/cleberpereiradasilva/back-end-tasks.git`

## Config vars
* Open `.env_model` and rename to `.env`
* Edit `authSecret` like `e4e6ca42342f95....7c6257593c1e1`
* Edit `connectionString` like 'postgres://user:OfbZwl...@drona.db.elephantsql.com:5432/database'`

## Prepare Database
`npm run migrate`

## Start app
`npm run dev`

## Routes

### Create User
* [Method POST] `http:localhost:3000/signup`
* Content *JSON*
```
{	
  "name": "Joe",
  "email": "joe25@example.com",
  "password" : "secret"
}
```
### Login
* [Method POST] `http:localhost:3000/signin`
* Body(*json*)
```
{	  
  "email": "joe25@example.com",
  "password" : "secret"
}
```

### Get tasks
* [Method GET] `http:localhost:3000/tasks`
* **Authentication** with *bearer*


### Create task
* [Method POST] `http:localhost:3000/tasks`
* **Authentication** with *bearer*
* Body(*json*)
```
{
  "desc": "First task",
  "estimatedAt": "2020-04-01"
}
```


### Delete task
* [Method DELETE] `http:localhost:3000/tasks/:id`
* **Authentication** with *bearer*

### Toggle(done) task
* [Method PUT] `http:localhost:3000/tasks/:id/toggle'`
* **Authentication** with *bearer*



