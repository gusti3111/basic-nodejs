// Core Modules: sudah dimiliki node js di librarynya
// file system module
const fs = require('fs')
// creating file using fs
// try{
// fs.writeFileSync('data/test.txt','this is text file');
// }catch(e){
//   console.log(e);
// }
//write file  asychronous 
// fs.writeFile('data/test.txt','writing texfile asychronous',(e) =>{
//   console.log(e)
// });
// const readDataSync = fs.readFileSync('data/test.txt','utf-8');
// console.log(readDataSync);

// const readDataASync = fs.readFile('data/test.txt','utf-8',(err,data)=>{
//   if(err) throw err;
//   console.log(data)

// })
// module readline
// untuk membuat 
const readline = require('node:readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});
rl.question('Input your name: ',(Name) =>{
  rl.question('Input your password : ',(password) =>{
    // taruh apa yang akan kita inputkan ke dalam sebuah array 
    const user = {Name,password};
    // read user.json file
    const readfile = fs.readFileSync('data/user.json','utf-8');
    // ubah data ke dalam bentuk JSONfile yang ada di dalam array kosong users
    const users = JSON.parse(readfile);
    // push data yang akan kita masukan menggunakan array user ke dalam array users

    users.push(user);
    // write  users array into data/user.json 
    fs.writeFileSync('data/user.json',JSON.stringify(users))
    

    
    rl.close();
  });
 
});

// read data in JSONfile
// const ReadJson = fs.readFile('data/user.json','utf8',(err,data)=>{
//   if(err) throw err;
//   console.log(data);
// });
