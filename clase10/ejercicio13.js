const rows = document.querySelectorAll('tr.row');


rows.forEach(row => {
  row.addEventListener('click', () => {
    rows.forEach(row => {
      row.classList.remove('selected');
    });
    row.classList.add('selected');
  })
});
