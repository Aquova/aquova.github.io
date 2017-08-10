$(document).ready(function() {
	var $input = $("#eccoEnter");
	$input.on('change', function() {
		var input = this.value;
		alert(input);
	}).change();
});