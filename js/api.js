function loadUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(users) {
    const ul = document.getElementById("users")
    for (const user of users) {
        const li = document.createElement("li");
        li.style.backgroundColor = "red";
        li.style.margin = "10px";
        li.style.listStyle = "none"
        li.innerText = `Name: ${user.name}`;
        ul.appendChild(li);
    }
}