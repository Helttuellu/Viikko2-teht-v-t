/*function jono()
{
  var nro1, nro2, nro3;
    nro1 = parseInt(document.getElementById('ensimmäinen').value);
    nro2 = parseInt(document.getElementById('toinen').value);
    nro3 = parseInt(document.getElementById('kolmas').value);
       /*The <br>  tag inserts a single line break.*/
  /*    document.write("Annoit luvut: " + nro1 + ' ' + nro2 + ' ' + nro3 + "<br>");
              if (nro1 < nro2 && nro1 < nro3)
              {
                if (nro2 < nro3)
                {
                  document.write("Lukujen järjestys: " + nro1 + ' ' + nro2 + ' ' + nro3);
                }
                else {
                  document.write("Lukujen järjestys: " + nro1 + ' ' + nro3 + ' ' + nro2);
                }
              }
              else if (nro2 < nro1 && nro2 < nro3)
              {
                if (nro1 < nro3)
                {
                  document.write("Lukujen järjestys: " + nro2 + ' ' + nro1 + ' ' + nro3);
                }
                else {
                    document.write("Lukujen järjestys: " + nro2 + ' ' +nro3 + ' ' + nro1);

                  }
                }
                else if (nro3 < nro1 && nro3 < nro2)
                  {
                    if(nro1 < nro2)
                    {
                      document.write("Lukujen järjestys: " + nro3 + ' ' + nro1 + ' ' + nro2);
                    }
                    else {
                      document.write("Lukujen järjestys: " + nro3 + ' ' + nro2+ ' ' + nro1);

      }
    }
  }*/
  function jono(){
    var nr1 =  parseInt(document.getElementById('ensimmäinen').value);
    var nr2 =  parseInt(document.getElementById('toinen').value);
    var nr3 = parseInt(document.getElementById('kolmas').value);
    var numero = [nr1, nr2, nr3];

    numero.sort(function(a, b){return a-b});
    document.getElementById("vastaus").innerHTML= "Lukujen järjestys: " +numero ;
    document.getElementById("luv").innerHTML= "Annoit luvut: "+nr1+ ' '+nr2+' '+nr3 ;
    alert(numero);
  }

function jonoS()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('nro1').value);
    l2 = parseInt(document.getElementById('nro2').value);
    l3 = parseInt(document.getElementById('nro3').value);
    l4 = parseInt(document.getElementById('nro4').value);
    l5 = parseInt(document.getElementById('nro5').value);
    if (l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if (l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if (l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if (l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.getElementById("sLuvut").innerHTML= "Annoit luvut: "+l1+' '+ l2+' '+l3+' '+ l4+' '+ l5 ;
    document.getElementById("sVastaus").innerHTML= "Suurin niistä on: " +suurin ;
    alert(suurin);
  }


  function pluku()
  {
    var luku;
    luku = parseInt(document.getElementById('aluku').value);
    document.getElementById("pLuvut").innerHTML= "Antamasi luku: "+luku;
    if(luku%2 == 0)
    {
      alert ("Antamasi luku on parillinen");
    }
    else {
      alert ("Antamasi luku on pariton");
    }
  }




  function aKortti()
  {
    var tein = parseInt(document.getElementById('ika').value);
    if(tein < 16)
    {
      alert("Voit ajaa polkupyörää ");
    }
    else if(tein < 18)
    {
      alert("Voit ajaa mopoa");
    }
    else {
      alert ( "Voit ajaa autoa");
    }
  }


  function tulkki()
  {
    var kielet = document.getElementById('kieli').value;
    if(kielet == 'engl')
    {
      document.write("Hello world!");
    }
    else if(kielet == 'se')
    {
      document.write("Hej världen!");
    }
    else {
      document.write("Hola mundo!");
    }
  }


  function pJono()
  {
    var pNr= parseInt(document.getElementById('pLuku').value);
    var paJono = "<p>";
    for(var a = 2; a <= pNr; a= a+2)
    {
      paJono +=a;
      paJono +=" ";
    }
    paJono +="</p>";
      document.getElementById('pVastaus').innerHTML = paJono ;
  }


  function krypto()
  {
    var krSana = document.getElementById('krSana').value;
    var kryptoV = "<p>";
    for(var s = 0; s < krSana.length; s++)
    {
      kryptoV += krSana[s] + 'Ö';
    }
    krSana += "</p>";
    document.getElementById('kryptoVa').innerHTML = kryptoV;
  }


  function öKirjan()
  {
    var aKirjaimet = document.getElementById('kirjaimet').value;
    var aVastaus = 'ei ole';
    for (var ö = 0; ö < aKirjaimet .length; ö++)
    {
      if (aKirjaimet [ö] == 'ö' || aKirjaimet [ö] == 'Ö')
      {
        aVastaus = 'on';
      }
    }
    document.getElementById('öVastaus').innerHTML = '<p>' + aVastaus + '</p>';
  }



  function kLaskin()
  {
    var kLuku = document.getElementById('kLuvut').value;
    var ker =1;
    for(var k = 1; k<= kLuku; k++)
    {
      ker*=k;
    }
    document.getElementById('kVastaus').innerHTML = '<p>Luvun ' + kLuku + ' kertoma on '+ker + '</p>';
  }


    function sJono()
  {
    var ySata = '';
    for(var y = 1; y <= 100; y++)
    {
      if(y%3==0 && y%5==0)
      {
         ySata+='Hip Heijaa ';
      }
      else if(y%5 == 0)
      {
        ySata+='Heijaa ';
      }
      else if(y%3 == 0)
      {
        ySata+='Hip ';
      }
      else {
        ySata+=y+' ';
      }
      document.getElementById('sVastaus').innerHTML = ySata;
    }
  }


  function e10()
  {
    var jono = '<p>';
    for(var k = 1; k <=10; k++)
    {
    jono += k+ ' ';
    }
    jono += '</p>';
    document.getElementById('e10Vastaus').innerHTML = jono;
  }


  function y10()
  {
    y10 = 0;
    for(var y = 1; y <=10; y++)
    {
      y10 += y;
    }
    document.getElementById('y10Vastaus').innerHTML = '<p>'+ y10 + '</p>';
  }


  function potenssi()
  {
    var kor = document.getElementById('kor').value;
    var pot = document.getElementById('pot').value;
    vast = kor;
    for(var p = 1; p < pot; p++)
    {
      vast *= kor;
    }
    document.getElementById('potenssiVastaus').innerHTML = '<p>' + vast + '</p>';
  }


  function spJono()
  {
    var tal = [], nr;
    for(var x = 0; x < 5; x++)
    {
      nr = document.getElementById('tl['+x+']').value;
        nr = parseInt(nr);
      tal.push(nr);
    }
    tal = tal.sort((a,b) => a-b);
    document.getElementById('spVastaus').innerHTML = '<p>Pienin luku: ' + tal[0] + ' ja suurin luku: '+ tal[tal.length-1];
  }


  function krypt2()
  {
    var disp = '';
    var eka, toka;
    disp  = document.getElementById('krypt1').value;
    alert(disp);
    var aakkoset = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
    var sis = [];
    var lop=' ';
    for(var s = 0; s < disp.length; s++)
    {
      eka = disp[s];
      sis.push(eka);
      var lisa = Math.floor(Math.random()*aakkoset.length);
      toka = aakkoset[lisa];
      sis.push(toka);
    }
    lop = sis.join('');
    document.getElementById('krypt2Vastaus').innerHTML = lop;
  }


  function lista()
  {
    var nr1, nr2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
    nr1 = parseInt(document.getElementById('pieNro').value);
    nr2 = document.getElementById('isoNro').value;
    if(nr1%2 == 0)
    {
      palku = nr1;
    }
    else {
      palku = nr1+1;
    }
    for(var b = palku; b<=nr2; b+=2)
    {
      pluvut += b + ' ';
      psumma += b;
    }
    if(nr1%2 == 0)
    {
      ralku = nr1+1;
    }
    else {
      ralku = nr1;
    }
    for(var r = ralku; r<=nr2; r+=2)
    {
      rluvut += r + ' ';
      rsumma += r;
    }
    document.getElementById('listaVastaus').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
  }


  function  Scrabble()
{
  var pis = 0;
  var aSana = document.getElementById('sana').value;
  for(var i = 0; i < aSana.length; i++)
  {
    switch (aSana[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pis++;
        break;
      case 'o':
      case 'ä':
      case 'k':
      case 'l':
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
        pis+=2;
        break;
      case 'u':
      case 'm':
      case 'U':
      case 'M':
        pis+=3;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
        pis+=4;
        break;
      case 'ö':
      case 'd':
      case 'Ö':
      case 'D':
        pis+=7;
        break;
      case 'b':
      case 'f':
      case 'g':
      case 'B':
      case 'F':
      case 'G':
        pis+=8;
        break;
      case 'c':
      case 'C':
        pis+=10;
        break;
      default:
        pis+=12;
    }
    document.getElementById('scrVastaus').innerHTML = "<p>Sanan " + aSana + " pisteet ovat: " + pis + "</p>";
  }
}


function lotto()
{
  var aNr = [];
  var ets;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    ets = Math.floor(Math.random()*40)+1;
    aNr[lotto] = ets;
  }
  aNr.sort(function(a, b){return a-b});

  document.getElementById('voitto').innerHTML = '<p>'+aNr+'</p>';
}


function tbl()
{
  var taulukko = [];
  taulukko  = [[20, 19, 18, 17], [12, 11, 10, 9], [5, 6, 7, 8], [13, 14, 15, 16], [1, 2, 3, 4]];
  var taulu = '<table border="1">';
  for(var j = 0; j < taulukko.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < taulukko [j].length; k++)
    {
      taulu += '<td>' + taulukko [j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('tblVastaus').innerHTML = taulu;
}

function korttiTemp()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //var maat = ['pa','ri','ru', 'he']
  var arvoMaa = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < arvoMaa.length; n++)
    {
      if(m == maat.length-1 && n == arvoMaa.length-1)
      {
        pakka[laskuri] = maat[m] + arvoMaa[n];
      }
      else {
        pakka[laskuri] = maat[m]+arvoMaa[n];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('tempVastaus').innerHTML = '<p>'+kortit+'</p>';
}
