//Definimos las variables arriba y abajo
var arriba = document.getElementById('arriba');
var abajo = document.getElementById('abajo');
      
//El elemeto arriba no se verá
arriba.style.display = 'none';
      
      
//Funciones para cambiar de color
//Al hacer click en el botón rosa, arriba y abajo se vuelven rosa
function cRosa(){
      arriba.style.fill = '#FF00FF';
      abajo.style.fill = '#FF00FF';
}
      
//Al hacer click en el botón azul, arriba y abajo se vuelven azul
function cAzul(){
      arriba.style.fill = '#3B83BD';
      abajo.style.fill = '#3B83BD';
}

//Al hacer click en el botón verde, arriba y abajo se vuelven verde
function cVerde(){
      arriba.style.fill = '#00BB2D';
      abajo.style.fill = '#00BB2D';
}
      

//Funciones para mostrar o ocultar
//Al hacer click en arriba
function mArriba(){
      //Si arriba está oculto se mostrará
      if(arriba.style.display == 'none'){
            arriba.style.display = 'inline-block';
      }
      //Si no está oculto ahora si lo estará
      else{
            arriba.style.display = 'none'
      }
}

//Al hacer click en abajo
function mAbajo(){
      //Si abajo está oculto se mostrará
      if(abajo.style.display == 'none'){
            abajo.style.display = 'inline-block';
      }
      //Si no está oculto ahora si lo estará
      else{
            abajo.style.display = 'none'
      } 
}
