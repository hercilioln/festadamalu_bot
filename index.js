var twit = require('twit');
require("dotenv").config();
const randomItem = require('random-item');
var schedule = require('node-schedule');

var Twitter = new twit({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET_KEY,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
});

var arr = [
    'roubar a chave da casa dos fundos pra transar',
    'grupo de estranhos entrando na festa só porque tinham maconha e bong',
    'role de 30 pessoas que virou 100 pessoas',
    'polícia batendo no portão por causa de violão', 
    'policial dizendo que também gosta de cerveja e pagode e amigos mas agora passa o documento',
    'boquete no banheiro',
    'transar na cama da malu sem a malu', 
    'arrombar a adega do meu avô pra beber cachaça mineira',
    'quebrar o degrau da lavanderia',
    'dormir na garagem',
    'comer macarrão doce às 6h da manhã',
    'fumar maconha na escada',
    'beijar na laje',
    'beijar na área de inverno e quebrar um vaso de flor',
    'chorar no role por causa de ficante',
    'guacamole',
    'bolar baseado em cima do disco do the wall',
    'tomar doce no quarto da malu',
    'chorar debaixo da pia',
    'se esconder debaixo da bancada pra chorar',
    '10 pessoas dormindo em um quarto'
]

var j = schedule.scheduleJob({hour: 12, minute: 20}, function(){
    Twitter.post('statuses/update',
    {
        status: randomItem (arr)
    },
    function(err, data, response){
        console.log(data)
    });
});