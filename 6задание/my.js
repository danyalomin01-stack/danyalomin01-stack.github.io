function f(){
    let price = 0;
    let s = document.getElementsByName("tip");
    let select = s[0];
    let prices = gerPrices();
    let priceInd = parseInt(select.value)-1;
    if(priceInd>=0){
        
        price+=prices.prodTypes[priceInd];
    }

    let radioDiv = document.getElementById("radios");
    let checkDiv = document.getElementById("checkboxs");
    let selectDiv = document.getElementById("selects");

    if (select.value != "3") {
        let radios = document.getElementsByName("prodrad");
        radios.forEach(function(radio) {
            radio.checked = false; 
        });
    }
    
    if (select.value != "1") {
        let checkboxes = document.querySelectorAll("#checkboxs input");
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
    
    if (select.value != "2") {
        let selects = document.getElementsByName("prodsel");
        selects.forEach(function(selectElem) {
            selectElem.selectedIndex = 0; 
        });
    }

    radioDiv.style.display = (select.value == "3"?"block":"none");
    checkDiv.style.display = (select.value == "1"?"block":"none");
    selectDiv.style.display = (select.value == "2"?"block":"none");
    
    let radios = document.getElementsByName("prodrad");
    radios.forEach(function (radio){
        if(radio.checked){
            let optPrice = prices.prodOptions[radio.value];
            if(optPrice!=undefined){
                price+=optPrice;
            }
        }
    });

    let selects = document.getElementsByName("prodsel");
    selects.forEach(function (selectElem){
    // Для select проверяем выбранную option
    let selectedOption = selectElem.options[selectElem.selectedIndex];
    if(selectedOption){
        let selPrice = prices.prodSel[selectedOption.value];
        if(selPrice !== undefined){
            price += selPrice;
        }
    }
});

    let checkboxs = document.querySelectorAll("#checkboxs input");
    checkboxs.forEach(function (checkbox){
        if(checkbox.checked){
            let checkPrice = prices.prodProperties[checkbox.value];
            if(checkPrice!=undefined){
                price+=checkPrice;
            }
        }
    });
    let kol = document.getElementById("kol");
    let koll = parseInt(kol.value);
    let prodPrice = document.getElementById("prodPrice");
    prodPrice.innerHTML = koll*price+" рублей";
}
function gerPrices(){
    return{
        prodTypes:[300,0,0],
        prodProperties:{check1:50,check2:70,check3:10},
        prodOptions:{option1:80,option2:100,option3:120},
        prodSel:{sel1:150,sel2:100}
    }
}

window.addEventListener("DOMContentLoaded",function(event){
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    let selectDiv = document.getElementById("selects");
    radioDiv.style.display = "none";

    let s = document.getElementsByName("tip");
    let select = s[0];
    select.addEventListener("change",function(event){
        let target = event.target;
        console.log(target.value);
        f();
    });
    let radios = document.getElementsByName("prodrad");
    radios.forEach(function(radio){
        radio.addEventListener("change",function(event){
            let r = event.target;
            console.log(r.value);
            f();
        });
    });
    let selects = document.getElementsByName("prodsel");
    selects.forEach(function(selectt){
        selectt.addEventListener("change",function(event){
            let ss = event.target;
            console.log(ss.value);
            f();
        });
    });
    let checkboxs = document.querySelectorAll("#checkboxs input");
    checkboxs.forEach(function(checkbox){
        checkbox.addEventListener("change",function(event){
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            f();
        });
    });
    let kolInput = document.getElementById("kol");
    kolInput.addEventListener("input", function(event) {
        f(); 
    });
    f();
});
