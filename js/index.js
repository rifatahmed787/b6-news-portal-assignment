

const loadNews = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    loadNewsDetails(data.data.news_category);
    displayCategory(data.data.news_category);

}
const displayCategory = categories => {
    const menu = document.getElementById('show-category');

    for (const category of categories) {

        const li = document.createElement('li');
        li.classList.add("nav-item");
        li.innerHTML = `
        <a class="nav-link" onclick="loadNewsDetails('${category.category_id}')" href="#">${category.category_name}</a>
        
        `;
        menu.appendChild(li);
    }
}



const loadNewsDetails = async (newsId) => {

    // console.log('button clicked', newsId)
    // console.log(category_id)

    const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayNewsDetails(data.data);
}



const displayNewsDetails = (allNews) => {
    console.log(allNews);
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = '';
    for (const news of allNews) {
        // console.log(news)
        const div = document.createElement('div');
        div.classList.add('shadow-lg', 'my-3');


        div.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
           <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
        </div>
         <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
         <p class="card-text">${news.details.length > 400 ? news.details.slice(0, 400) + '...' : news.details}</p>
          <div class="d-flex">
           <img src="${news.author.img}" class=" rounded-circle" style=" width: 5%;" alt="...">
           <div class="ms-3 ">
             <p class="card-text mb-0"><small class="text-muted">${news.author.name}</small></p>
             <p class="card-text mt-0"><small class="text-muted">${news.author.published_date}</small></p>
           </div>
           <div class="mx-auto d-flex">
             <p class="card-text"><i class="fa-regular fa-eye"></i>  ${news.rating.number}M</p>
             <div class="ms-5">
             <p class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></p>
             </div>
             <button type="button" class="btn btn-primary ms-5">More Details</button>
           </div>
          </div>
         </div>
        </div>
     </div>
   </div> 

        `;
        newsDetails.appendChild(div);
    }
}

const loadDetails = async (news_id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/news/0${news_id}`);
    const data = await response.json();
    console.log(data);
}
loadDetails();




loadNews();