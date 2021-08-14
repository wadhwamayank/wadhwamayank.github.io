function submitJoinUsForm(){
    $.ajax({
        url: "https://api.apispreadsheets.com/data/16893/",
        type:"post",
        data:$("#joinUsForm").serializeArray(),
        success: function(){
            window.location.replace("redirect.html");
        },
        error: function(){
            alert("Error")
        }
    });
}