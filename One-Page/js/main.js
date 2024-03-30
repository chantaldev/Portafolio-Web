//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const botonLlamar = document.querySelector("#llamarBoton");


function validation_alert() {
  Swal.fire({
      title: "Un momento por favor",
      confirmButtonText: "Intentar de nuevo",
      confirmButtonColor: "#008383",
      html: '<iframe src="https://lottie.host/?file=aac52986-152d-4ad1-904b-6a883c709f37/IzN8OnOkdF.json"></iframe>',
  });
}

function validation_alert2() {
  Swal.fire({
      title: "Un momento por favor",
      showConfirmButton: false,
      confirmButtonColor: "#008383",
      timer: 5000,
      html: '<iframe src="https://lottie.host/?file=97b62f38-d5b5-4f08-8925-26a2cf541930/M4U9yIJiQA.json"></iframe>',
  
    }).then(() => {
      window.location.href = "./pdf/diwe.pdf"; 
  });


}



