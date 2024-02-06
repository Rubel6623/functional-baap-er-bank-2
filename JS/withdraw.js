document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);

    withdrawField.value='';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotal=withdrawTotalElement.innerText;

    const balanceTotalElement=document.getElementById('balance-total');
    const previousTotalBalance= balanceTotalElement.innerText;

    if(newWithdrawAmount>previousTotalBalance){
        alert('Baap er bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal=parseFloat(previousWithdrawTotal)+newWithdrawAmount;

    withdrawTotalElement.innerText=currentWithdrawTotal;

    const newTotalBalance=parseFloat(previousTotalBalance)-newWithdrawAmount;

    balanceTotalElement.innerText=newTotalBalance;
})