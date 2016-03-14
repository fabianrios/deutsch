$(document).foundation();


$.each( $('table thead tr').children(), function( key, value ) {
	var pal = $(this).text();
	if (pal === "Präsens" || pal === "Indikativ"){
		// $('table thead tr th')[key-1].remove();
	}else{
		$(this).remove();
	}
});

// $.each( $('table tbody tr').children(), function( key, value ) {
// 	// console.log(key);
// 	if($(this).is("td") && $(this).text() === ""){
// 		console.log($(this));
// 	}
// });