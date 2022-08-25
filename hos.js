let prompt=require('prompt-sync')();
const { message } = require("prompt");
let count=prompt('count:')
   //patient name generation
async function generator(){
   for (let i = 0; i < count; i++) 
   {
    let ran = Math.floor(Math.random()*5); 
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    let randomnum = Math.floor(Math.random()* 25);
    let b = Math.floor(Math.random() * 25);
    let myPromise =await new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve( console.log( alpha[randomnum] + alpha[b] + alpha[randomnum] +  alpha[b] + " timing " + ran));
  },ran*1000);
});
}
}
generator();