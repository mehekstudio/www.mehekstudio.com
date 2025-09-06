$(document).ready(function(){
 $('.req').hide();    
 
 $('.agreement').click(function(){
  let action = site_url+"/enquiry-submit.php";     
  $(this).closest("form").attr("action",action);   
  $(".button").attr("disabled",false);     
 });
 
 $("form[name='contact-enq']").validate({
    // Specify validation rules
    rules: {
      vb_name: { required: true },
      vb_email:{ required:true, email:true },
      vb_phone: { required: true, digits:true},      
      vb_message:{ required:true }
    },
    
    // Specify validation error messages
    messages: {
      vb_name: { required: "Please provide name" },
      vb_email:{ email: "Please enter a valid email address" },
      vb_phone: { required: "Please provide mobile no",
               digits: "Mobile no must be numeric"},
      vb_message:{ required: "Please provide message detail" }
    },
   
    submitHandler: function(form) {
      form.submit();
    }
  });
  
 $("form[name='popup-enq']").validate({
    // Specify validation rules
    rules: {
      vb_name: { required: true },
      vb_email:{ required:true, email:true },
      vb_phone: { required: true, digits:true},      
      vb_message:{ required:true }
    },
    
    // Specify validation error messages
    messages: {
      vb_name: { required: "Please provide name" },
      vb_email:{ email: "Please enter a valid email address" },
      vb_phone: { required: "Please provide mobile no",
               digits: "Mobile no must be numeric"},
      vb_message:{ required: "Please provide message detail" }
    },
   
    submitHandler: function(form) {
      form.submit();
    }
  }); 
  
});