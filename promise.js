//promises
const person =new Promise ( (resolev,reject)=>{
      setTimeout( ()=>{
          let number=[11,22,33,44,55]
          resolev(number)
          reject('error occured ')
      } ,3000)
})
promise.then( (number)=>{
   console.log(number)
}).catch( (error)=>{
   console.log(error)
})