const nama = document.getElementById("namalengkap");
const paket = document.getElementById("paketsekali");
const alamat = document.getElementById("surel");
const telp = document.getElementById("nomor");
const kirim = document.getElementById("tanggal");
const registrasi = document.getElementById("submitbutton");

registrasi.addEventListener("click", function(event) {
    event.preventDefault()
    const namaValue = nama.value
    const paketValue = paket.value
    const alamatValue = alamat.value
    const telpValue = telp.value
    const kirimValue = kirim.value
    nameValidation (namaValue, paketValue, alamatValue, telpValue, kirimValue)
})

function nameValidation(namal, pakets, alamatsurel, notelp, kirimtgl) {
    if (namal, pakets, alamatsurel, notelp, kirimtgl == "") {
        alert("Isi Dulu Dong")
    } else { 
        alert("Cakepp")
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}