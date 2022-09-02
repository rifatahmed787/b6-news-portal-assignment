// const loadNews = async () => {
//     const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
//     const data = await response.json();
//     // return (data.data.news_category);
//     console.log(data.data.news_category)
// }

// const displayCategory = async () => {
//     const data = await loadNews();
//     const menu = document.getElementById('show-category');
//     for (const category of data) {
//         console.log(category)
//     }
// }
// displayCategory();

// loadNews();





const loadNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();

    displayCategory(data.data.news_category)
}
const displayCategory = categories => {
    const menu = document.getElementById('show-category');

    for (const category of categories) {
        const li = document.createElement('li');
        li.classList.add("nav-item");
        li.innerHTML = `
        <a class="nav-link" href="#">${category.category_name}</a>
        
        `;
        menu.appendChild(li);
    }
}

loadNews();