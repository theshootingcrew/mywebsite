$(document).ready(function () {

  (function ($) {
      "use strict";


      jQuery.validator.addMethod('answercheck', function (value, element) {
          return this.optional(element) || /^\bcat\b$/.test(value)
      }, "type the correct answer -_-");

      // validate contactForm form
      $(function () {
          $('#contactForm').validate({
              rules: {
                  name: {
                      required: true,
                      minlength: 2
                  },
                  phone_number: {
                      required: true,
                      minlength: 10
                  },
                  email: {
                      required: true,
                      email: true
                  },
                  // message: {
                  //     required: true,
                  //     minlength: 20
                  // }
              },
              messages: {
                  name: {
                      required: "your name must consist of at least 2 characters",
                      minlength: "your name must consist of at least 2 characters"
                  },
                  phone_number: {
                      required: "your number must consist of at least 10 characters",
                      minlength: "your number must consist of at least 10 characters"
                  },
                  email: {
                      required: "that doesn't look like an email!"
                  },
                  // message: {
                  //     required: "um...yea, you have to write something to send this form.",
                  //     minlength: "thats all? really?"
                  // }
              },

              submitHandler: function (form) {
                  $.ajax({
                    url:"https://script.google.com/a/theshootingcrew.com/macros/s/AKfycbzmgub8JOkAU2EopUiQxNRakPufk7EY3cE3bpsF/exec",
                    data:$("#contactForm").serialize(),
                    method:"post",
                    success:function (response){
                        successfunction(response);
                        // alert("Form submitted successfully")
                        // window.location.reload()
                        //window.location.href="https://google.com"
                    },
                    error:function (err){
                        alert("Something Error")
        
                    }
                })
              }

          })
      })

  })(jQuery)
})

function successfunction(event){

  var form = document.getElementById('contactForm')
  // var formData = getFormData(form);
  // var data = formData.data;
  form.reset();
  var thankYouMessage = form.querySelector(".thankyou_message");
  if (thankYouMessage) {
      thankYouMessage.style.display = "block";
  }
  // alert('Hello')
  // event.preventDefault();
}
