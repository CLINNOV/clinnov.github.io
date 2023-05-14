const button = document.getElementById("btn-contact");

button.addEventListener("click", async() => {
  const firstName = document.getElementById("inputFirstName").value;
  const lastName = document.getElementById("inputLastName").value;
  const email = document.getElementById("inputEmail").value;
  const message = document.getElementById("message").value;


  if (firstName.length > 0 || lastName.length > 0 || email.length > 0 || message.length > 0) {
    try {
      const response = await fetch(
        `https://www.grupverse.com/companywebsitemsg?name=${firstName} ${lastName}&email=email&msg=message&completed=false`, {
          method: "POST"
        }
      );

      if (!fetchResponse.ok) {
        throw new Error('Error sending message');
      }

      Swal.fire(
        'Successful!',
        'Your email has been received.',
        'success'
      )
    } catch (err) {
      console.log(err);
      Swal.fire(
        'Error',
        'Something Went Wrong, Please try again later',
        'error'
      )
    }
  }
});
