$(window).load(function(){
	'use strict';


	var amountOfDivs = 5;
	var startHeight = 50;
	var container = document.getElementById('container');
	var containerWidth = container.offsetWidth;
	var containerHeight = container.offsetHeight;

	// Math variables
	var i, a, b, x;




	function drawBlocks () { 

		var blockWidth = containerWidth/amountOfDivs;

		for (x = 1; x <= amountOfDivs; x++) {
			// create a new div element 
			// and give it some content 

			var newDiv = document.createElement('div');
			newDiv.classList.add('block'); 
			newDiv.setAttribute('id', x);
			newDiv.setAttribute('style', 'width:'+blockWidth+'px;');

			container.appendChild(newDiv);

		}
	}

	

	function setSliders(){
		// Start of bar dragging using jquery UI slider

		$('.block').each(function() {
			$(this).slider({
		      range: 'min',
		      value: startHeight,
		      min: 0,
		      max: containerHeight,
		      orientation: 'vertical',
		      slide: function( event, ui ) {

		      	// Set value for each bar when dragged
		      	$('.ui-slider-handle').each(function(){

			      	changeValues(event.target.id, ui.value);

		      	});
		      }
		    });  
	    }); 

	     
	}



	function changeValues(id, value) {

		var thisDiv = parseInt(id);

			for (i = 1; i <= amountOfDivs; i++){

				// MATHS
				a = 600 - (i * 50);

				if ((thisDiv-amountOfDivs === 0) || (thisDiv-1 === 0)){
					// End Block - Make b a higher value
					b = 1 * (0.5 / i);

				} else {

					b = 0.8 * (0.5 / i);

				}

				// Set the slider values
				$('#' + (thisDiv - i) + ', #' + (i + thisDiv))
					.slider({
						value: (a - value) * b
					});
			}
	} 


	// Change amount of blocks
	$( '.amountOfDivsSelect' ).change(function() {

		// Set new amount of divs
		amountOfDivs = $('.amountOfDivsSelect').val();

		// Clear Everything inside container
		$( '#container' ).empty();

		// Reset
	  	init();
	});




	function init(){

		// drawBlocks	
		drawBlocks();

		// setup slider functionality 
		setSliders();

	}



	// Everything is definied - START
	init();

});