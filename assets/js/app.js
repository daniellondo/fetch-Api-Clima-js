const query = fetch('http://jsonplaceholder.typicode.com/users')
                .then(response=>response.json())
                .then(data=>mostrarDOM(data));

function mostrarDOM(data) {
    console.log(data);
    data.forEach(element => {
        console.log(element.name);
    });
}

console.log(query)