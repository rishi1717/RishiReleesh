uname = document.getElementById('name');
email = document.getElementById('email');
message = document.getElementById('message');

function validate() {

    document.getElementById('nameError').innerText="";
    document.getElementById('emailError').innerText="";
    document.getElementById('messageError').innerText="";
      
    if( uname.value == "" || uname.value.length < 3 || uname.value == (/^\S*$/)) {
        if(uname.value == ""){
            document.getElementById('nameError').innerText="Provide valid name"; 
        }
        else if(uname.value.length < 3){            
            document.getElementById('nameError').innerText="atleast 3 character required";     
        }
        else{
            document.getElementById('nameError').innerText="not valid"; 
        }

        uname.focus();
         return false;
    }

    if( email.value == "" ) {
        document.getElementById('emailError').innerText="Provide valid Email";
        email.focus() ;
        return false;
    }
        
    if( message.value == "" ) {
        document.getElementById('messageError').innerText="Message is required";
        message.focus();
        return false;
    }
    return( true );
 }