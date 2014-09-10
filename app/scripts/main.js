$(window).load(function(){
	'use strict';


	// VARIABLES
	// var maxHeight = 300,
	// 	minHeight = 50,
		// var numberOfBlocks = 6;





		// Start of bar dragging using jquery UI slider

	$('.block').each(function() {
		$(this).slider({
	      range: 'min',
	      value: 150,
	      min: 0,
	      max: 300,
	      animate: true,
	      orientation: 'vertical',
	      slide: function( event, ui ) {


	      	// Set value for each bar when dragged
	      	$('.ui-slider-handle').each(function(){


		      	changeValues(event, ui);

	      	});
	      }
	    });
    	$('.ui-slider-handle').attr('data-acr', 33 + '%');	// set intial value	    
    }); 
	
	

	


	function changeValues(event, ui) {

		var thisDiv = parseInt(event.target.id);


			if (thisDiv === 1) {
				$('#2').slider({ animate:true, value: ui.value/1.5 });
				$('#3').slider({ value: ui.value/2 });
				$('#4').slider({ value: ui.value/5 });
				$('#5').slider({ value: ui.value/10 });
				$('#6').slider({ value: ui.value/15 });
			} 

			if (thisDiv === 2) {
				$('#1, #3').slider({value: ui.value/1.5 });
				$('#4').slider({ value: ui.value/2 });
				$('#5').slider({ value: ui.value/5 });
				$('#6').slider({ value: ui.value/10 });
			} 

			if (thisDiv === 3) {

				if (ui.value <= 150){
					console.log('less than 150');


				} else if (ui.value > 150) {
					console.log('more than 150');
				}


				// $('#2, #4').slider({ value: ui.value/1.5 });
				// $('#1, #5').slider({ value: ui.value/2 });
				// $('#6').slider({ value: ui.value/5});
			} 

			if (thisDiv === 4) {
				$('#3, #5').slider({ value: ui.value/1.5 });
				$('#2, #6').slider({ value: ui.value/2 });
				$('#1').slider({ value: ui.value/5 });
			} 

			if (thisDiv === 5) {
				$('#4, #6').slider({ value: ui.value/1.5 });
				$('#3').slider({ value: ui.value/2 });
				$('#2').slider({ value: ui.value/5 });
				$('#1').slider({ value: ui.value/10 });
			} 

			if (thisDiv === 6) {
				$('#5').slider({ value: ui.value/1.5 });
				$('#4').slider({ value: ui.value/2 });
				$('#3').slider({ value: ui.value/5 });
				$('#2').slider({ value: ui.value/10 });
				$('#1').slider({ value: ui.value/15 });
			} 

			
		


  		// for (var i = 1; i <= numberOfBlocks; i++){

  		// 	if (i !== thisDiv) {

  		// 		if (thisDiv === 3){
  		// 			$('#'+i).slider({ value: ui.value/(thisDiv/1.5) });
  		// 		}



  		// 		if ((thisDiv - i === 1) || (thisDiv - i === -1)) {
  		// 			// Next to it
  		// 			$('#'+i).slider({ value: ui.value/(thisDiv/1.5) });
  		// 			$('#'+i+' span').attr('data-acr', (parseInt(ui.value/3)) + '%');

  		// 		} else if ((thisDiv - i === 2) || (thisDiv - i === -2)){
  		// 			// Two Away
  		// 			// $('#'+i).slider({ value: ui.value/(i) });
  		// 			// $('#'+i+' span').attr('data-acr', (parseInt(ui.value/3)) + '%');
  		// 		} else if (thisDiv === i){
  		// 			// We're dragging this div

  		// 		}

  		// 		// $('#'+i).slider({ value: ui.value/(i) });
  		// 		// $('#'+i+' span').attr('data-acr', (parseInt(ui.value/(i+1)/3)) + '%');

  		// 	} else {

  				

  		// 	}
  		// }
		
	} 





});