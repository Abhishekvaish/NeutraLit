$('document').ready(function(){
    // jquery goes here
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.tap-target').tapTarget('open');
    // $('.tap-target').tapTarget('close');


});

(function($) {
  	$.fn.visible = function(partial) {
	var $t            = $(this),
		$w            = $(window),
		viewTop       = $w.scrollTop(),
		viewBottom    = viewTop + $w.height(),
		_top          = $t.offset().top,
		_bottom       = _top + $t.height(),
		compareTop    = partial === true ? _bottom : _top,
		compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);

$(window).scroll(function(event) {
  
  $(".osa").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("visible"); 
    } 
  });
  
});