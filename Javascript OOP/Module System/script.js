import { createHeader, createBody } from './function.js';

class Table {
  constructor (init) {
    this.init = init
  }

  render (element) {
    const table = document.createElement('table')
    table.classList = 'table'
    const tableHeader = createHeader(this.init.column)
    const tableBody = createBody(this.init.body)
    table.innerHTML = tableHeader + tableBody
    element.appendChild(table)
  }
}

const table = new Table({
  column: ['Name', 'Address'],
  body: [
    { name: 'Fajri', address: 'Jambi' },
    { name: 'Hikma', address: 'Kerinci' }
  ]
})

const app = document.getElementById('app')
table.render(app)
