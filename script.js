const bttn=document.getElementById('btn');
bttn.addEventListener("click",callby);
    function promiseby(age,name){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         if(age>=18){
          resolve("Welcome, ${name}. You can vote.");}
          else{
           reject("Oh sorry ${name} You aren't old enough");
          }
        },1000)
      })
    }
    function callby(){
    var age=document.getElementById("age").value;
    var name=document.getElementById('name').value;
    promiseby(age,name)
    .then((data)=>{
      console.log("Success",data);
    })
    .catch((data)=>{
      console.log("error",data);
    })
    }