var express = require('express');
var cors = require('cors');
var bp = require('body-parser');
var jwt = require('jsonwebtoken');
var config = require('./configs/config');

var corsOpt = {
    origin: 'http://localhost:4200',
    optionSuccesStatus: 200
}

var app = express(); 

tareas = [{_id: 1, trabajo: 'primera tarea', usuario: 'Kari'},
        {_id: 2, trabajo: 'segunda tarea', usuario: 'Rafa'},
        ];

var users = [{nombre: 'Rafa', email: 'yo@yo.es', password:'1', id: 0}];


app.use(bp.json());

var api = express.Router();
var auth = express.Router();

api.use(cors());

api.get('/tareas', cors(corsOpt), (req,res)=>{
    res.json(tareas);
})

api.get('/tareas/:username', cors(corsOpt), (req,res)=>{
    var username = req.params.username;
    var resultado = tareas.filter(tarea => tarea.usuario == username);
    res.json(resultado);
})

api.post('/tarea', cors(corsOpt), (req,res)=>{
    tareas.push(req.body);
    res.json(req.body);
})


auth.use(cors())
auth.post('/login', cors(corsOpt), (req, res)=>{
    let user = users.find(user => user.email == req.body.email);
    if(!user)
    senderrorauth(res);
    if (user.password == req.body.password)
    sendtoken(user, res);
    else
    senderrorauth(res);
})

auth.post('/register', cors(corsOpt), (req,res)=>{
    var index = users.push(req.body) -1;
    var user = users[index];
    user.id = index;
    sendtoken(user, res);   
})

function sendtoken(user, res){
    var token = jwt.sign(user.id, config.llave);
    res.json({nombre: user.nombre, token});
}

function senderrorauth(res) {
    return res.json({success: false, message: 'Email o password erroneo'});
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(7070);
