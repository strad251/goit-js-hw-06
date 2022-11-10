

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

const foodIngredients = ingredients.map(ingredient => {
  let item = document.createElement('li');
  item.classList.add('item')
  item.innerHTML = ingredient;
  return item;
});

ulList.append(...foodIngredients);


