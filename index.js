const express = require('express')
const app = express()


//Создаем маршрутизатор
app.get('/',(req,res)=>{
    res.send('This home page')
})


app.get('/user/:name/:id',(req,res)=>{  //Динамические параметры  name и id
    res.send(`User ID: ${req.params.id}. User Name: ${req.params.name}`)  //Выводим эти параметры
})



//Запускаем сервер
const PORT = 3000

app.listen(PORT,() => {
console.log(`Сервер запущен: http://localhost:${PORT}`)
})