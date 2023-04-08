function showdown() {
    $(".skill-frontitem").toggleClass("active");
}


function backshow() {
    $(".skill-frontitem2").toggleClass("active");
}

function appshow() {
    $(".skill-frontitem3").toggleClass("active");
}

function designshow() {
    $(".skill-frontitem4").toggleClass("active");
}

function showmenu(){
    $(".navlist").toggleClass("active");
    $("#menu-icon").css('display', 'none');
}

function hidemenu(){
    $(".navlist").removeClass("active");
    $("#menu-icon").css('display', 'block');
    
}



const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  const subject = `New message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone_No: ${number}%0D%0AMessage: ${message}`;

  const mailtoLink = `mailto:muhammedswafwanck@gmail.com?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

 
  
});

