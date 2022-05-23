let arr=JSON.parse(localStorage.getItem("products"));
arr.forEach(function(e ,index){
   
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=e.image;
    let type=document.createElement("h3");
    type.innerText=e.type;
    let price=document.createElement("h3");
    price.innerText=e.price;
    let desc=document.createElement("p");
    desc.innerText=e.desc;
    let btn=document.createElement("button");
    btn.setAttribute("id","remove_product")
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
           dlt(e,index);
    })
    div.append(img,type,price,desc,btn);
    document.getElementById("all_products").append(div);

});
function dlt(e,index){
    arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();
}