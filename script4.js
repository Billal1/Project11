
function goToMainPage() {
    
  window.location.href = 'index.html';
}

    function submitForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
     
      alert('Thank you, ' + name + '. Your message has been sent!');
    }
 
   