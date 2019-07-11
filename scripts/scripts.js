// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({animated: 'fade', placement: 'top', html: true}); 
	$("img.lazyload").lazyload();

	$(function() {
		$('.lazy-image').lazy();
	});

});	

function makeTimer() {


		var endTime = new Date('2014-02-18T15:00:48'.replace(/\s/, 'T')+'Z')	
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Days</span>");
			$(".hours").html(hours + ":" + "<span>Hr</span>");
			$(".minutes").html(minutes + ":" + "<span>Min</span>");
			$(".seconds").html(seconds + "<span>Sec</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);