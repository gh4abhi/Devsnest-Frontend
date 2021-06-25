var block = [ ];

var booked=0, remain=300;
document.getElementById("val1").innerHTML=booked;
document.getElementById("val2").innerHTML=remain;

for (let i=1;i<=300;i++)
{
  block[i]=0;
}

function colour(classnamee){
  const pclass="grid";
  element=document.getElementsByClassName(classnamee);
  n=classnamee;
  if(block[n] == 0)
  {
    block[n]=1;
    booked+=1;
    remain-=1;
    document.getElementById("val1").innerHTML=booked;
    document.getElementById("val2").innerHTML=remain; 
    element[0].style.backgroundColor ="blue";
  }
  else
  {
    remain+=1;
    booked-=1;
    document.getElementById("val1").innerHTML=booked;
    document.getElementById("val2").innerHTML=remain;
    block[n]=0;
    element[0].style.backgroundColor ="aqua";
  }
}
