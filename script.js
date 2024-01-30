document.addEventListener('DOMContentLoaded', () => {
	// Таймер
	const loveDate = new Date('Feb 2 2023 17:57:00');

	const timerValues = {
		years: document.querySelector('.timer-year .timer-value'),
		days: document.querySelector('.timer-day .timer-value'),
		hours: document.querySelector('.timer-hours .timer-value'),
		minutes: document.querySelector('.timer-minutes .timer-value'),
		seconds: document.querySelector('.timer-seconds .timer-value'),
		secondsAll: document.querySelector('.timer__seconds-container .timer-value'),
	};

	const timerTexts = {
		years: document.querySelector('.timer-year .timer__year-text'),
		days: document.querySelector('.timer-day .timer-text'),
		hours: document.querySelector('.timer-hours .timer-text'),
		minutes: document.querySelector('.timer-minutes .timer-text'),
		seconds: document.querySelector('.timer-seconds .timer-text'),
	};

	function declOfNum(number, titles) {
		const cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
		];
	}

	const updateTimerDisplay = (value, element) => {
		element.textContent = value < 10 ? '0' + value : value;
	};

	const updateYearDisplay = (value, element) => {
		element.textContent = value;
	};

	const timeCount = () => {
		const now = new Date();
		const timePass = now - loveDate;

		const years = Math.floor(timePass / 1000 / 60 / 60 / 24 / 365);
		// console.log(years);
		const days = Math.floor(timePass / 1000 / 60 / 60 / 24);
		const hours = Math.floor(timePass / 1000 / 60 / 60) % 24;
		const minutes = Math.floor(timePass / 1000 / 60) % 60;
		const seconds = Math.floor(timePass / 1000) % 60;
		const secondsAll = Math.floor(timePass / 1000);

		updateTimerDisplay(days, timerValues.days);
		updateTimerDisplay(hours, timerValues.hours);
		updateTimerDisplay(minutes, timerValues.minutes);
		updateTimerDisplay(seconds, timerValues.seconds);
		timerValues.secondsAll.textContent = secondsAll.toLocaleString();
		updateYearDisplay(years, timerValues.years);

		timerTexts.days.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
		timerTexts.hours.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
		timerTexts.minutes.textContent = declOfNum(minutes, ['Минуту', 'Минуты', 'Минут']);
		timerTexts.seconds.textContent = declOfNum(seconds, ['Секунду', 'Секунды', 'Секунд']);
		timerTexts.years.textContent = declOfNum(years, ['Год', 'Года', 'Лет']);
	};

	timeCount();
	setInterval(timeCount, 1000);

	// Свайпер
	const swiper = new Swiper('.swiper', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
	});
});
