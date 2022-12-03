

const loadCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await response.json();
    // console.log(data)

    loadNewsDetails(data.data.news_category);
    displayCategory(data.data.news_category);
    loadDetails(data.data.news_category)

}
const displayCategory = categories => {
    const menu = document.getElementById('show-category');

    for (const category of categories) {
        // console.log(category)

        const li = document.createElement('li');
        li.classList.add("nav-item");
        li.innerHTML = `
        <a class="nav-link" onclick="loadNewsDetails('${category.category_id}')" href="#">${category.category_name}</a>
        
        `;
        menu.appendChild(li);

    }
    toggleLoader(true)
}



const loadNewsDetails = async (category_id) => {

    // console.log('button clicked', category_id)


    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    displayNewsDetails(data.data);


}



const displayNewsDetails = (allNews) => {
    // console.log(allNews);
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = '';

    const showAll = document.getElementById('count-news');
    // console.log(showAll)
    if (allNews.length === 0) {

        showAll.innerText = 0;
    }
    else {
        showAll.innerText = allNews.length;
    }

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
             <p class="card-text"><i class="fa-regular fa-eye"></i>  ${news.total_view}K</p>
             <div class="ms-5">
             <p class="card-text"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></p>
             </div>
             <button type="button" class="btn btn-primary ms-5" onclick="loadDetails('${news.news_id}' )">More Details</button>
           </div>
          </div>
         </div>
        </div>
     </div>
   </div> 

        `;
        newsDetails.appendChild(div);
    }
    toggleLoader(false);
}


const toggleLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}


const loadDetails = async (news_id) => {
    // console.log(news_id)
    const response = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await response.json();
    // console.log(data)

    displayDetails(data.data);

}

const displayDetails = async (news) => {
    const newsDetails = document.getElementById('news-details');
    for (const n of news) {
        newsDetails.innerHTML = `
       
       `;
    }


    const modalTitle = document.getElementById('newsDetailsModaLabel');




}

loadDetails();
loadCategory();


