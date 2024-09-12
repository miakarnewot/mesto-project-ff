// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCards(item, removeCard) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = card.querySelector('.card__delete-button');
  
    const cardImage = card.querySelector('.card__image');
    const cardTitle = card.querySelector('.card__title');
  
    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardTitle.textContent = item.name;
    
    deleteButton.addEventListener('click', () => removeCard(card));
  
    return card;
  };
// @todo: Функция удаления карточки
function removeCard(evt) {  
    evt.remove();
  }; 
// @todo: Вывести карточки на страницу
initialCards.forEach(function(item) {
    const newCard = createCards(item, removeCard);
    placesList.append(newCard);
  });




