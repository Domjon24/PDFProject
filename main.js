const input = document.querySelector("input");
const preview = document.querySelector(".preview");

let imagePreview = document.getElementById('preview');
let inputFile = document.getElementById('userFileUpload');

inputFile.onchange = function() {
    imagePreview.src = URL.createObjectURL(imagePreview.files[0]);
}