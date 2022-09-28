// alert
// i= 0


/*
var i=0
for (i;i<5;i++){
  alert(i)
}
*/
// forma 2 mas resumida mas economica mas HD
for(var i=0;i<5;i++){
//alert(i)
  
}
//Ejemplo 02 - 28/09
let text="";
//alert(text)

for(let i=0;i<10;i++){
  //text=text+"hola"+"<br>";
  text+=i+"<br>";
}

document.getElementById("demo").innerHTML=text;

//Ejemplo 03 - 28/09
const mat_fav=["matemática","tecnología",
                   "inglés","programación","edu fisica","Emprendimiento"];
//alert(mat_fav.length)
let text2="";
for(let i=0;i<mat_fav.length;i++){
  //text=text+"hola"+"<br>";
  text2+=mat_fav[i]+"<br>";
}

document.getElementById("demo2").innerHTML=text2;