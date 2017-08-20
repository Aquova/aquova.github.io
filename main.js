$(document).ready(function(){
	$(window).scroll(function() {
		$(".slideanim").each(function(){
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass("slide");
			}
		});
	});

	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "fast");
		return false;
	});
})