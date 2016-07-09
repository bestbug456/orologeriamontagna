$(document).ready(	

	function(){

		responsive();
 			window.onresize = function(event) {
 			 responsive();
 		}


		$('#container').delay(500).fadeTo('slow',1)
		$("#home").click(
			function(){
				$('#ripTex').fadeOut('slow');
				$('#conTex').fadeOut('slow');
				$('#homeTex').delay(500).fadeIn('slow');

			})
		$("#rip").click(
			function(){
				$('#homeTex').fadeOut('slow');
				$('#conTex').fadeOut('slow');
				$('#ripTex').delay(500).fadeIn('slow');
			})
		$("#contatti").click(
			function(){
				$('#ripTex').fadeOut('slow');
				$('#homeTex').fadeOut('slow');
				$('#conTex').delay(500).fadeIn('slow');
			})
		
	}

);

function responsive(){
	var width = $(document).width();
	if(width < 1230){
		$("#imgLogo").width("100%");
		$('.testo').css('width', '100%');
		$("#ripTex").css('text-algin','center');
		$(".imgRivenditore").css('width','90%');
		$(".cella").css('width','100%');
		$(".cella").css('text-algin','left');
		$('#rip').prepend('<br />');
		$('#contatti').prepend('<br />');
		$('.sep').hide();
	}else{
		$('#rip').prepend(' - ');
		$('#contatti').prepend(' - ');
	}

}