
// step-1
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2
    const emailFeild=document.getElementById('user-email');
    const email=emailFeild.value;
    //  step-3
    const passwordField=document.getElementById('use-password');
    const password=passwordField.value;

    // step-4: verify email & password
    if(email==='rudrarubel@gmail.com' && password==='@learn23'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid Email or Password');
    }

})

Math.max.apply(null,[45,4,1,58,8])