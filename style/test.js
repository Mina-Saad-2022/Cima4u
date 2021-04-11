$('input[type="checkbox"]').click(function(){
	if($(this).prop("checked") == true){
		$('.careful').fadeIn().log("Checkbox is checked.");
	}
	else if($(this).prop("checked") == false){
		$('.careful').fadeOut().log("Checkbox is unchecked.");
}})





