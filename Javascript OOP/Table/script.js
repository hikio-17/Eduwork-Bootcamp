class Table {
   constructor(init) {
      this.init = init;
   }

   createHeader(data) {
      let open = `
         <thead>
            <tr>
      `
      let close = `
            </tr>
         </thead>
      `
      let header = '';

      data.map((item) => header += `<th>${item}</th>`);

      return open + header + close;
   }

   createBody(data) {
      let open = `
         <tbody>
      `
      let close = `
         </tbody>
      `

      let body = ''

      data.map((item) => body += `
         <tr>
            <td>${item.name}</td>
            <td>${item.address}</td>
         </tr>
      `);

      return open + body + close;
   }

   render(element) {
      const table = document.createElement('table');
      table.classList = 'table'
      const tableHeader = this.createHeader(this.init.column);
      const tableBody = this.createBody(this.init.body);
      table.innerHTML = tableHeader + tableBody;
      element.appendChild(table);
   }
}

const table = new Table({
   column: ['Name', 'Address'], 
   body: [
      { name: 'Fajri', address: 'Jambi'}, 
      { name: 'Hikma', address: 'Kerinci' }
]});

const app = document.getElementById('app');
table.render(app);
