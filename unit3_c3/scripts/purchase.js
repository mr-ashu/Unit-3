let sum=0;
 
let arr=JSON.parse(localStorage.getItem("purchase"));
 arr.forEach(function(el){

  let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=el.image;
      let nam=document.createElement("h3");
      nam.innerText=el.name;
      let price=document.createElement("h3");
      price.innerText=el.price;
      div.append(img,nam,price);
      document.getElementById("purchased_vouchers").append(div);
       let pp=document.getElementById("wallet_balance");
        sum+=el.price;
        pp.innerText=sum

 }) 
 