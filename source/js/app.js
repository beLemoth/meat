$( document ).ready(function() {
	
	var $preloader = $('.preloader'),
        $load = $preloader.find('.load');
    $load.fadeOut();
    $preloader.delay(500).fadeOut();

	$('.carousel').carousel({
		interval: 5000,
		pause: "hover"
	});

    $('#salami').addClass('active');

    $('.catalog__header_list-item').on('click', function () {
        $('.catalog__header_list-item').removeClass('active');
        var selectedGroup = $(this).addClass('active').prop('id');
        $('.catalog-item').css('display','none');
        $('.'+selectedGroup+'-group').css('display','block');
    })

	$('#myModal').modal();

    if ($('div').is('#map')) {
        var map = new GMaps({
            el: '#map',
            lat: 54.9362137,
            lng: 31.0938659,
            width: '100%',
            height: '500px',
            zoom: 16
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