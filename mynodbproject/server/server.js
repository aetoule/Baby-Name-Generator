const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');


const app = express();
app.use(bodyParser.json());

const namesapi = "/api/names";

app.get('/api/favoriteNames', controller.read);
app.get(namesapi, controller.read);
app.get('/', function (req, res) {
    res.send('Hello world')
})
// new get call to do url parameter call
// app.get('/api/?gender=female', function(req,res) {
//     var queryParameter = req.query;
//     console.log(queryParameter.gender)
//     res.json(queryParameter);
// });


app.post(namesapi,controller.create);
app.put(namesapi + '/:id', controller.update);
app.delete(namesapi + '/:id', controller.delete);

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`listening on port, ${PORT}`);
})
