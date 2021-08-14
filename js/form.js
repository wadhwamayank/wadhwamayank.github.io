function submitForm(){
    $.ajax({
        url: "https://api.apispreadsheets.com/data/16890/",
        type:"post",
        data:$("#contactForm").serializeArray(),
        success: function(){
            alert("Data Submitted!")
        },
        error: function(){
            alert("Error")
        }
    });
}