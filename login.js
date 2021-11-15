const ps=document.getElementById("password1");
const em=document.getElementById("email");
var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
var psd=/^([A-Z]+)([a-z]+)([0-9]+)$/;
var a,b,c,d,f;
function checkInputs(){
    const emvalue=email.value.trim();
    const psvalue=password1.value.trim();
    if (emvalue==''){
        setErrorFor(email, 'Email cannot be blank');                                                                                                                                
       }
       else if(regexp.test(emvalue)){
        setSuccessFor(email); 
        a=true 
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
        b=true
       }
       else{
        setErrorFor(password1, 'Password needs uppercase lowercase and number');  
       }
       if(a==b){
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
 