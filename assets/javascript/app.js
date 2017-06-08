
var q1=["Which movie is Not a Disney movie?","Anastasia","Beauty and the Beast","Tangled","Cinderella"];
var q2=["What year was \'Snow White and the Seven Dwarfs\' released?","1938","1925","1927","1920"];
var q3=["What is the name of Aladdin\'s pet monkey?","Abu","Baloo","Raja","Iago"];
var q4=["According the song \'Be Our Guest\', what must Belle tie?","napkin","tie","scarf","her shoes"];
// var q5=["Which of the following is not a Disney prince?", "<img src=assets/images/shrek.jpeg","<img src=assets/images/naveen.jpeg","<img src=assets/images/eric.jpg", "<img src=assets/images/beast.jpeg"]
var countR;
var countW;
var timer;
var intervalId;
var random =[0,1,2,3,4];
var correctAns;
var clickedAns;
var myAlert;

function myStart (){
	$("#start").click(function(){

		countR = 0;
		countW = 0;
		timer = 15;
		$("#popup").hide();
		$("#start").hide();
		$("#wrongCount").html(countW);
		$("#rightCount").html(countR);
		$("#timer").html(timer);
		myTimer();
		populate(q1);
		$("#start").html("Play Again?")
		

	});
};

function myTimer() {intervalId = setInterval(function () {
		timer-=1;
		$("#timer").html(timer);
		if (timer===-1) {
			countW++;
			timer = 19;
			$("#wrongCount").html(countW);		
			$("#textAnswer").html("Time's up! The right answer is " + correctAns)
   			$('#popup video').attr("src","assets/images/cindy.mp4");
   			$("#popup").show();
   			setTimeout(function(){$("#popup").hide(); },4000);
   			nextQuestion();
   		};
   		}, 1000);
	};
 //rewrite in loop  	
 function nextQuestion(){	
 	if(countW+countR===1)
	{populate(q2)}
	else if(countW+countR===2) {
	populate(q3)}
	else if(countW+countR===3) {
	populate(q4)}
	else if(countW+countR===4){
	// populate(q5)}
	// else if(countW+countR===5){
		stopTimer();
		$("#start").show();
		var total = (countR+countW);
		setTimeout(function(){ $("#textAnswer").html("Game Over! Number Correct: " + countR + " out of " + total);
   		$('#popup video').attr("src","assets/images/blinking.mp4");
   		$("#popup").show(); }, 4000);
	};	
	};	
function myAlertFunction (innerhtmlmessage){
   		$("#textAnswer").html(innerhtmlmessage)
   		$("#popup").show();
   		setTimeout(function(){$("#popup").hide(); },4000);
}			

function stopTimer(){clearInterval(intervalId);}

function ranNum(choice, varArray) {
	var x = Math.floor(Math.random()*(random.length-1)+1);
	var y = random[x];
	$(choice).html(varArray[y])
	random.splice(random.indexOf(y),1);
	correctAns = varArray[1];
	return random;
	};

	   
function populate (varArray){ 
	$("#question").html(varArray[0]);	
	ranNum("#firstChoice", varArray);
	ranNum("#secondChoice",varArray);
	ranNum("#thirdChoice",varArray);
	ranNum("#fourthChoice",varArray);
	random =[0,1,2,3,4]
};
function uRight (){		 
 $(".btn-primary").click(function(){
 	timer = 19; 
 	clickedAns = $(this).html()
 	if (clickedAns.indexOf(correctAns)>-1){
 		$('#popup video').attr("src","assets/images/happy.mp4");
 		countR++;
 		$("#rightCount").html(countR);
 		myAlertFunction("Great Job!")
 	} else {
 		countW++;
 		$('#popup video').attr("src","assets/images/cindy.mp4");
 		$("#wrongCount").html(countW);
 		myAlertFunction("UH OH! The right answer is " + correctAns)  		
 	};
 	nextQuestion()
    	
	});
};

$(document).ready(function(){
alert("Dear Bootcamp Grader, \n\n The first answer is \nAnastasia, jic you're not a Disney fan and want to see what correct does.")
myStart();
uRight()


 });


