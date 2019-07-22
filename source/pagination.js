
function onupdate(){
    var table = document.getElementById("ptable");
    deleteall();
    var concount = document.getElementById("pageno").value; //takes 5/10/15/20 - contentcount

    console.log(concount);
    
    for( var i = 1;( i <= arrpname.length  && i<=concount) ; i++){

        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = check;
        cell2.innerHTML = i;
        cell3.innerHTML = arrpname[i - 1];
        cell4.innerHTML = arrseller[i - 1];
        cell5.innerHTML = arrprice[i - 1];
        cell6.innerHTML = editicon;
        cell7.innerHTML = deleteicon;
    }

}


    function deleteall()
{
    
    var table =document.getElementById("ptable");
    var rowCount = table.rows.length;
    for (var i = 1; i < rowCount; i++) {
        
            table.deleteRow(i);
            rowCount--;
            i--;
    }
    
}


