function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "") {        
        alert("please fill in your name");               
        return false;
    }
    else if  (email == "") {
        alert("Please fill in your name and email");        
        return false;
    }

    else  {
        alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
        
}