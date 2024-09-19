document.getElementById("deposit-button")
.addEventListener("click", function(event){
    event.preventDefault();
    const amountNumber = document.getElementById("amount").value;
    const pinNumber = document.getElementById("pin-number").value;
    
    // Verify Pin Number and add money to the balance
    if(pinNumber === '53158'){        
        const mainBalance = document.getElementById("main").innerText;
        const mainNumber = parseFloat(mainBalance);
        const amountNum = parseFloat(amountNumber);

        const newBalance = mainNumber + amountNum;
        const update = main = newBalance.innerText;
        document.getElementById("main").innerText = newBalance;
    }else{
        alert('Invalid');
    }
})