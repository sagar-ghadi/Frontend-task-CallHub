
$('#signin_Form').submit(function(e) {
    e.preventDefault();
    var email = $('#exampleInputEmail1').val();
    var password = $('#exampleInputPassword1').val();
 
    if (email.length < 1) {
        $('#exampleInputEmail1').css('border-color', 'red');
        $('#exampleInputEmail1').tooltip({
            position: {my: "left top", at: "right top"},
            items: "input",
                content: function() { return $(this).attr( "title" ); }
        });
        $('#exampleInputEmail1').keypress(
            function(){
                $(this).css('border-color', '');  
        });
    }   
    else {
        $('#exampleInputEmail1').css('border-color', '');
    }

    if (password.length < 8) {
        $('#exampleInputPassword1').css('border-color', 'red');
        $('#exampleInputPassword1').tooltip({
            position: {my: "left top", at: "right top"},
            items: "input",
                content: function() { return $(this).attr( "title" ); }
        });
        $('#exampleInputPassword1').keypress(
            function(){
                $(this).css('border-color', '');  
        });
    }
    else {
        $('#exampleInputPassword1').css('border-color', '');
    }
});


 
$('#signup_Form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#exampleInputName1').val();
    var email = $('#exampleInputEmail2').val();
    var password = $('#exampleInputPassword2').val();
 
    if (first_name.length < 1) {
        $('#exampleInputName1').css('border-color', 'red');
        $('#exampleInputName1').tooltip({
            position: {my: "left top", at: "right top"},
            items: "input",
                content: function() { return $(this).attr( "title" ); }
        });
        $('#exampleInputName1').keypress(
            function(){
                $(this).css('border-color', '');  
        });

    }else {
            $('#exampleInputName1').css('border-color', '');
        }

    if (email.length < 1) {
        $('#exampleInputEmail2').css('border-color', 'red');
        $('#exampleInputEmail2').tooltip({
            position: {my: "left top", at: "right top"},
            items: "input",
                content: function() { return $(this).attr( "title" ); }
        });
        $('#exampleInputEmail2').keypress(
            function(){
                $(this).css('border-color', '');  
        });
         }else {
        $('#exampleInputEmail2').css('border-color', '');
    }

    if (password.length < 8) {
        $('#exampleInputPassword2').css('border-color', 'red');
        $('#exampleInputPassword2').tooltip({
            position: {my: "left top", at: "right top"},
            items: "input",
                content: function() { return $(this).attr( "title" ); }
        });
        $('#exampleInputPassword2').keypress(
            function(){
                $(this).css('border-color', '');  
        });
    } else{
            $('#exampleInputPassword2').css('border-color', '');
        }
});






