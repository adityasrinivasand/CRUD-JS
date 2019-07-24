var selectedRow = null;
var i=0;
var editicon = '<i onClick = "edit(this)" class = "fas fa-edit btnedit"></i>';
var deleteicon = '<i onClick = "deletee(this)" class = "fas fa-trash btndelete"></i>';
var readicon = '<i  onClick="read(this)" id="btnread" class="fab fa-readme btnread" ></i>';
var check = '<input type="checkbox"  name="checkbox" value="checkbox">';
var arrpname = ['Apple Iphone', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage)','Apple Iphone', 'Redmi Note 7', 'Redmi Note 7 Pro', 'Lenovo Z2 Plus', 'Honor 7 Plus', 'Sony Bravia 80 cm (32 Inches) Smart TV (Black) ', 'Samsung Galaxy M30 (Gradation Blue, 4+64 GB)', 'OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)', 'Vivo V15 (Aqua Blue, 6GB RAM, 64GB Storage) '];

var arrseller = ['Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Flipkart','Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Amazon', 'Flipkart', 'EBay', 'Snapdeal', 'Flipkart'];

var arrprice = ['20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000','20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000', '20,000'];

var l = arrpname.length;

function create() {
    var formdata = readformdata();
    insert(formdata);
    resetform();
    onupdate("create");
    activefunction(1);

}


function readformdata() {
    var formdata = {};
    
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
    var cell8 = newrow.insertCell(7);

    data.id=l+1;
    cell1.innerHTML = check;
    cell2.innerHTML = data.id;
    cell3.innerHTML = data.pname;
    cell4.innerHTML = data.seller;
    cell5.innerHTML = data.price;
    cell6.innerHTML = data.edit;
    cell7.innerHTML = data.delete; 
    cell8.innerHTML = data.read; 


    arrpname.push(data.pname);
    arrseller.push(data.seller);
    arrprice.push(data.price);
    l=l+1;

}

function resetform() {
    
    document.getElementById("pname").value = "";
    document.getElementById("seller").value = "";
    document.getElementById("price").value = "";
}



function edit(td) {
    document.getElementById("btn-create").disabled = true;
    selectedRow = td.parentElement.parentElement;
   
    document.getElementById("pname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("seller").value = selectedRow.cells[3].innerHTML;
    document.getElementById("price").value = selectedRow.cells[4].innerHTML;

    


    
}


function deletee(td) {
    if (confirm('Are you Sure ?')) {
        row = td.parentElement.parentElement;
        count = td.parentElement;
        document.getElementById("ptable").deleteRow(row.rowIndex);
        arrpname.reduce(row,1);
        arrseller.reduce(row,1);
        arrprice.reduce(row,1);
        resetform();

    }
}

function deleteselected() {

    var table = document.getElementById("ptable");

    var rowCount = table.rows.length;

    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        var chkbox = row.cells[0].childNodes[0];
        if (null != chkbox && true == chkbox.checked) {
            table.deleteRow(i);
            rowCount--;
            i--;
        }

    } 
    

}



function checkall() {
    var checkboxes = document.getElementsByTagName('input');
    var val = null;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
            if (val === null) val = checkboxes[i].checked;
            checkboxes[i].checked = val;
        }
    }
}





function updateform() {
    
    selectedRow.cells[2].innerHTML = document.getElementById("pname").value;
    selectedRow.cells[3].innerHTML = document.getElementById("seller").value;
    selectedRow.cells[4].innerHTML = document.getElementById("price").value;

    resetform();
    document.getElementById("btn-create").disabled = false;
    
}


function exist() {
    
    var table = document.getElementById("ptable");
 

    for (i = 1; i <=5  ; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);

        cell1.innerHTML = check;
        cell2.innerHTML = i;
        cell3.innerHTML = arrpname[i - 1];
        cell4.innerHTML = arrseller[i - 1];
        cell5.innerHTML = arrprice[i - 1];
        cell6.innerHTML = editicon;
        cell7.innerHTML = deleteicon;
        cell8.innerHTML = readicon;

    }
}




function login() {

    var str1 = "Admin";
    var str2 = "pass"

    var str3 = document.getElementById("uname").value;
    var str4 = document.getElementById("psw").value;


    if ((str3 == str1) && (str4 == str2)) {
        window.location.assign("../source/home.html");
    } else {
        alert("User Name or Password is Wrong, Kindly check it !")
    }

}

function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("ptable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
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

function productvalidate(){

    var name = document.forms["productform"]["pname"].value;
    var price = document.forms["productform"]["price"].value;
    var seller = document.forms["productform"]["seller"].value;
    var f=0; 
    if (name == "") {
      alert("Product Name must be filled out");
      return false; f=1; 
    }

    if (price == "") {
        alert("Price must be filled out");
        return false; f=1; 
    }

    if (seller == "") {
        alert("Seller must be Choosen out");
        return false; f=1; 
    }

    if( f==0 )
    create();
}

function loginvalidate(){
    var name = document.forms["loginform"]["uname"].value;
    var pass = document.forms["loginform"]["psw"].value;
    var f=0; 
    if (name == "") {
      alert("User Name must be filled out");
      return false; f=1; 
    }

    if (pass == "") {
        alert("Password must be filled out");
        return false; f=1; 
    }

    if( f==0 )
    login();
}

function read(td){

    selectedRow = td.parentElement.parentElement;
    var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



document.getElementById("disid").innerHTML =  selectedRow.cells[1].innerHTML;
document.getElementById("dispro").innerHTML =  selectedRow.cells[2].innerHTML;
document.getElementById("dissell").innerHTML =  selectedRow.cells[3].innerHTML;
document.getElementById("disprice").innerHTML =  selectedRow.cells[4].innerHTML;



}