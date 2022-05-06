// api url
// const api_url = "https://ai-brand-server.herokuapp.com";
const api_url = "https://ai-brand-server.herokuapp.com";

// Defining async function
async function getBlogs(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  showBlogs(data);
}

async function sendQuery(url) {
    // Storing response
    const response = await fetch(url);
  
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
      hideloader();
    }
    showBlogs(data);
  }

// Calling that async function
getBlogs(`${api_url}/blogs`);

// Function to hide the loader
function hideloader() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("blogs-container").style.display = "flex";
}
// Function to define innerHTML for HTML table
function showBlogs(data) {;
    let blogCards = document.getElementsByClassName("blog-card");
  // Loop to access all rows
  if(blogCards.length >= 6) {
      for (let i = 0; i < blogCards.length; i++) {
              blogCards[i].querySelector("img").src = data[i].banner;
              blogCards[i].querySelector("#blog-title").innerHTML = data[i].title;
              blogCards[i].querySelector("#blog-description").innerHTML = data[i].description;
        }
    }
}
