
var q1=["some1","an1","an2","an3","an4"];
var q2=["some2","san1","san2","san3","san4"];
var q3=["dome1","dan1","dan2","dan3","dan4"];
var q4=["fome1","fan1","fan2","fan3","fan4"];


var countR = 0;
var countW = 0;
var timer = 30;

var random =[0,1,2,3,4];

$(document).ready(function(){
 	
 	document.getElementById("wrongCount").innerHTML= countW;
 	document.getElementById("rightCount").innerHTML= countR;
 	document.getElementById("timer").innerHTML= timer;

	function ranNum(choice, answers) {
		document.getElementById("question").innerHTML = answers[0];
	    var x = Math.floor(Math.random()*(random.length-1)+1);
	    var y = random[x];
		document.getElementById(choice).innerHTML= answers[y];
	    random.splice(random.indexOf(y),1);
		return random;
	    };
	function populate (quest){   
		ranNum("firstChoice", quest);
		ranNum("secondChoice",quest);
 		ranNum("thirdChoice",quest);
		ranNum("fourthChoice",quest)};
//determines whether the correct answer was chosen and adds to the appr count
function isAnswerRight (choice, answers) {
	$(choice).click(function(){
 		if ($(choice).html()===(answers[1])){
 		countR += 1;
   		$("#rightCount").html(countR);
   		alert("Nice!");
   		timer = 30;
   		} else{
   		countW += 1;
   		$("#wrongCount").html(countW);
   		alert("Ouch! The correct answer was " + answers[1]);
   		// stopTimer();
   		// document.getElementById('timer').innerHTML = timer;
   		timer = 30};
});
};
function areYouRight(ans){
	isAnswerRight("#firstChoice",ans);
	isAnswerRight("#secondChoice",ans);
	isAnswerRight("#thirdChoice",ans);
	isAnswerRight("#fourthChoice",ans)};

	function timePlease (){

		document.getElementById("start").onclick = function intervalCounter () {		
			$("#start").hide();
			var intervalId = setInterval(function () {
				if (timer === 1) {
				clearInterval(intervalId);
					countW += 1;
   					$("#wrongCount").html(countW);
			}
				// output a multiple of 2
				timer-=1;
				var html = document.getElementById('timer').innerHTML;

				document.getElementById('timer').innerHTML =timer;
			}, 1000);
	}
	}
timePlease();
$(".btn").mouseup(function(){
    if(countW+countR===0)
	{populate(q1);
	areYouRight(q1)}
    else if(countW+countR===1)
	{populate(q2);
	areYouRight(q2)}
	else if(countW+countR===2)
	{populate(q3);
	areYouRight(q3)}
	else if(countW+countR===3)
	{populate(q4);
	areYouRight(q4)}
	if(countW+countR===4)
	{alert("Game Over")}
});
});


	



 
   
		


// $("#firstChoice").click(function(){
 // 	if ($("#firstChoice").html()===(q1[1]))
 //   		{countR += 1;
 //   		$("#rightCount").html(countR)}

 //   	else{
 //   		countW += 1;
 //   	$("#wrongCount").html(countW)}
 //   	});
 //   });
 // $(".btn").click(function(){
 
 // 	if ($("#firstChoice").html()===(q1[1]))
 //   		{countR += 1;
 //   		$("#rightCount").html(countR)

 //   		console.log("Hit");
 //   	}

   	// else{
   	// 	countW += 1;
   	// $("#wrongCount").html(countW)}
   	// });






//inner.html Question in first div "index 0"

//inner.html words on button "index of 1/4"

