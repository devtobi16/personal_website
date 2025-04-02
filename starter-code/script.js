const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("active");
};
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let form = this;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert("Error sending message. Please try again.");
        }
      })
      .catch((error) => {
        alert("Something went wrong. Please check your internet connection.");
      });
  });
