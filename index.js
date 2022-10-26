const express = require('express')
const app = express()
const cors = require('cors');
const port =process.env.port || 5000;
app.use(cors())

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('JavaScrip server is running!')
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})
app.get('/courses/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedCourse = courses.find(c => c.id===id);
    res.send(selectedCourse);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})