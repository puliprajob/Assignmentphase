const form=document.getElementById('form');
const us=document.getElementById("username1");
const ps=document.getElementById("password1");
const pss=document.getElementById("password2");
const ph=document.getElementById("phone");
const em=document.getElementById("email");
const er=document.getElementById("error");
var num=/^([0-9]{10})$/;
var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var psd=/^([A-Z]+)([a-z]+)([0-9]+)$/;
var a,b,c,d,f;


function checkInputs(){
    const usvalue=username1.value.trim();
    const emvalue=email.value.trim();
    const psvalue=password1.value.trim();
    const pssvalue=password2.value.trim();
    const phvalue=phone.value.trim();


    if(usvalue==''){
    setErrorFor(username1, 'Username cannot be blank');
    }
   else{
       setSuccessFor(username1);
       a=true
   }
   if (emvalue==''){
    setErrorFor(email, 'Email cannot be blank');                                                                                                                                
   }
   else if(regexp.test(emvalue)){
    setSuccessFor(email); 
    b=true 
   }
   else{
    setErrorFor(email, 'Invalid Email');
   }
   if(psvalue==''){
    setErrorFor(password1, 'Password cannot be blank'); 
   }
   else if(psvalue.length<8){
    setweakfor(password1, 'Password must have 8 character'); 
   }
   else if(psd.test(psvalue)){
    setSuccessFor(password1);
    c=true
   }
   else{
    setErrorFor(password1, 'Password needs uppercase lowercase and number');  
   }
   if(pssvalue==''){
    setErrorFor(password2, 'Password cannot be blank'); 
   }
   else if(psvalue==pssvalue){
    setSuccessFor(password2);
    d=true
   }
   else{
    setErrorFor(password2, 'Password not matching')  
   }
   if(phvalue==''){
    setErrorFor(phone, 'phone number cannot be blank');
   }
   else if(num.test(phvalue)){
    setSuccessFor(phone); 
    f=true
   }
   else{
    setErrorFor(phone, 'phone number must have 10 digits');  
   }
if(a==b==c==d==f){
    return true
}
else{
    return false
}

}



function setErrorFor(input, message){
   const formcont = input.parentElement;
    const small= formcont.querySelector('small');
    small.innerText=message;
    formcont.className='formcontrol error'
}
function setweakfor(input,message) {
    const formcont = input.parentElement;
    const small= formcont.querySelector('small');
    small.innerText=message;
    formcont.className='formcontrol weak' 
    
}
function setSuccessFor(input){
    const formcont=input.parentElement;
    formcont.className='formcontrol success'
}
