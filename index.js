      
   let index=-1
    const data=[]
  function  aq(){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('phone').value 
    if(name=='' || email==''|| phone=='')
    {
        document.getElementById('name').value=''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''
          alert('field is empty')
         return     
    }
    
    const obj={
       name: name,
       email: email,
    phone:phone


    }
    if(index<0)
        {
            data.push(obj)  
        }
   else{
        data[index]=obj
   }
   document.getElementById('name').value=''
   document.getElementById('email').value=''
   document.getElementById('phone').value=''
   index=-1
    display(data)
  }
   function  display(data)
   {
    let a=data.map((v,index)=>{
        return `<tr><td>${v.name}</td>
        <td>${v.phone}</td>
        <td>${v.email}</td>
        <td> <button onclick="remove(${index})">delete</button></td>
        <td> <button  onclick="edit(${index})" >edit</button></td>
        </tr>`
    })
    document.getElementById('listofitem').innerHTML=a.join('')
   }
   function edit(id){
    index=id
    document.getElementById('name').value=data[id].name
    document.getElementById('phone').value=data[id].phone
    document.getElementById('email').value=data[id].email

   }
  function remove(id){
   data.splice(id,1)
   display(data)    

  }
function search12()
{
  let filterData= document.getElementById('searchInput').value
  console.log(filterData)
  let sc = data.filter((data)=>{
    return (data.name==filterData||data.phone==filterData||data.email==filterData)
  })
  if(sc)
  {
    display(sc)
  }
  else{
    display(data)
  }  
}