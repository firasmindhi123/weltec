let arr=[0,44,2,44,5,44,2,0,0,0,0,2,3]
// let b= arr.reduce((prev,curr,i)=>{
//     if(!prev.includes(curr))
//     {
//         if(arr.includes(curr,i+1))
//         prev.push(curr)  
//     }
//     return prev  
// },[])
// console.log(b)
let a= arr.reduce((prev,curr,i)=>{
   if(arr.indexOf(curr)===arr.lastIndexOf(curr) )
   {
    prev.push(curr)
   }
   return prev
},[])
console.log(a)