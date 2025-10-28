// example of onreadystatechange 
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

xhr.onreadystatechange = function() {
  console.log("ReadyState:", xhr.readyState);
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  }
};

xhr.send();
