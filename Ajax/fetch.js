
//fetch api


const url= 'https://jsonplaceholder.typicode.com/todos'

//1.get request
 function myAxios(method,url,body=null){
   // default get method
   return fetch(url).then(res=>{
        return res.json();
   })
}
myAxios('GET',url).then((res)=>{
  console.log(res)
}).catch((err)=>{
console.log(err)
})


//post request
function myAxios(method,url,body=null){
    const headers={
        'content-Type':'application/json'
    }
   return fetch(url,{
     method:method,
     headers:headers,
     body: JSON.stringify(body)
   }).then(res=>{
        return res.json();
   })
}
myAxios('POST',url,{name:'Rakesh',address:"ktm"}).then((res)=>{
  console.log(res)
}).catch((err)=>{
console.log(err)
})
