document.getElementById("loginpage").addEventListener("submit", function(event){
    event.preventDefault();
     let obj={
        nam:document.getElementById("name").value,
        mob:document.getElementById("number").value,
        user:document.getElementById("username").value,
        pass: document.getElementById("password").value,

     }
    
     if(obj.nam==0||obj.mob==0||obj.user==0||obj.pass==0){
        alert("Please fill all info");
     }
     else{
        alert("Sign-up successful");
       
     }
    
    
     localStorage.setItem("info",JSON.stringify(obj));
     window.location.href="login.html"
 })
