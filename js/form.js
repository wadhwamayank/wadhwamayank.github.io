function submitContactForm(){
    $.ajax({
        url: "https://api.apispreadsheets.com/data/16899/",
        type:"post",
        data:$("#contactForm").serializeArray(),
        success: function(){
            window.location.replace("redirect.html");
        },
        error: function(){
            alert("Error")
        }
    });
}