const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About me",
    background: "#00aa00",
    width: "80%",
    height: "80%",
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777777");
    }
  });
});

contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "About me",
    background: "#00aa00",
    width: "80%",
    height: "80%",
    top: 15,
    right: 15,
    bottom: 15,
    left: 15,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777777");
    }
  });
});
