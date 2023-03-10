// Mailjs


function sendMail(){

    var params = {
        
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email-id").value,
        reason : document.getElementById("reason").value,
        message : document.getElementById("contactMessage").value

    }

    emailjs.send("service_6owa5ak", "template_a0nrjsa", params).then(function (res){
        console.log("Success! " + res.status);
        alert("Submitted");
        createConfirmationText()
    })
}




