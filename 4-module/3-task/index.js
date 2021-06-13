function highlight(table) {
   // const tableTd = document.getElementsByTagName('table');

   for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let age = (Number(row.cells[1].innerHTML));
    if (age <= 18) {
      row.style.textDecoration = 'line-through';
    };
  };

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let gender = row.cells[2].innerHTML;
    if (gender === 'm') {
      row.classList.add( 'male' );
    } else if (gender === 'f') {
      row.classList.add( 'female' );
    };
  };

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    let status = row.cells[3].dataset.available;
    if (status == 'true') {
      row.classList.add( 'available' );
    } else if (status == 'false') {
      row.classList.add( 'unavailable' );
    console.log(status);
    } else if (status == undefined) {
      row.setAttribute('hidden', 'hidden');
    };
  };

}
