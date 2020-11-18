<script>
  /* document.querySelector(".form").addEventListener("submit", handleSubmit); */

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   let myForm = document.getElementById("ajax-contact");
  //   let formData = new FormData(myForm);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formData).toString()
  //   })
  //     .then(() => console.log("Form successfully submitted"))
  //     .catch(error => alert(error));
  // };
</script>

<style>
  .contact-form {
    margin: 0 auto;
    width: 100%;
  }
  .contact-form .form {
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    margin: 0 auto 6rem auto;
  }
  .contact-form .form input[type="email"],
  .contact-form .form input[type="text"],
  .contact-form .form textarea {
    border: solid 0.1rem whitesmoke;
    border-radius: 0;
    padding: 1rem 0.7rem;
    margin-bottom: 1.5rem;
    outline: none;
    background-color: transparent;
  }
  .contact-form .form input[type="email"]::placeholder,
  .contact-form .form input[type="text"]::placeholder,
  .contact-form .form textarea::placeholder {
    color: whitesmoke;
  }
  .contact-form .form input[type="email"]:focus::placeholder,
  .contact-form .form input[type="text"]:focus::placeholder,
  .contact-form .form textarea:focus::placeholder {
    color: coral;
  }
  .contact-form .form input[type="email"] textarea,
  .contact-form .form input[type="text"] textarea,
  .contact-form .form textarea textarea {
    resize: none;
  }
  .contact-form .form input[type="email"]:focus,
  .contact-form .form input[type="text"]:focus,
  .contact-form .form textarea:focus {
    background: lightgreen;
    color: coral;
    border: none;
  }
  .contact-form .form .button {
    background: transparent;
    border: solid 0.1rem whitesmoke;
    border-radius: 0;
    color: whitesmoke;
    cursor: pointer;
    padding: 1rem;
    text-align: center;
    width: 20rem;
    margin: 2rem auto;
    line-height: 1.4rem;
    text-transform: none;
    transition: all 0.2s ease-in-out;
  }
  .contact-form .form .button:hover,
  .contact-form .form .button:focus {
    background: lightgreen;
    color: coral;
    border: none;
    box-shadow: 0.1rem 0.3rem 0.7rem 0.1rem rgba(30, 30, 30, 0.1);
  }
</style>

<section class="contact-form" id="contact">
  <h2 class="fade-ins">contact me</h2>
  <div id="form-messages" class="messages" />
  <form class="form fade-ins" name="contact" method="POST" netlify>
    <input required type="text" id="name" name="name" placeholder="name" />
    <input required type="email" id="email" name="email" placeholder="email" />
    <textarea
      name="message"
      type="text"
      id="message"
      rows="6"
      placeholder="message" />
    <button class="button" type="submit" value="submit">send</button>
  </form>
</section>
