document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');
    const depositField=document.getElementById('deposit-field');
    const newDepositAmount=depositField.value;
    // console.log(depositAmount);

    const depositTotalElement=document.getElementById('deposit-total');
    
    const previousDepositTotal=depositTotalElement.innerText;

    const currentDepositTotal=parseFloat(previousDepositTotal)+parseFloat(newDepositAmount);

    depositTotalElement.innerText=currentDepositTotal;
    
    depositField.value='';

    const balanceTotalElement=document.getElementById('balance-total');
    const previousTotalBalance= balanceTotalElement.innerText;

    const currentTotalBalance=parseFloat(previousTotalBalance)+parseFloat(newDepositAmount);

    balanceTotalElement.innerText=currentTotalBalance;
});