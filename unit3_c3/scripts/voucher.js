
   let total=0
   async function Voucher(){
    const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
   
       try {
           let a=await fetch(url);
           let b=await a.json();
          
           //console.log(b.image)
         
          show(b[0].vouchers)
       } catch (err) {
         console.log(err)
       }

   }
   Voucher()

  let show=(b)=>{
     b.forEach(function(el){
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image;
      let nam=document.createElement("h3");
      nam.innerText=el.name;
      let price=document.createElement("h3");
      price.innerText=el.price;
      let btn=document.createElement("button");
      btn.innerText="Buy"
      btn.addEventListener("click",function(){
        byVoch(el.image,el.name,el.price)
      })
      div.append(img,nam,price,btn)
      document.getElementById("voucher_list").append(div);
      total+=el.price;
    })
  }
  const arr=JSON.parse(localStorage.getItem("purchase"))||[];
function byVoch(image,name,price){
 vobj={
   image:image,
   name:name,
   price:price,
 }
 let tt=document.getElementById("wallet_balance");
  total -=vobj.price;
 tt.innerText=total
 arr.push(vobj)
 
  localStorage.setItem("purchase",JSON.stringify(arr));
   if(total<vobj.price){
     alert("Sorry! insufficient balance")
   }
   else{
     alert("Hurray! purchase successful")
   }

  
}
   