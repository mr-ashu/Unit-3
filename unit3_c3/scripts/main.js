document.querySelector("#form").addEventListener("submit",storData);
let arr=JSON.parse(localStorage.getItem("user"))||[];

function storData(){
  let obj={
    name:form.name.value,
    email:form.email.value,
    address:form.address.value,
    amount:form.amount.value,
  }
  arr.push(obj);
  localStorage.setItem("user",JSON.stringify(arr));
}