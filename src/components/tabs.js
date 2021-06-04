import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // creating the elements
  const topicsElement = document.createElement('div');
  const tabElement = document.createElement('div');
  const tabElement2 = document.createElement('div');
  const tabElement3 = document.createElement('div');
  const tabElement4 = document.createElement('div');
  const tabElement5 = document.createElement('div');
  
  // setting the class names
  topicsElement.classList.add("topics");
  tabElement.classList.add("tab");
  tabElement2.classList.add("tab");
  tabElement3.classList.add("tab");
  tabElement4.classList.add("tab");
  tabElement5.classList.add("tab");
  
  // setting the text content
  tabElement.textContent = `${topics}`
  tabElement2.textContent = `${topics}`
  tabElement3.textContent = `${topics}`
  tabElement4.textContent = `${topics}`
  tabElement5.textContent = `${topics}`
  

  //setting the structure
  topicsElement.appendChild(tabElement);
  topicsElement.appendChild(tabElement2);
  topicsElement.appendChild(tabElement3);
  topicsElement.appendChild(tabElement4);
  topicsElement.appendChild(tabElement5);
  
  return topicsElement
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsContainer = document.querySelector(selector);

  axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then((res => {
    const results = res.data;
    console.log(res.data);
    tabsContainer.appendChild(Tabs(`${results.topics[0]}, ${results.topics[1]}`))
  }))
  .catch((error => {
    console.log('Houston we have a problem', error);
  }))
}

export { Tabs, tabsAppender }
