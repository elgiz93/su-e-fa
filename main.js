var siz=0;
var qarsi=0;
rock.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="das1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="YENİDƏN SEÇİN!"
      document.getElementById("cavab").style.color="black"
      document.getElementById("qarsi").src="das2.jpg"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="MƏĞLUB OLDUNUZ!"
      document.getElementById("qarsi").src="yarpaq2.jpg"
      document.getElementById("cavab").style.color="gray"
      qarsi++;
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="QAZANDINIZ!"
      document.getElementById("cavab").style.color="red"
      document.getElementById("qarsi").src="qayci2.jpg"
      siz++;
   }
   document.getElementById("netice").innerHTML=`${siz}:${qarsi}`
}
paper.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="yarpaq1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="QAZANDINIZ!"
      document.getElementById("cavab").style.color="red"
      document.getElementById("qarsi").src="das2.jpg"
      siz++;
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="YENİDƏN SEÇİN!"
      document.getElementById("cavab").style.color="black"
      document.getElementById("qarsi").src="yarpaq2.jpg"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="MƏĞLUB OLDUNUZ!"
      document.getElementById("cavab").style.color="gray"
      document.getElementById("qarsi").src="qayci2.jpg"
      qarsi++;
   }
   document.getElementById("netice").innerHTML=`${siz}:${qarsi}`
}
qayci.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="qayci1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="MƏĞLUB OLDUNUZ!"
      document.getElementById("cavab").style.color="gray"
      document.getElementById("qarsi").src="das2.jpg"
      qarsi++;
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="QAZANDINIZ!"
      document.getElementById("qarsi").src="yarpaq2.jpg"  
      document.getElementById("cavab").style.color="red"
      siz++;
    }
   else if(random==2){
      document.getElementById("cavab").innerHTML="YENİDƏN SEÇİN!"
      document.getElementById("cavab").style.color="black"
      document.getElementById("qarsi").src="qayci2.jpg"
   }
   document.getElementById("netice").innerHTML=`${siz}:${qarsi}`
}
function like(){
   document.getElementById("sagol").src="https://iplogger.org/1R5Bf7"
document.getElementById("like").innerHTML="Təşəkkürlər :)"   
}
