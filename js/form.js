function submitForm(){
    $.ajax({
        url: "https://api.apispreadsheets.com/data/16897/",
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