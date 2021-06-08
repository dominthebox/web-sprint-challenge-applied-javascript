import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  // setting the elements 
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorN = document.createElement('span');

  // setting the class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  
  // setting text content
  headline.textContent = article.headline;
  image.setAttribute('src', article.authorPhoto);
  authorN.textContent = `By ${article.authorName}`;

  //setting the structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  imgContainer.appendChild(authorN);

  card.addEventListener('click', () => {
    console.log(article[0].headline)
  })

  return card
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  // const cards = document.querySelector('div.cards-container');
  const cards = document.querySelector(selector);

  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res => {
    const articlesArray = res.data.articles
    console.log(articlesArray);
    // articlesArray.map(articleTopic => {    // I tried using map here to go through the array but I don't understand how to select all  the    article topics within the 'articles' array
    //     return Card(articlesArray)
    // })
    cards.appendChild(Card(articlesArray))  // with this line I can at least see that the card is rendering to the page and I can see that my event listener is working when I click on the card but it won't show the headline of 'undefined'
  }))
  .catch((error => {
    console.log('Houston we have a problem', error);
  }))
}

export { Card, cardAppender }
