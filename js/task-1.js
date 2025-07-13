const refs = {
    categories: document.querySelectorAll('#categories .item'),
    ulLi: document.querySelectorAll('.item')
};

console.log(`Number of categories: ${refs.categories.length}`);

refs.categories.forEach(categori => {
    const title = categori.querySelector('h2').textContent;
    const elements = categori.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Element: ${elements}`);
})
