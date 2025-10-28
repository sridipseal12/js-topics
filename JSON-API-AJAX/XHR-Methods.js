const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {
  if (xhr.status === 201) {
    console.log("Created:", JSON.parse(xhr.responseText));
  }
};

const data = JSON.stringify({ title: "Hello", body: "AJAX Test" });
xhr.send(data);
