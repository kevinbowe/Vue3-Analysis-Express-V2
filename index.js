import Express from "express"
import Products from "./products.js"

const app = Express()
const port = 3000

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

function mid(request, response, next){
	console.log(request.query)
	console.log(request.params)
	next()
}

//		 GET, PUT, POST, DELETE
//				GET == Fetch Information from Target
//				PUT == Change Information in Target
//				POST == Add Information to Target
//				DELETE == Delete Information in Target

// 		app.get()
// 		app.post()
// 		app.delete
// 		app.put()

//			Arg1 -- Path
//			Arg2 -- Middle ware (skip) or Callback if only 2x args
//			Arg3 -- Callback
//			request == Input
//			response == Output
app.get("/products/:id", mid, (request, response) => {
	response.json(Products.find((product)=> {
		//			request.params is a string.
		//			Add '+' in from will convert the string value to a number
		return +request.params.id === product.id	}))

} )

app.post("/more", ( request, response ) => {
	response.sendStatus( 200 )
	console.log(request.body.id)
	console.log(request.body.title)
})

app.post("/add", ( request, response ) => {
	response.sendStatus( 200 )
	console.log(request.body.id)
	console.log(request.body.title)
})

app.listen(port, () => console.log(`"Listening on port: ${port}"`) )

