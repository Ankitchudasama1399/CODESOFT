function logIn() {

    let email = document.getElementById("mail_box").value
    let password = document.getElementById("password_box").value
    
localStorage.setItem("email", email);
}