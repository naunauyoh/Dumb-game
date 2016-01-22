//Displays countdown + start
var countdown = function(count,location){
	if (count === 0) {
		return; 
	}
	setTimeout(function(){
		countdown(count-1,location);  
	}, 520); 
	location.append('<br class="temp"><br class="temp"><div class="temp">'+count+'</div>'); 
	$('.temp').delay(300).fadeOut(200); 
} 

//manages calls to countdown when starting
var game = function(){
	$('.start').fadeOut(0); 
	countdown(3,$('.secondtlt'));
	setTimeout(function(){
		$('.secondtlt').append('<br class="temp"><br class="temp"><div class="temp">Start !</div>'); 
		$('.temp').delay(100).fadeOut(300);
	}, 1700);  
}

//Set up of start button + title solo mode
var one = function(){
	$('.players').fadeOut(300); 
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Solo Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}

//Set up of start button + title versus mode
var two = function(){
	$('.players').fadeOut(300);
	setTimeout(function() {
		$('.title').append("<div class='secondtlt'> Versus Mode</div>"); 
		$('.start').fadeIn(200); 
	}, 500); 
}

//Main function getting all inputs/calling the functions
var main = function(){
	var choice = 0; 
	$('.one').click(function(){
		one(); 
		choice = 1; 
	}); 
	$('.two').click(function(){
		two();
		choice = 2; 
	});
	$('.start').click(function(){
		game(); 
	});
	if (choice===1) {
		$('.solo').removeClass()
	};
	/*
	Now the idea is the have a button is clicked
	when player presses the assigned keystroke.
	The Timer (10 sec) is below the div/section containing the 
	*/ 
}

$(document).ready(main); 