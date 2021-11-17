jQuery(window).on("scroll touchmove", function () {
	$('.header').toggleClass('header-tiny', $(document).scrollTop() > 0);
});


$(document).ready(function (e) {
	$('.navbar-toggler').on('click', function () {
		$('.navbar').toggleClass('in');
		$('html').toggleClass('no-scroll');
		$('.navbar-collapse').toggleClass('show');
		$(this).toggleClass('open');
	});

	$('.navbar ul li a').on('click', function () {
		$('.navbar-toggler').removeClass('open');
		$('body,html').removeClass('no-scroll');
		$('.navbar-collapse').removeClass('show');
	});
	$(".navbar-collapse").on('click', function (e) {
		e.stopPropagation();
	});

	$('.navbar ul li:has(ul)').addClass('dropdown');

	$('.navbar-collapse').on('click', '.dropdown a', function () {
		if ($(this).width() < 800) {
			if ($(this).next('ul').is(':visible')) {
				$(this).next('ul').slideUp('fast');
				$(this).removeClass('active');
			} else {
				$(this).closest('ul').children('.dropdown').children('.active').next('ul').slideUp('fast');
				$(this).closest('ul').children('.dropdown').children('.active').removeClass('active');
				$(this).next().slideToggle('fast');
				$(this).addClass('active');
			}
		}
	});

	$(".common-heading,.split-last-word").html(function () {
		var text = $(this).text().trim().split(" ");
		var last = text.pop();
		return text.join(" ") + (text.length > 0 ? " <span>" + last + "</span>" : last);
	});


});

function showModal(id) {
	$("#" + id).fadeIn(200);
	$('body').toggleClass('no-scroll');
}
function hideModal(id) {
	$("#" + id).fadeOut(400);
	$('body').toggleClass('no-scroll');
}

$('a[href^="#"]').click(function (e) {
	if ($(this.hash).length > 0) {
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 800);
		return false;
		e.preventDefault();
	}
});

