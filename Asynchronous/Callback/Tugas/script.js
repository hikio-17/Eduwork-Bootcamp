const table = document.getElementById('data');

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((result) => {
    table.innerHTML = render(result);
  });

  function render(data) {
    let table = '';

    data.forEach((item) => {
      table += `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
          <td>
            ${item.address.street}
            ${item.address.suite}
            ${item.address.city}
          </td>
          <td>${item.company.name}</td>
        </tr>
      `
    })

    return table;
  }



