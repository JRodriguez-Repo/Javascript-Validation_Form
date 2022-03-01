const form = document.getElementById('form');
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById('pwdConfirm');

form.addEventListener('submit', ()=>{

   
    if(pwd.length < 8 || pwd.length > 15 ){

        alert('Password must be between 8 and 15 characters');
    }
    if(pwd.value !== pwdConfirm.value){

        alert('Password entries must match');
    }
    


    

})