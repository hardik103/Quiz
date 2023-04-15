const express=require('express');
const app=express();
var port=8080;

app.get('/',(request,response) => {
    response.cookie('email','hardikpandey9244');
    response.sendFile(__dirname+'/quiz.html');
});

app.get('/result',(request,response) => {
    var marksA=0,marksB=0,marksC=0;
    const setA=['c','a','b','c','a','a','b','c','a','b'];
    const setB=['a','c','b','d','a','c','d','a','b','d'];
    const setC=['d','a','a','b','b','c','a','c','d','b'];
    for(var i=0;i<10;i++) {
        if(request.query[`${i+1}`] == setA[i] ) marksA++;
        if(request.query[`${i+11}`] == setB[i] ) marksB++;
        if(request.query[`${i+21}`] == setC[i] ) marksC++;
    }
    response.setHeader( 'content-type' , 'text/html' )
    response.write(`Set A : ${marksA}/10<br>`);
    response.write(`Set B : ${marksB}/10<br>`);
    response.write(`Set C : ${marksC}/10<br>`);
    response.write(`Your score is ${ marksA+marksB+marksC }/30.`);
    response.end();
});

app.listen(port ,() => {
    console.log(`http://localhost:${port}/`);
});