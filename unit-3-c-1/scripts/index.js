//store the products array in localstorage as "products"
document.getElementById("products").addEventListener("submit" ,addproduct);

function addproduct(){
    var obj={
        type:products.type.value,
        desc:products.desc.value,
        price:products.price.value,
        image:products.image.value,
    }
    let arr=JSON.parse(localStorage.getItem("products"))||[];
   arr.push(obj);
   localStorage.setItem("products",JSON.stringify(arr) );
}