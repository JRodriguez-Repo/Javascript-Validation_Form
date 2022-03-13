const form = document.getElementById('form');
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwdConfirm');



//Event listener to validate password entries using regEx

form.addEventListener('submit', ()=> {

    const regExPattern =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?*&^$])[a-zA-Z0-9!?*&^$S]{8,15}/g;
   
    if(pwd.length < 8 || pwd.length > 15 ) {

        alert('Password must be between 8 and 15 characters');
    }
    if( pwdConfirm.value !== pwd.value ) {

        alert('Password entries must match');
    }
     if(pwd.value.match(regExPattern)) {

       alert('Password accepted!');
    }
    else {
        alert('Password must be a minimum of 8 characters long and contain one uppercase letter, one lowercase letter,' + 
        'a digit, and one of the following special characters (!?*&^$)');
    }

});
