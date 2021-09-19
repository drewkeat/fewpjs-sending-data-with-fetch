function submitData(name, email) {
  // Why is the 'return' command necessary for the catch method?
    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((resp) => resp.json())
    .then((object) => (document.body.innerHTML = object.id))
    .catch((error) => (document.body.innerHTML = error.message));
}
