export const createHeader = (data) => {
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

export const createBody = (data) => {
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