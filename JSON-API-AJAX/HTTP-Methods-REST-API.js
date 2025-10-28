// GET request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data));

// POST request
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'New User', age: 22 })
})
  .then(res => res.json())
  .then(data => console.log('Created:', data));
