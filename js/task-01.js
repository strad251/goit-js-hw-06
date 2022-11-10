const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories:  ${totalCategories.length}`);

totalCategories.forEach(category => {
console.log(
  `Category: ${category.firstElementChild.textContent} 
  
Elements: ${category.lastElementChild.children.length}`)});
  
