 var button = document.getElementById("button");
 var times = 0;
 var gamescore = 0;
    var canvas1 = document.getElementById("canvas1");
     var A = canvas1.getContext("2d");
     var B = canvas1.getContext("2d");
     var C = canvas1.getContext("2d");
     var all = canvas1.getContext("2d");
     var sc = canvas1.getContext("2d");

     var num1, num2, num3;

     var pics = new Array();
     pics = [
     "http://img.clipartall.com/clipart-cow-clipart-img002.jpg",
     "http://img.clipartall.com/bee-clipart-images-clip-art-bee.jpg",
     "http://classroomclipart.com/lion-sm-clipart.jpg"
            ];
     button.onclick = function()
      {
    
        function number()
        {
    
                //slot 1
                num1 = Math.round(Math.random()*2);
                A.font = "24px Arial";
                var pic = new Image;
                pic.src = pics[num1];
                A.drawImage(pic,246,215,30,30);
                A.beginPath();
                A.rect(221,190,70,90);
                A.stroke();  

                //slot2
                num2 = Math.round(Math.random()*2);
                B.font = "24px Arial";
                var pic1 = new Image;
                pic1.src = pics[num2];
                B.drawImage(pic1,102,215,30,30);
                B.beginPath();
                B.rect(80,190,70,90);
                B.stroke(); 
 
                //slot3 
                num3 = Math.round(Math.random()*2);
                C.font = "24px Arial";
                var pic2 = new Image;
                pic2.src = pics[num3];
                C.drawImage(pic2,175,215,30,30);
                C.beginPath();
                C.rect(150,190,70,90);
                C.stroke();     
                   
                //score board
                sc.font = "20px Arial";
                sc.strokeText(gamescore,26,43);
                sc.beginPath();
                sc.rect(10,10,60,60);
                sc.stroke();   
                 
                //overall box 
                all.beginPath();
                all.font = "30px Arial";
                all.rect(0,0,470,450);
                all.stroke();   

     

     
                 if((times+1)%15===0)
                 {    
       
                     if((num1===num2) &&(num3===num2)&&(num1===num3)){
                            
                            gamescore++;
                              }
                     else{

                            gamescore = gamescore - 0.5;
                              }
                  }


            
    

      }
    
             function box()
               {
                     A.clearRect(0,0,500,500);
                     B.clearRect(0,0,500,500);
                     C.clearRect(0,0,500,500);
                     sc.clearRect(0,0,500,500);
                     number();
                     times++;
                     if(times%15===0&&times!==0){
 
                          clearInterval(j);
                            }
    

                }     

      var j = setInterval(function(){box()},200);
    
     

    
          var reset = document.getElementById("reset");
          reset.onclick = function(){
            gamescore = 0;
            alert("You have reset your game");
            sc.clearRect(0,0,500,500);
            sc.font = "20px Arial";
            sc.strokeText(gamescore,28,33);
            sc.beginPath();
            sc.rect(10,10,60,60);
            sc.stroke(); 
              }
          var stop = document.getElementById("stop");
          stop.onclick = function(){
            clearInterval(j);
          }
     
    }
   
