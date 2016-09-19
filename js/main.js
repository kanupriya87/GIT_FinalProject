var sf = {
	city: 'San Francisco',
	location: '255 Bush Street',
	day: 'Monday & Wednesday',
	time: '5:30pm to 6:30pm'
}

var sacramento = {
	city: 'Sacramento',
	location: '994 Denny Lane',
	day: 'Friday',
	time: '4:30pm to 5:30pm'
}

var fremont = {
	city: 'Fremont',
	location: '103 Faber Street',
	day: 'Tuesday & Thursday',
	time: '5:30pm to 6:30pm'
}

var mountain = {
	city: 'Mountain View',
	location: '32 Cherry Lane',
	day: 'Friday & Saturday',
	time: '8:30am to 9:30am'
}

var wc = {
	city: 'Walnut Creek',
	location: '452 Locust Street',
	day: 'Saturday & Sunday',
	time: '10:30pm to 11:30pm'
}

var dallas = {
	city: 'Dallas',
	location: '754 Garden Road',
	day: 'Monday & Wednesday',
	time: '5:30pm to 6:30pm'
}

var houston = {
	city: 'Houston',
	location: '118 Windsor Road',
	day: 'Tuesday & Thursday',
	time: '5:30pm to 6:30pm'
}

// When user clicks on li in .city-list
$('.city-list li').not('.state').on('click', function () {
    $('.information-container').html('');
    $('.information-container_1').html('');
	var cityName = $(this).data('city');

	var source   = $("#info-template").html();
	var template = Handlebars.compile(source);
	var context = window[cityName];
	var htmlToAdd = template(context);

	var informationContainer = $('.information-container');

	informationContainer.fadeOut(150, function () {
		informationContainer.html(htmlToAdd);
		informationContainer.fadeIn(300);
	});

	
});

$('.city-list_1 li').not('.state').on('click', function () {
    $('.information-container').html('');
    $('.information-container_1').html('');
	var cityName = $(this).data('city');

	var source   = $("#info-template").html();
	var template = Handlebars.compile(source);
	var context = window[cityName];
	var htmlToAdd = template(context);

	var informationContainer = $('.information-container_1');

	informationContainer.fadeOut(150, function () {
		informationContainer.html(htmlToAdd);
		informationContainer.fadeIn(300);
         console.log($('.information-container_1'));
	});

	
});

// Media Query//


$('.hamburger').on ('click', function() {
	$('#tabs').toggleClass('open');

});