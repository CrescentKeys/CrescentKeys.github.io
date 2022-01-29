function validateRecaptcha(event) {
    console.log(event); 
    event.preventDefault();
      var response = grecaptcha.getResponse();
      if (response.length === 0) {
          alert("Please make sure to fill in the Captcha!");
          return false;
      } else {
          alert("Great! Thank you for sending us a message, our team will look into it soon!");
          const form = document.getElementById('my-form');
          const data = new FormData(form);
    
          const action = event.target.action;
          fetch(action, {
          method: 'POST',
          body: data,
          }).then(result => {
              console.log('Redirection');
              window.location.href="index.html"
          })
    
        }
          
    }
           