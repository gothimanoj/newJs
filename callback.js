// const datas = [
//     {name:"ajay",profession:"software engineer"},
//     {name:"anuj",profession:"software Developer"},
//     {name:"anand",profession:"software Designer"}

// ];

// function getDatas(){
//     setTimeout(() => {
//         let output="";
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`
//         })
//         document.body.innerHTML=output;
//     }, 1000);
// }
 function myDisplayer(some) {
   
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myFirst();
 console.log(myFirst());
 console.log(mySecond());


 
const person =(friend,callfriend) =>{
    setTimeout( ()=>{
        console.log(`i am busy to her from  ${friend}.i will call you back`)
  },5000)
    callfriend()
}
const second = () =>{
    console.log(`i am driving right now`)
}
person("India",second)
