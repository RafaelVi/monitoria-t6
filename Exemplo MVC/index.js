var catController = new CatController();

window.onload = catController.fazMagia();

let button = document.getElementById('btnCat');

button.addEventListener('click',catController.fazMagia);



