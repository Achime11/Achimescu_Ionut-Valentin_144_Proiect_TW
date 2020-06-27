let post = {
    2: {
        numepost: 'Secretar ',
        nume: 'Simion ',
        prenume: 'Ramona '
    },
    0: {
        numepost: 'Primar ',
        nume: 'Târoiu ',
        prenume: 'Ioan Liviu '
    },
    1: {
        numepost: 'Viceprimar',
        nume: 'Blidaru',
        prenume: 'Margarin Serban '
    }
}
let ok=0;
let count=0;
    function AfisareTabel()
    {         
        while(count<3)
        {
            let tableRef = document.getElementById('myTable');
            let newRow = tableRef.insertRow(-1);
            let idCell = newRow.insertCell(-1);
            idCell.innerText = post[count].numepost;
            let numeCell = newRow.insertCell(-1);
            numeCell.innerText = post[count].nume;
            let prenumeCell = newRow.insertCell(-1);
            prenumeCell.innerText = post[count].prenume;
            count=count+1;
        }
        let tableRef=document.getElementById('myTable').style= "border: 2px solid black"
    }
    function AscundereTabel()
    {
        
        if(count==3)
        {
            count=0;
            document.getElementById("myTable").deleteRow(1);
            document.getElementById("myTable").deleteRow(1);
            document.getElementById("myTable").deleteRow(1);
        }
        let tableRef=document.getElementById('myTable').style= "border: 0px solid black"
    }
    function modificarePrimar()
    {
        if(ok==0)
        {
            ok=1;
            post[0].nume="Achimescu";
            post[0].prenume="Valentin";
            AscundereTabel();
            AfisareTabel();
        }
        else
        {
            ok=0;
            post[0].nume="Târoiu";
            post[0].prenume="Ioan Liviu";
            AscundereTabel();
            AfisareTabel();
        }
    }