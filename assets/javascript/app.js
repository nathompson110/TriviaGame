
var q1=["Which movie is Not a Disney movie?","Anastasia","Beauty and the Beast","Tangled","Cinderella"];
var q2=["What year was \'Snow White and the Seven Dwarfs\' released","1938","1925","1927","1920"];
var q3=["What is the name of Aladdin\'s pet monkey?","Abu","Baloo","Raja","Iago"];
var q4=["According the song \'Be Our Guest\', what must Belle tie?","napkin","tie","scarf","her shoes"];

var countR = 0;
var countW = 0;
var timer = 30;

var random =[0,1,2,3,4];

$(document).ready(function(){
 	
 	document.getElementById("wrongCount").innerHTML= countW;
 	document.getElementById("rightCount").innerHTML= countR;
 	document.getElementById("timer").innerHTML= timer;
 		function timePlease (){

		document.getElementById("start").onclick = function intervalCounter () {		
			$("#start").hide();
		
			
			var intervalId = setInterval(function () {
				if (timer === 1) {
				clearInterval(intervalId);
					countW += 1;
   					$("#wrongCount").html(countW);
			}
				timer-=1;
				var html = document.getElementById('timer').innerHTML;

				document.getElementById('timer').innerHTML =timer;
			}, 1000);
			newQuestion(q1);
	}
	}
timePlease();

//inserts question and shuffles button answer choices randomly 
	function ranNum(choice, answers) {
		document.getElementById("question").innerHTML = answers[0];
	    var x = Math.floor(Math.random()*(random.length-1)+1);
	    var y = random[x];
		document.getElementById(choice).innerHTML= answers[y];
	    random.splice(random.indexOf(y),1);
	    return random;
	    };
	function populate (quest){ 
	random =[0,1,2,3,4];  
	ranNum("firstChoice", quest);
	ranNum("secondChoice",quest);
 	ranNum("thirdChoice",quest);
	ranNum("fourthChoice",quest);
};
// populate(q2);
//determines whether the correct answer was chosen and adds to the appr count
function rightAnswer (choice, answers) {
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
   	timer = 30;
   };
   if(countW+countR===1)
	{newQuestion(q2)}
	else if(countW+countR===2) {
	newQuestion(q3)}
	else if(countW+countR===3) {
	newQuestion(q4)};
});
};


function areYouRight(ans){
	rightAnswer("#firstChoice",ans);
	rightAnswer("#secondChoice",ans);
	rightAnswer("#thirdChoice",ans);
	rightAnswer("#fourthChoice",ans);}

function newQuestion(questionNum){
	populate(questionNum);
	areYouRight(questionNum);
}



   });

