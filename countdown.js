function daysUntilNextEvent(baseDate, frequency) {
	var currentDate = new Date();
	var nextEvent = baseDate;

	if (currentDate > baseDate) {
		while (nextEvent <= currentDate) {
			nextEvent.setDate(nextEvent.getDate() + frequency);
		}
	}

	diffc = currentDate.getTime() - nextEvent.getTime();
	days = Math.ceil(Math.abs(diffc/(1000*60*60*24)));

	if (days == frequency) {
		return 'Today!'
	} else if (days == 1) {
		return 'Tomorrow.'
	} else {
		return days.toString() + ' days.';
	}
}

function updateCountdown() {
	Array.prototype.forEach.call(document.getElementsByClassName('countdown'), function(countdown, i) {
		var nextFreeze = daysUntilNextEvent(new Date(countdown.dataset.baseFreezeDate), parseInt(countdown.dataset.releaseFrequency));
		var nextRelease = daysUntilNextEvent(new Date(countdown.dataset.baseReleaseDate), parseInt(countdown.dataset.releaseFrequency));

		countdown.getElementsByClassName('days_to_freeze_count')[0].innerHTML = nextFreeze;
		countdown.getElementsByClassName('days_to_release_count')[0].innerHTML = nextRelease;
	});
}

var url = Qurl.create();

var appCounter = 0;

for (i = 0; i < 10; i++) { 
    var appName = url.query('app_name[' + i + ']');
    var releaseFrequency = url.query('release_frequency[' + i + ']');
    var baseFreezeDate = url.query('base_freeze_date[' + i + ']');
    var baseReleaseDate = url.query('base_release_date[' + i + ']');

    if (appName && releaseFrequency && baseFreezeDate && baseReleaseDate) {
    	var template = document.getElementById('countdown_template').innerHTML;

		var output = Mustache.render(template, {
			appName: appName,
			releaseFrequency: releaseFrequency,
			baseFreezeDate: baseFreezeDate,
			baseReleaseDate: baseReleaseDate
		});

		var countdownContainer = document.getElementById('countdown_container')
		countdownContainer.innerHTML = countdownContainer.innerHTML + output;

		appCounter++;
    }
}

Array.prototype.forEach.call(document.getElementsByClassName('countdown'), function(countdown, i) {
	countdown.style.height = Math.floor(90/appCounter).toString() + '%';
});

updateCountdown();
setInterval(updateCountdown, 1000*60);