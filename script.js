window.onload = () => {
  
  const tableRow = document.querySelectorAll('.table-row');
  tableRow.forEach(row => {
    const name = row.querySelector('.name');
    const email = row.querySelector('.email');
    const phone = row.querySelector('.phone');
    filterTable(row, name, email, phone);
  });
  
  function filterTable(row, ...parameters) {
    let string = '';
    parameters.forEach(param => string += param.textContent);
    const input = document.querySelector('.input');
    input.addEventListener('keyup', function() {
      const value = this.value.toLowerCase();
      row.style.display = (string.toLowerCase().indexOf(value) != -1) ? '' : 'none';
    });
  }
  
}