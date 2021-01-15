let lensCatalogButton = document.getElementById('lenses-catalog-button'),
lensCatalogList = document.getElementById('lenses-catalog-list'),
solutionCatalogButton = document.getElementById('solution-catalog-button'),
solutionCatalogList = document.getElementById('solution-catalog-list'),
dropsCatalogButton = document.getElementById('drops-catalog-button'),
dropsCatalogList = document.getElementById('drops-catalog-list');

function toggleCatalog(button, list) {
  list.classList.toggle('catalog__list--opened');
  button.classList.toggle('show-more--opened');
  if (list.classList.contains('catalog__list--opened')) {
    button.innerText = 'Свернуть';
  } else {
    button.innerText = 'Показать еще';
  }
}

lensCatalogButton.addEventListener('click', function(){
  toggleCatalog(lensCatalogButton, lensCatalogList);
});

solutionCatalogButton.addEventListener('click', function(){
  toggleCatalog(solutionCatalogButton, solutionCatalogList);
});

dropsCatalogButton.addEventListener('click', function(){
  toggleCatalog(dropsCatalogButton, dropsCatalogList);
});
