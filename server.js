const express = require ('express');
const app = express();
const {loginHandling , markAtt , returnAtt} = require("./final");
const currentDate = new Date();

var http = require('http').Server(app);



http.listen(3000);

app.set('view engine' , 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended : true}));


app.get("/" , (req , res) => {
    res.render("index1");
})


app.post("/dashboard" , async (req , res) => {
    let branch_name = "";
    switch (req.body.branch) {
        case "branch1":
            branch_name = "CSE"
            break;
        case "branch2":
            branch_name = "EE"
            break;
        case "branch3":
            branch_name = "ECE"
        case "branch4":
            branch_name = "MnC"
        default:
            break;
    }
    
    const data = {
        "branch" : branch_name,
        "enroll" : req.body.enroll,
        "name" : req.body.name,
        "date" : currentDate.toDateString(),
    };
    
    const result = await loginHandling(req.body.name);
    if(result){
        res.render("index" , data);
    }
    else{
        res.send("Invalid user");
    }

})


var courses = ["ECN-242" , "ECN-291" , "ECN-203" , "ECN-207"];

app.get("/attendance:num" , async (req , res) => {
    const result = await returnAtt("god" , courses.at(req.params.num));
    res.send("Attendance in " + courses.at(req.params.num) + "is " + result);
})
app.get("/:index" , async (req,res) => {
    const result = await markAtt("god",courses.at(req.params.index));

    if(result){
        res.send("Done");
    }
    else{
        console.log("BYE");
    }
})

