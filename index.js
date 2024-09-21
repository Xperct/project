// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_mhemq3p"; 
//   const templateID = "template_33egnso";

//     emailjs.send(serviceID, templateID, params)
//     .then(res=>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("Your message sent successfully!!")

//     })
//     .catch(err=>console.log(err));

// }




    // Initialize EmailJS
    (function(){
      emailjs.init("Qdgjgl-k1KIblCSns"); // Replace with your EmailJS user ID
  })();

  function sendMail(event) {
      event.preventDefault(); // Prevent default form submission

      var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
      };
      
      const serviceID = "service_mhemq3p";
      const templateID = "template_33egnso";

      emailjs.send(serviceID, templateID, params)
          .then(res => {
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
              console.log(res);
              alert("Your message sent successfully!!");
          })
          .catch(err => console.log(err));
  }


