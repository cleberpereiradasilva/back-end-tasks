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
* [POST] `http:localhost:3000/signup`
* Content *JSON*
```
{
	
	"name": "Joe",			
	"email": "joe25@example.com",
	"password" : "secret"
}
```
### Login
* [POST] `http:localhost:3000/signin`
* [GET] `http:localhost:3000/tasks`
* [POST] `http:localhost:3000/tasks`
* [DELETE] `http:localhost:3000/tasks/:id`
* [PUT] `http:localhost:3000/tasks/:id/toggle'`



