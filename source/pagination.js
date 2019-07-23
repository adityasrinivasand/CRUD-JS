var concount;


function onupdate(pageno = 1) {
    var table = document.getElementById("ptable");
    deleteall();
    concount = document.getElementById("pageno").value; //takes 5/10/15/20 - contentcount

    
    var j = 1;

    j = (concount * (pageno-1)) + 1; //sending the first element of the table to be displayed
    print(j);

    if (pageno == 1) {
        document.getElementById("pre").disabled = true;
    }     


}

function print(no) {

    var table = document.getElementById("ptable");
    var i = no;
    var j = 1;
    while (i <= arrpname.length && j <= concount) {

        var row = table.insertRow(j);
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

        j++;
        i++;
    }

}




function deleteall() {

    var table = document.getElementById("ptable");
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {

        table.deleteRow(i);
        rowCount--;
        i--;
    }

}

function activefunction(e) {
    if (document.querySelector('#pagination a.active') !== null) {
        document.querySelector('#pagination a.active').classList.remove('active');
    }
    e.target.className = "active";

}

function page_click(clicked_id) {
    clicked_id;
    onupdate(clicked_id);
}

