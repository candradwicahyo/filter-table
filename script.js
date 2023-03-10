window.onload = () => {
  
  const rows = document.querySelectorAll('.rows');
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('keyup', function() {
    // value input
    const value = this.value.trim();
    // looping element rows
    rows.forEach(row => {
      // ambil value
      const name = row.querySelector('.td-name');
      const number = row.querySelector('.td-number');
      const email = row.querySelector('.td-email');
      // jalankan fungsi search()
      search(row, value, name, number, email);
    });
  });
  
  function search(row, value, ...params) {
    // string kosong
    let str = '';
    // looping dan masukkan hasilnya kedalam variabel str
    params.forEach(param => str += param.textContent);
    /*
      jika didalam variabel str terdapat kata yang sama dengan
      inputan pengguna, maka tampilkan data tersebut.
    */
    row.style.display = (str.indexOf(value) != -1) ? '' : 'none';
  }
  
}