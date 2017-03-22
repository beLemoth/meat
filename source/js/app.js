$( document ).ready(function() {
	
	var $preloader = $('.preloader'),
        $load = $preloader.find('.load');
    $load.fadeOut();
    $preloader.delay(500).fadeOut();

	$('.carousel').carousel({
		interval: 5000,
		pause: "hover"
	});

	$('#myModal').modal();
});