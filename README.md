# HAPI Starter:  Simple HapiJS Starter Seed

A simple HapiJS project quick-starter with API centric focused features

## Features

- Automated Swagger/OpenAPI Documentation via `hapi-swagger`
- Tests using `lab` & `code`
- Plugins to provide debugging functionality, such as
    - `blipp`: display the routes table at startup
    - `tv`: Interactive debug console
    - `good/good-console`: process monitoring
- Additional plugins
    - `inert`: static file and directory handler
    - `joi`: object schema validation
    - `vision`: template rendering (used by `tv`)

# Getting Started

## Installation

clone the repository with

	`git clone https://gogs.randomremains.com/geoff/hapi-starter.git`

navigate to installation directory via terminal (cmd)

	cd ~/hapi-starter

install dependencies via

	`npm update`

start the app via 

	`npm start`

visit your API running at `http://127.0.0.1:8000/` in [POSTMAN](https://www.getpostman.com/) or tool of choice

> NOTE: hosted self-signed certs may require `git config http.sslVerify=false`

## Usage

For **illustration purposes only**, this code base comes with a `routes/tasks.js` file designed to test an in-memory RESTful `/tasks` resource.  This is the quickest way to identify benefits this simple setup provides, such as

- Generated Open API documentation: [](http://127.0.0.1:8000/documention)
- Interactive Debugging: [](http://127.0.0.1:8000/debug/console)
- See how validations work (try not including a task or adding additional keys)
- See how testing works `npm test` see `test/tasks.test.js`

### Endpoints

|Method |Endpoint| Description|
|---|---|---|
| GET | /tasks | returns all tasks |
| GET | /tasks/{id} | return task by index |
| GET | /tasks/count | returns the number of tasks |
| GET | /tasks/completed | returns the completed tasks |
| GET | tasks/active | returns the active tasks |
| POST | /tasks | creates a new task |
| PUT | /tasks/{id} | replaces a task by index |
| DELETE | /tasks/{id} | removes a task by index |

### Example

Request 
```
POST /tasks
{
	task: "This is my Task",
	completed: false
}
```

Response
```
[
  {
    "task": "This is my Task",
	"completed": false	
  }
]
```

# License

[MIT](LICENSE)

# Todo
- add more tests
- replace config/plugins.js with `glue`
- move core folders into `src` directory
- tweak `eslint`

# Resources

- [HAPI Homepage](http://hapijs.com/)
- [HAPI Plugins](http://hapijs.com/plugins)
