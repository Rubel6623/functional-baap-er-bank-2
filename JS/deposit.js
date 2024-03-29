document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountStr=depositField.value;

    const newDepositAmount= parseFloat(newDepositAmountStr);
    
    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    // console.log(depositAmount);

    const depositTotalElement=document.getElementById('deposit-total');
    
    const previousDepositTotal=depositTotalElement.innerText;

    const currentDepositTotal=parseFloat(previousDepositTotal)+newDepositAmount;

    depositTotalElement.innerText=currentDepositTotal;
    
    depositField.value='';

    const balanceTotalElement=document.getElementById('balance-total');
    const previousTotalBalance= balanceTotalElement.innerText;

    const currentTotalBalance=parseFloat(previousTotalBalance)+newDepositAmount;

    balanceTotalElement.innerText=currentTotalBalance;
});