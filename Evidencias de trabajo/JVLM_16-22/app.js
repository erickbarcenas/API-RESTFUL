console.log("Hola mundo");

const Joi = require('joi');
var express = require('express');
var app = express();
var mysql      = require('mysql');
var	bodyParser  = require("body-parser");
var	methodOverride = require("method-override");


app.use(express.json());

const usecad=[
	{id: 1, name: 'usecad1'},
	{id: 2, name: 'usecad2'},
	{id: 3, name: 'usecad3'}
];


app.get('/', function(req, res){
  res.send("Bienvenido");
});

app.get('/api/usecad', (req, res)=>{
  res.send(usecad);
});



/*app.get('/api/posts/:year/:month',(req,res)=>{
	res.send(req.params);
});


?sortBy=name
app.get('/api/posts/:year/:month',(req,res)=>{
	res.send(req.query);
});
*/

app.post('/api/usecad',(req,res)=>{
	const { error } = validateUsecad(req.body);
	if(error) return res.status(400).send(result.error.details[0].message);
		
	const usecad_ = {
		id: usecad.length +1,
		name: req.body.name
	};

	usecad.push(usecad_);
	res.send(usecad_); //usecad muestra todo
});


/*Put */
app.put('/api/courses/:id',(req,res)=>{
	const usecad_ = usecad.find(c => c.id ===parseInt(req.params.id));
	if(!usecad_) return res.status(404).send('Not found');

	const { error } = validateCourse(req.body);
	if(error) return res.status(400).send(result.error.details[0].message);

	//update course
	course.name = req.body.name;
	res.send(usecad);
});
/*Fin Put */

/*Delete */
app.delete('/api/usecad/:id',(req,res)=>{
	const usecad_ = usecad.find(c => c.id ===parseInt(req.params.id));
	if(!usecad_) return res.status(404).send('Not found');
	
	const index = usecad.index0f(usecad_);
	usecad.splice(index,1);

	res.send(usecad_);
});
/*Fin Delete */

/*Inicio Get*/
app.get('/api/usecad/:id',(req,res)=>{
	const usecad_ = usecad.find(c => c.id ===parseInt(req.params.id));
	if(!usecad_) return res.status(404).send('Not found');
	res.send(usecad_);
});
/*Fin Get */
/****************************************/


function validateUsecad(usecad_){
	const schema = {
			name: Joi.string().min(3).required()
		};
	
		return Joi.validate(usecad, schema);
	}
	
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Puerto..${port}`));