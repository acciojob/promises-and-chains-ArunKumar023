
let age= document.querySelector("#age")
let name=document.querySelector("#name")
let btn=document.querySelector("#btn")

let p= new Promise(function(resolve, reject){
    setInterval(function(){
        let age1=age.ariaValueMax;
        let name1=name.value;

        if(age1>18){
            alert(`Welcome,${name1}. You can vote`)
        }
        else{
            alert(`Oh sorry ${name1}. You aren't old enough`)
        }

    },4000)
})

btn.addEventListener('click', function(){
    return p
})