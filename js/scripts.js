//validate form
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
$(document).ready(function() {
    $("#toClick1").click(function(){
        $(".img1").toggle(100);
        $(".design").toggle(100);
    });
    $("#toClick2").click(function(){
        $(".img2").toggle(100);
        $(".development").toggle(100);
    });
    $("#toClick3").click(function(){
        $(".img3").toggle(100);
        $(".pmanagement").toggle(100);
    });
})