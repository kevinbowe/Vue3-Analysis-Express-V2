# Vue3-Analysis-Express-V1


This is a functional demonstration of Express and VSCode RestClient Extension.

Express is a Nodejs application that allows a developer to create a locally running host.
The host will respond to HTTP requests: GET, PUT, POST, DELETE

RestClient Extension allows a developer to compose and execute HTTP requests.

The combination of Express and RestClient allow a developer to design, develop and test HTTP commands w/o any traditional backend.

To preview this file, run Markdown: Open Preview to Side.

## Setup
To get this project to function, TWO things are required:
	Express
	VSCode RestClient Extension.

### Express
Express is already defined in the package.json. 
To install from the package.json, enter this in a terminal:

	$ node init

This will read the package.json and install all of the required packages in the node_modules folder.

If Node Express has NOT been installed, enter this in a terminal:

	$ npm install express

### VSCode RestClient Expension

This is a VSCode extension that is available for download in the VSCode Marketplace.

## Running the Application

### Start Express

To start Express enter this in Terminal:
	
	$ npm start

OBSERVE

	vue3-analysis-express-v1@1.0.0 start
	node index.js

	"Listening on port: 3000"

### Run HTTP Requests

To test the existing HTTP requests, open the http.rest file.
After Express is running, you will see “Send Request” links above the example HTTP requests.
Select one of the links and the request will be sent.

<h3>Note</h3>


	Sometimes the links are visible but will not function. Moving from one page to another sometimes recovers the functionality. Stopping and Starting Express sometimes works.

## Example

GET http://localhost:3000/products/3?kevin=6

VSCode Tab Output

	HTTP/1.1 200 OK
	X-Powered-By: Express 
	Content-Type: application/json; charset=utf-8 
	Content-Length: 22 
	ETag: W/"16-CtQt77GINx9Tqa9fkaAcPSvmRJE" 
	Date: Mon, 01 Apr 2024 14:42:24 GMT 
	Connection: close 

	{ 
		"id": 3, 
		"name": "Shoe" 
	}

Terminal 

	{ kevin: '6' }
	{ id: '3' }

## Example

	POST http://localhost:3000/more
	Content-Type: application/json

	{
		"title" : "test",
		"id" : 5
	}

VSCode Tab Output

	HTTP/1.1 200 OK 
	X-Powered-By: Express 
	Content-Type: text/plain; charset=utf-8 
	Content-Length: 2 
	ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc" 
	Date: Mon, 01 Apr 2024 14:47:03 GMT 
	Connection: close 

	OK

Terminal 

	5
	test

## Example


<h3>Note</h3>
	The only difference between this example and the next example is the PATH.
	This demostrates using multiple paths can generate dofferent results. <br><br>

	POST http://localhost:3000/more
	Content-Type: application/json

	{
		"title" : "test",
		"id" : 5
	}

VSCode Tab Output

	HTTP/1.1 200 OK 
	X-Powered-By: Express 
	Content-Type: text/plain; charset=utf-8 
	Content-Length: 2 
	ETag: W/"2-nOO9QiTIwXgNtWtBJezz8kv3SLc" 
	Date: Mon, 01 Apr 2024 14:48:43 GMT 
	Connection: close 

	OK

Terminal 

	56
	test-add


