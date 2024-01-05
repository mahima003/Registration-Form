document.addEventListener('DOMContentLoaded', function () {
const form=document.getElementById('form');
const u=document.getElementById('fname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password1=document.getElementById('password1');

form.addEventListener('submit',e=>{
    e.preventDefault();
    validateInputs();
});
const setError=(element,message)=>{
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess=element=>{
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}
const isValidemail=email=>{
    const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const usernamevalue = u.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    const password1value = password1.value.trim();

    if(usernamevalue === '')
    {
        setError(u,'name is required');
      
    }
    else{
        setSuccess(u);
      
    }
    if(emailvalue === '')
    {
        setError(email,'email is required');

    }
    else if(!isValidemail(emailvalue))
    {
        setError(email,'provide a valid email address');
    }
    else 
    {
        setSuccess(email);
    }
    if(passwordvalue === '')
    {
        setError(password,'password is required');
    }
    else if(passwordvalue.length < 8)
    {
        setError(password,'password must be atleast 8 character long');
    }
    else 
    {
        setSuccess(password);
    }
    if(password1value === '')
    {
        setError(password1,'please confirm your password');
    }
    else if(password1value!=passwordvalue)
    {
        setError(password1,"passwords doesn't match");
    }
    else{
        setSuccess(password1);
    }
}
});