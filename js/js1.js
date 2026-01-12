      
$(document).ready(function() {

  $('.counter').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 4000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

}); 

/* gfk */

function validateform(){  
  var name=document.form1.fname.value;  
  var x=document.form1.email.value;  
     
    
  if (name==""){  
    alert("Name can't be blank");  
    document.form1.fname.focus() ;
    return false;  
  }
  if (x==""){   
    alert("Please enter a valid e-mail address"); 
    document.form1.x.focus() ; 
    return false;   
    }  
  }  
