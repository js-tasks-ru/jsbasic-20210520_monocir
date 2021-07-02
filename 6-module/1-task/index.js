export default class UserTable {

  constructor(items) {
    this.rows = items;
	this.render();
	this.createRows();
	this.onClickItem();
  }

	render() {
		// this.personsTable = document.querySelector('#table');
		this.elem = document.createElement('table');
		this.tableThead = document.createElement('thead');
		this.headerRow = document.createElement('tr');
		this.headers = ['Имя', 'Возраст', 'Зарплата', 'Город', ]

		this.headers.forEach(headerText => {
			let header = document.createElement('th');
			let textNode = document.createTextNode(headerText);
			header.appendChild(textNode);
			this.headerRow.appendChild(header);
		});

		this.tableThead.appendChild(this.headerRow);
		this.elem.appendChild(this.tableThead);
		return this.elem;
	};


  	createRows() {
	this.tableBody = document.createElement('tbody');
	this.rows.forEach(pers => {
		let row = document.createElement('tr');
		Object.values(pers).forEach(text => {
		  let cell = document.createElement('td');
		  let textNode = document.createTextNode(text);
		  cell.appendChild(textNode);
		  row.appendChild(cell);
		});
		let td5 = document.createElement('td');
		td5.innerHTML = '<button>X</button>';
		row.appendChild(td5);
		this.tableBody.appendChild(row);
		this.elem.appendChild(this.tableBody);
	  	});
  	};
	
  	onClickItem() {
		this.elem.addEventListener("click", function (e) {
			if (e.target.nodeName == "BUTTON") {
				e.target.closest('tr').remove();
			};
		  });
	  };


};
