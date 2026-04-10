'use strict';

const listCategoies = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${listCategoies.length}`);

listCategoies.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    const lengthCategory = item.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${lengthCategory}`);
});
