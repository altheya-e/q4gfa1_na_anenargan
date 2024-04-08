function checkName(){
    var name = document.getElementById("name").value;
    var input = document.getElementById("name");
    if(name.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function checkUsername(){
    var username = document.getElementById("username").value;
    var input = document.getElementById("username");
    if(username.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function checkPass(){
    var pass = document.getElementById("pass").value;
    var input = document.getElementById("pass");
    if(pass.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function checkEmail(){
    var email = document.getElementById("email").value;
    var input = document.getElementById("email");
    if(email.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function checkAddress(){
    var address = document.getElementById("address").value;
    var input = document.getElementById("address");
    if(address.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function checkInterests(){
    var interests = document.getElementById("interests").value;
    var input = document.getElementById("interests");
    if(interests.length === 0){
        input.style.borderColor = "red";
    }
    else{
        input.style.borderColor = "rgb(43, 255, 0)";
    }
}

function print(){
    var Name = document.getElementById("name").value;
    var Username = document.getElementById("username").value;
    var Pass = document.getElementById("pass").value;
    var Email = document.getElementById("email").value;
    var Address = document.getElementById("address").value;
    var Sex = document.getElementById("sex").value;
    var Interests = document.getElementById("interests").value;
    
    var output = document.getElementById("output");
    output.innerHTML = "Name: " + Name + "</br>Username: " + Username + "</br>Password: " + Pass + "</br>Email: " + Email + "</br>Sex: " + Sex  + "</br>Interests: " + Interests;

    return false;
}

function clearOutput(){
    var name = document.getElementById("name");
    name.style.borderColor = "gray";
    var username = document.getElementById("username");
    username.style.borderColor = "gray";
    var pass = document.getElementById("pass");
    pass.style.borderColor = "gray";
    var email = document.getElementById("email");
    email.style.borderColor = "gray";
    var address = document.getElementById("address");
    address.style.borderColor = "gray";
    var sex = document.getElementById("sex");
    sex.style.borderColor = "gray";
    var interests = document.getElementById("interests");
    interests.style.borderColor = "gray";

    var output = document.getElementById("output");
    output.innerHTML = " "; 
}





