let a= 'firas firas rahul mehul mehul firas mehul rahul anil divyang'
let b= a.split(' ')
let mp =new Map()
b.forEach((v)=>{
    if(mp.has(v))
    {
     mp.set(v,mp.get(v)+1)
    }
    else{
        mp.set(v,1)
    }
})
console.log(mp)