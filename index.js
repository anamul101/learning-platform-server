const express = require('express')
const app = express()
const cors = require('cors');
const port =process.env.port || 5000;
app.use(cors())

const courses = require('./data/courses.json');
const featuser = require('./data/featursercourse.json')

app.get('/', (req, res) => {
  res.send('JavaScrip tutorial server is running!')
})

app.get('/featuser',(req,res)=>{
  res.send(featuser);
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
  console.log(`ES6 Courses on port ${port}`)
})

