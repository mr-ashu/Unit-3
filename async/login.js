
    var arr=JSON.parse(localStorage.getItem("info"))


    document.getElementById("loginpage").addEventListener("submit",function(event){
        event.preventDefault()
    
        let dataObj={
        name:document.getElementById("username").value,
        password:document.getElementById("password").value,
         }
     console.log(dataObj.name);
     console.log(arr.user)
     console.log(arr.pass)
     
     
    if(arr==null) {
        alert("Please create an account");
    window.location.href="signup.html"
    
    }
    
    
    else if(arr.user==dataObj.name &&
    arr.pass==dataObj.password){
        
        alert("Login successful");
    
    window.location.href='index.html'
    }
       
    } )   