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

    if ($('div').is('#map')) {
        var map = new GMaps({
            el: '#map',
            lat: 54.9362137,
            lng: 31.0938659,
            width: '100%',
            height: '500px',
            zoom: 18
        });

        map.addMarker({
            lat: 54.9362137,
            lng: 31.0938659,
            title: '"Рецепты бульбаша"',
            infoWindow: {
                content: '<p>г. Рудня, пер. 2-й Луговой, д. 23</p>'
            }
        });
    };

});