const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const elementRef = document.getElementById('ingredients');

const ingredientsRef = ingredients.map(el => {
  const list = document.createElement('li');
  list.append(el);
  return list;
});

elementRef.append(...ingredientsRef);
console.log(elementRef);



// =========================================================================
// const elementRef = document.getElementById("ingredients");
// console.log(elementRef)

// const ingredientsRef = ingredients.forEach(el => {
//     const list = document.createElement('li');
//     list.textContent = el;
//     elementRef.appendChild(list)
// });

