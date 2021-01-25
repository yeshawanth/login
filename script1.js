function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "ADMIN" && password == "USERNAME")
    {
        alert("login succesfull");
        //return false;
    }
    else{
        alert("login fail");
    }
}