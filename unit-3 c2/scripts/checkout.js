document.getElementById("form").addEventListener("submit",checkout);
let arr=[]
function checkout(){

    let obj={
        name:form.name.value,
        number:form.number.value,
        add:form.address.value,
    }
    arr.push(obj);
    localStorage.setItem("info",JSON.stringify(arr));

      
    let promis=new Promise(function(resolve,reject){
        
        if(order==form.name.value||order==form.number.value||order==form.address.value){
         let time=Math.random()*8000
 
        if(status){  
            setTimeout(function(){     
              resolve(order)
            },time)
     
          }
         else{
              reject("Sorry we can't server this")
            }
        }
    alert ("success");

}
