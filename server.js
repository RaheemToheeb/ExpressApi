// const { json } = require('express');
// const { json } = require("express");
// const express = require("express");
// // note in express no need to create server
// const port = 4040;
// // This create instance of express and takes care of server creation
// const app = express();
// app.use(express.json());
// Different method of instance of express instance
// App.get();
// App.post();
// App.put();
// App.delete();
// const studentInfo = [
//   { name: "Raheem", Course: "Backend", year: "1 year" },
//   { name: "Mr Victor", Course: "Fullstack", year: "2years" },
//   { name: "Miss Cynthia", Course: "Fullstack", year: "6month" },
//   { name: "Miss Lucia", Course: "Frontend", year: "3years" },
// ];
const studentInfo = [
  {
    name: "Raheem",
    Course: "Backend",
    year: "1 year",
    grade: {
      Javascript: 60,
      HTML: 70,
      REACT: 50,
      node: 40,
    },
  },
  {
    name: "Azikwe",
    Course: "foolstack",
    year: "30 years",
    grade: {
      Javascript: 3330,
      HTML: 77770,
      REACT: 58880,
      node: 4880,
    },
  },
];

// app.get("/studentInfo", (req, res) => {
//   // res.status(200).json(studentInfo)
//   // res.status(200).json({message:"The student Course", data:studentInfo.grade})
//   // res.status(200).JSON.stringify({message:"student course",data:studentInfo.Course})
//   res.status(200).json({message: "List of student and their information",data: studentInfo[1].grade.HTML});
//   // res.status(200).json
// });
// // The call backfunc (req,res) is called the rout handler
// app.listen(port, () => {
//   console.log(`port is litening to ${port}`);
// });




// practice

const express=require("express")
const app =express();
const port = 3232;
app.get("/studentInfo",(req,res)=>{
  res.status(200).json({message:"Bio data",data:studentInfo[1].grade.node})
})

app.listen(port,()=>{
  console.log(`This is the port way to ${port}`)
})
