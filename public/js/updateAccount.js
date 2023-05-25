$('#change').submit(function(e){
   
    var formData = $('#change').serialize();
    e.preventDefault();
     $.ajax({
         url: "/users/change",
         type: 'post',
         data : formData,
         success: function(respond){
             alert(respond.text);
             console.log("hi")
         }
     });
     return false;
 }); 