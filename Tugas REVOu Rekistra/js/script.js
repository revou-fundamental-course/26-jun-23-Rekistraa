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