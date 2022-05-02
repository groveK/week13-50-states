let express = require('express')
let path = require('path')
let states_api = require('./routes/states')

let app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use(express.json())

app.use('/api', states_api)
//make all routes in 'states_api' available

app.use(function(req,res, next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})