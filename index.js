function register(){
 return  new Promise((resolve,reject)=>{
            resolve("done");
            // reject("something went wrong")
   })
}

(
  async ()=>{
     await register().then(data=>console.log(data)).catch(err=>console.log(err))
      // const result= await register();
      // console.log(result)
   }
)()