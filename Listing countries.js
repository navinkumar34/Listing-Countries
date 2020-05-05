let ourData =[];

function initialLoad(){
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://restcountries.eu/rest/v2/all',false);
    ourRequest.onload = function(){
        if(ourRequest.status >= 200 && ourRequest.status <= 400){
            ourData = JSON.parse(ourRequest.responseText);
            renderInitialHTML(ourData);
        }
    }; 
    ourRequest.send();
}

function renderInitialHTML(data){
    let outerdiv = document.getElementById("outer");
    let gettable = document.createElement("TABLE");
    gettable.setAttribute("id" , "datatable");
    let hrow = gettable.insertRow(0);
    hrow.setAttribute("id", "table_top");
    let hcell1 = hrow.insertCell(0);
    hcell1.colSpan ='3';
    hcell1.appendChild(document.createTextNode("Country  "));
    let hcell2 = hrow.insertCell(1);
    hcell2.colSpan ='5';
    hcell2.appendChild(document.createTextNode("Capital  "));
    let hcell3 = hrow.insertCell(2);
    hcell3.colSpan ='5';
    hcell3.appendChild(document.createTextNode("Flag     "));
    data.forEach(element => {
        let row = gettable.insertRow();
        let cell1 = row.insertCell(0);
        cell1.colSpan ='3';
        cell1.appendChild(document.createTextNode(element.name.trim()));
        let cell2 = row.insertCell(1);
        cell2.colSpan ='5';
        cell2.appendChild(document.createTextNode(element.capital.trim()));
        let cell3 = row.insertCell(2);
        cell3.colSpan ='5';
        let img = document.createElement("IMG");
        img.src = element.flag;
        img.width = '100';
        img.height = '40';
        cell3.appendChild(img);
    });
    outerdiv.appendChild(gettable);
}

function searchCt(){
    let searc_box = document.getElementById("sbox");
    let search_result = ourData.filter(function(e) {
    return e.name
      .toLowerCase()
      .trim()
      .startsWith(searc_box.value.toLowerCase().trim());
  });
        let gettable1 = document.getElementById("datatable");
        gettable1.remove();
        renderInitialHTML(search_result);
}
    


