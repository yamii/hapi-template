## Com API

#### Usage

* `npm install`
* `npm run db:migrate`
* `npm start`

Set Environment variables
`DB_NAME`       - database name
`DB_HOST`       - database host
`DB_USERNAME`   - database connection username
`DB_PASSWORD`   - database connection password

## Developing
* `npm install`
* `npm run db:migrate`
* `npm start` or `nodemon`

Test ( not yet implemented )
* `npm test`

Lint
* `npm run lint`

## Conventions

Rest API is running using HapiJS.
When creating a new resource:
- Create a new directory `plural form` under `plugins` directory
- Register a new `hapi js plugin` with that `resource`
- Put reusable functions for your resource inside `lib/{resource-name}`

**REST Error**

Use [Hapi JS Boom](https://github.com/hapijs/boom)  for reply errors
```
	request.server.methods.reply.error(
		reply,
		Boom.badImplementation( createError.message ),
		createError
	);
```

When `creating` a resource like of `POST /v1/users` ( for user creation ) - Please specifiy some Sequelize Errors to return correct http
error
```
promise
	.catch( Sequelize.ValidationError, ( valError ) => {
		t.rollback();
		request.server.methods.reply.error(
			reply,
			Boom.badRequest( valError.message ),
			valError.errors
		);
	} )
	.catch( Sequelize.UniqueConstraintError, ( constError ) => {
		t.rollback();
		request.server.methods.reply.error(
			reply,
			Boom.badRequest( constError.message ),
			constError.errors
		);
	} )
```
