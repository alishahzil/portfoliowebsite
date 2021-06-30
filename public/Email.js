function sendmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    if (name == '' || email == '' || subject == '' || message == '') {
        alert('Please fill all the filed');
    } else {
        var re = /\S+@\S+\.\S+/;
        const val = re.test(email);
        if (val) {
            sendEmail(email, subject, message);
        } else {
            alert('Email address is not valid ');
        }
    }
}

function sendEmail(email, subject, message) {
    Email.send({
            Host: "smtp.gmail.com",
            Username: "blueflixpk@gmail.com",
            Password: "blueflix299792458",
            To: 'syedalishahzil99@gmail.com',
            From: 'blueflixpk@gmail.com',
            Subject: 'ali',
            Body: 'shahzil',
        })
        .then(function (message) {
            alert("mail sent successfully")
        });
}