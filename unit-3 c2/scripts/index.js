// Add the coffee to local storage with key "coffee"
 const url ="https://masai-mock-api.herokuapp.com/coffee/menu";
 const arr=JSON.parse(localStorage.getItem("coffee"))||[];
 let j=1;
async function addHome(){
   
    try {
        let a=await fetch(url)
        
        let b=await a.json()
        append(b.menu.data)
      
    } catch (err) {
        console.log(err)
    }
       
   
}
addHome();



function append(data) {
    let container = document.getElementById("menu");
    data.forEach(function (el,i) {
      let img = document.createElement("img");
      img.src = el.image;
  console.log(img)
      let h2 = document.createElement("h3");
      h2.innerText = el.title;
    let price=document.createElement("h3");
    price.innerText=el.price;
    let btn=document.createElement("button");
    btn.innerText="ADD"
    btn.addEventListener("click",function(){
        pass(el,i);
       
       
    });
  
      let div = document.createElement("div");
      div.append(img, h2,price,btn);
  
      container.append(div);
      
    });
  }
 
  function pass(el,i){
      arr.push(el);
      let v=document.getElementById("coffee_count");
      v.innerText=j++
      localStorage.setItem("coffee",JSON.stringify(arr));
     
    
  }

  
   