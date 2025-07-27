function slugify(title) {
  return title
    .toLowerCase() // Перетворюємо всі символи у нижній регістр
    .split(' ') // Розбиваємо рядок на масив слів за пробілом
    .join('-'); // Об’єднуємо слова через тире
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
