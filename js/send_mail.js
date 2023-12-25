//UN: mohamedemam4078@gmail.com
//PW: BFF6F4AF3EDA2A56F125BCFE89EEF0701556

const fname = document.getElementsByName('Name')[0];
const email = document.getElementsByName('Email')[0];
const phone = document.getElementsByName('Phone')[0];
const package = document.getElementsByName('Package')[0];
const subject = document.getElementsByName('Subject')[0];
const message = document.getElementsByName('Message')[0];

// Add event listener on form container...
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Clicked");

  // write html for proper format to be sent in mail
  let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <b>Package: </b>${package.value}
    <br>
    <b>Subject: </b>${subject.value}
    <br>
    <b>Message: </b>${message.value}
    <br>
  `;

  // Email Code Here...
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mohamedemam4078@gmail.com",
    Password: "BFF6F4AF3EDA2A56F125BCFE89EEF0701556",
    To: 'mohamedemam4078@gmail.com',
    From: "mohamedemam4078@gmail.com",
    Subject: "New message from your portfolio from " + fname.value,
    Body: ebody
  }).then(
    message => alert(message)
  );
});