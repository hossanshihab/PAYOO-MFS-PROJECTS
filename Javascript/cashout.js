document.getElementById("button")
.addEventListener("click", function(event){
    event.preventDefault();

    const amounts = document.getElementById("cashout-amount").value;
    const pin = document.getElementById("cashout-pin").value;
    
    if(pin === '53158'){
            const mainBalance = document.getElementById("main").innerText;
            const balanceNumber = parseFloat(amounts);
            const mainNumber = parseFloat(mainBalance);

            const updateBalance = mainNumber - balanceNumber;

            document.getElementById("main").innerText = updateBalance;
    }else{
        alert('wrong')
    }
})