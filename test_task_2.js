let arr=[2,3,4,5,6,6]

  let arr1= arr.reduce((prev,curr)=>{
    if(!prev.includes(curr))
    {
        prev.push(curr)
    }
    return prev
  },[])
  console.log(arr1)