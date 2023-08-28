const containerCard = document.getElementById('list-news')

fetch(
  'https://newsapi.org/v2/top-headlines?country=id&apiKey=edf9aa07b5b646b18e8a3f4cdf751987'
)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(item => {
      const card = document.createElement('div')
      card.classList = 'col-md-4 mb-3'
      card.innerHTML = `
         <div class="card h-100">
            <div class="card-body">
               <h6 class="card-title h-50">
                  ${item.title}
               </h6>
               <hr>
               <p class="card-text">
               ${item.author}  |  ${item.publishedAt.slice(0,10)} <br />
               <a href='${item.url}' class='card-link mb-2 badge text-bg-info'>more ..</a>
               </p>
            </div>
        </div>
         `
      containerCard.appendChild(card)
    })
  })
