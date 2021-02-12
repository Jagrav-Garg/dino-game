score=0;
cross=true;
document.onkeydown=function(e){
	//console.log("Key code is : ",e.keyCode)
	if(e.keyCode==38){
		dino=document.querySelector('.dino');
		dino.classList.add('animateDino');
		setTimeout(() =>{
           dino.classList.remove('animateDino')
		},700);
	}
	if(e.keyCode==39){
		dino=document.querySelector('.dino');
		dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		dino.style.left=dinoX+110+"px";
	}
	
	if(e.keyCode==37){
		dino=document.querySelector('.dino');
		dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		dino.style.left=dinoX-110+"px";
	}	
}

setInterval(() =>{
   dino=document.querySelector('.dino');
   gameOver=document.querySelector('.gameOver');
   obstacle=document.querySelector('.obstacle');

   dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
   dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

   ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
   oy =parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

   offsetX = Math.abs(dx-ox);
   offsetY = Math.abs(dy-oy);

   //console.log(offsetX,offsetY)
   
   if (offsetX<25 && offsetY<25) {
   	  gameOver.style.visibility='visible';
   	  obstacle.classList.remove('obstacleAni');
   	  dino.style.visibility='hidden';
        window.confirm("Your Total Score : "+(score-1))
   }
   else if(offsetX<75 && cross){
   	score+=1;
   	updateScore(score);
   	cross=false;
   	setTimeout(()=>{
   		cross=true;
   	},1000);
   }
},1);

function updateScore(score){
	score.outerHTML = "Your Score: " + score
}

