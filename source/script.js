function create() {

    var formdata = readformdata();
    insert(formdata);
    resetform();

}

var editicon = '<i onClick = "edit(this)" class = "fas fa-edit btnedit"></i>';
var deleteicon = '<i onClick = "deletee(this)" class = "fas fa-trash btndelete"></i>';
var readicon = '<i onClick = "read(this)"class="fab fa-readme btnread"></i>';

function readformdata() {
    var formdata = {};
    formdata["id"] = document.getElementById("id").value;
    formdata["pname"] = document.getElementById("pname").value;
    formdata["seller"] = document.getElementById("seller").value;
    formdata["price"] = document.getElementById("price").value;
    formdata["edit"] = editicon;
    formdata["delete"] = deleteicon;
    formdata["read"] = readicon;
    return formdata;
}

function insert(data) {

    var table = document.getElementById("ptable").getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    cell1.innerHTML = data.id;
    cell2.innerHTML = data.pname;
    cell3.innerHTML = data.seller;
    cell4.innerHTML = data.price;
    cell5.innerHTML = data.edit;
    cell6.innerHTML = data.delete;
    cell7.innerHTML = data.read;
}

function resetform() {
    document.getElementById("id").value = "";
    document.getElementById("pname").value = "";
    document.getElementById("seller").value = "";
    document.getElementById("price").value = "";
}

var selectedRow = null;
var i;

function edit(td) {

    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("pname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("seller").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;

}


function deletee(td) {
    if (confirm('Are you Sure ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("ptable").deleteRow(row.rowIndex);
        resetform();

    }
}

function deleteall() {
    for (var i = document.getElementById("ptable").rows.length; i > 1; i--) {
        document.getElementById("ptable").deleteRow(i - 1);
    }
}

function updateform() {
    selectedRow.cells[0].innerHTML = document.getElementById("id").value;
    selectedRow.cells[1].innerHTML = document.getElementById("pname").value;
    selectedRow.cells[2].innerHTML = document.getElementById("seller").value;
    selectedRow.cells[3].innerHTML = document.getElementById("price").value;
    resetform();
}

function exist() {
    var table = document.getElementById("ptable");

    let arrpname = ['Apple Iphone', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage) '];

    let arrseller = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

    let arrprice = ['20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000',];

    for (i = 1; i <= 9; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.innerHTML = i;
        cell2.innerHTML = arrpname[i - 1];
        cell3.innerHTML = arrseller[i - 1];
        cell4.innerHTML = arrprice[i - 1];
        cell5.innerHTML = editicon;
        cell6.innerHTML = deleteicon;
        cell7.innerHTML = readicon;
    }
}


function login() {

    var str1 = "Admin";
    var str2 = "pass"

    var str3 = document.getElementById("uname").value;
    var str4 = document.getElementById("psw").value;


    if ((str3 == str1) && (str4 == str2)) {
        window.location.assign("../source/home.html");
    }

<<<<<<< HEAD
}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("ptable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
/*
 var table = new Tabulator("#ptable", {
	data:tabledata,           //load row data from array
	layout:"fitColumns",      //fit columns to width of table
	responsiveLayout:"hide",  //hide columns that dont fit on the table
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
	pagination:"local",       //paginate the data
	paginationSize:7,         //allow 7 rows per page of data
	movableColumns:true,      //allow column order to be changed
	resizableRows:true,       //allow row order to be changed
	initialSort:[             //set the initial sort order of the data
		{column:"pname", dir:"asc"},
	],
	columns:[                 //define the table columns
		{title:"id", field:"id", editor:"input"},
		{title:"pname", field:"pname", align:"left", formatter:"progress", editor:true},
		{title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
		{title:"Rating", field:"rating", formatter:"star", align:"center", width:100, editor:true},
		{title:"Color", field:"col", width:130, editor:"input"},
		{title:"Date Of Birth", field:"dob", width:130, sorter:"date", align:"center"},
		{title:"Driver", field:"car", width:90,  align:"center", formatter:"tickCross", sorter:"boolean", editor:true},
	],
}); */

=======
}
>>>>>>> ebdd0913995b2f806e610af193b3c0509ba2ad5a
