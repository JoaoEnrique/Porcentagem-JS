var contador=0;
var tempo=setInterval(timer, 1000); //Tempo da porcentagem

function timer()
{
  
 if(contador <=99){
  contador=contador+1;

  document.getElementById("timer").innerHTML= contador +'%';
 }else{
  document.getElementById("timer").innerHTML=  '100%';
 }
}