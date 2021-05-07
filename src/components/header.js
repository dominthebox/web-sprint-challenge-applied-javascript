
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // const headerContainer = document.querySelector('div.header-container');
  const Header = (title, date, temp) => {
  const headerElement = document.createElement('div');
  const dateElement = document.createElement('span');
  const titleElement = document.createElement('h1');
  const tempElement = document.createElement('span');

  // setting the class names
  headerElement.classList.add("header");
  dateElement.classList.add("date");
  tempElement.classList.add("temp");

  // setting text content
  dateElement.textContent = date;
  titleElement.textContent = title;
  tempElement.textContent = temp;

  // setting the structure 
  headerElement.appendChild(dateElement);
  headerElement.appendChild(titleElement);
  headerElement.appendChild(tempElement);

  return headerElement

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector('div.header-container');

  Header('Lambda Times', 'May 7th', '63');

}

export { Header, headerAppender }
