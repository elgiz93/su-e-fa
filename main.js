
rock.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="das1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarşı tərəf daş seçdi! Yenidən Secin!"
      document.getElementById("qarsi").src="das2.jpg"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarşı tərəf kağız seçdi! MƏĞLUB OLDUNUZ!"
      document.getElementById("qarsi").src="yarpaq2.jpg"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarşı tərəf qayçı seçdi! QAZANDINIZ!"
      document.getElementById("qarsi").src="qayci2.jpg"
   }
}
paper.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="yarpaq1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarşı tərəf daş seçdi! QAZANDINIZ!"
      document.getElementById("qarsi").src="das2.jpg"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarşı tərəf kağız seçdi! Yenidən Secin!"
      document.getElementById("qarsi").src="yarpaq2.jpg"
   }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarşı tərəf qayçı seçdi! MƏĞLUB OLDUNUZ!"
      document.getElementById("qarsi").src="qayci2.jpg"
   }
}
qayci.onclick= function(){
   let random=Math.floor(Math.random() * 3);
   console.log(random);
   document.getElementById("siz").src="qayci1.jpg"
   if(random==0){
      document.getElementById("cavab").innerHTML="Qarşı tərəf daş seçdi! MƏĞLUB OLDUNUZ!"
      document.getElementById("qarsi").src="das2.jpg"
   }
   else if(random==1){
      document.getElementById("cavab").innerHTML="Qarşı tərəf kağız seçdi! QAZANDINIZ"
      document.getElementById("qarsi").src="yarpaq2.jpg"  
    }
   else if(random==2){
      document.getElementById("cavab").innerHTML="Qarşı tərəf qayçı seçdi! Yeniden Secin!"
      document.getElementById("qarsi").src="qayci2.jpg"
   }
}