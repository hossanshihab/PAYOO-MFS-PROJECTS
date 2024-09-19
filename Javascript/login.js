
document.getElementById("login-button")
.addEventListener("click", function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    if(phoneNumber === '01628487088' && pinNumber === '53158'){
        window.location.href = './home.html';

        
        console.log('Login successfull');
    }else{
        alert("Wrong Credintials");
    }


})