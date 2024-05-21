const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Caregory: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
} );