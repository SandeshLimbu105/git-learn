console.log("it is me sandesh limbu tabebung");
console.log("from biratanagar nepal");
console.log("first changes after  going as aspected day2");
const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
         res.send('hello coders');
})
app.listen(port),()=>{
         console.log('server is running on port '+port);
}