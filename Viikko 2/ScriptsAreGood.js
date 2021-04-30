/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function number() {
    var numero = document.getElementById('value1');
    if (numero.value >= 0) {
        alert("luku on positiivinen")
        document.getElementById('value1').value = '';
    } else {
        alert("luku on negatiivinen")
        document.getElementById('value1').value = '';
    }
}

function birthday() {
    var numero = document.getElementById('value2');
    if (numero.value == 1) {
        alert("Maanantai")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 2) {
        alert("Tiistai")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 3) {
        alert("Keskiviikko")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 4) {
        alert("Torstai")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 5) {
        alert("Perjantai")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 6) {
        alert("Lauantai")
        document.getElementById('value2').value = '';
        return
    }

    if (numero.value == 7) {
        alert("Sunnuntai")
        document.getElementById('value2').value = '';
        return
    } else {
        alert("Sisesä numero 1-7")
        document.getElementById('value2').value = '';
    }

}

function year() {
    var vuosi = document.getElementById('value3');
    var divfour = vuosi.value / 4;
    var divhundred = vuosi.value / 100;
    var divfourhundred = vuosi.value / 400;
    var karkausvuosi = false;

    if (Number.isInteger(divfour) && Number.isInteger(divhundred) == false) {
        karkausvuosi = true;
    } else if (Number.isInteger(divfourhundred)) {
        karkausvuosi = true;
    }
    
    if(karkausvuosi){
        alert("Vuosi on karkausvuosi");
    }else{
        alert("Vuosi ei ole karkausvuosi");
    }
    document.getElementById('value3').value = '';
}

function numbers (){
    var number1 = document.getElementById('value4');
    var number2 = document.getElementById('value5');
    var number3 = document.getElementById('value6');
    var number4 = document.getElementById('value7');
    var number5 = document.getElementById('value8');
    var outgoing = document.getElementById('output');
    
    var summa = Number(number1.value) + Number(number2.value) + Number(number3.value) + Number(number4.value) + Number(number5.value) ;
    var keskiarvo = Number(summa / 5) ;
    
    outgoing.value = "lukujen summa on:" + summa + " ja keskiarvo on " + keskiarvo ;
    
}

function multiplier() {
    var el = document.getElementById('value9');
    var luku = el.value;
    var lause = '';
    
    for (var i = 1; i <= 10; i++) {
        var sum = Number(luku) * i;
        
        lause += `${luku} x ${i} = ${sum}\n`;
    }
    
    alert(lause);
}