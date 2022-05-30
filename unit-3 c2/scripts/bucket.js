// On clicking remove button the item should be removed from DOM as well as localstorage.
const arr=JSON.parse(localStorage.getItem("coffee"));
let sum=0
arr.forEach(function(el,i){
    let img = document.createElement("img");
    img.src = el.image;
console.log(img)
    let h2 = document.createElement("h3");
    h2.innerText = el.title;
  let price=document.createElement("h3");
  price.innerText=el.price;
  let btn=document.createElement("button");
  btn.innerText="Remove"
  btn.addEventListener("click",function(){
      pass(el,i)
  });

    let div = document.createElement("div");
    div.append(img, h2,price,btn);

    document.getElementById("bucket").append(div);

    let pr=document.getElementById("total_amount");
  sum+=el.price;
  pr.innerText=sum;
   


})
function pass(el,i){
    arr.splice(i,1);
    localStorage.setItem("coffee",JSON.stringify(arr));
    window.location.reload();
}