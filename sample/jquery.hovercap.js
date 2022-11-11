$(function() {
	$('.hover_image a').hover(
		function(){
			var caption = $(this).children('.caption_txt');
			caption.css('top', $(this).innerHeight() - caption.innerHeight());
		},
		function(){
			var caption = $(this).children('.caption_txt');
			caption.removeAttr('style');
		}
	);
});