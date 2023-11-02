document.addEventListener('DOMContentLoaded', () => {
	const loveDate = new Date('Feb 2 2023 17:57:00');

	const daysValue = document.querySelector('.timer-day .timer-value');
	const hoursValue = document.querySelector('.timer-hours .timer-value');
	const minutesValue = document.querySelector('.timer-minutes .timer-value');
	const secondsValue = document.querySelector('.timer-seconds .timer-value');

	const daysText = document.querySelector('.timer-day .timer-text');
	const hoursText = document.querySelector('.timer-hours .timer-text');
	const minutesText = document.querySelector('.timer-minutes .timer-text');
	const secondsText = document.querySelector('.timer-seconds .timer-text');

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
	}

	const timeCount = () => {
		let now = new Date();
		let timePass = now - loveDate;

		let days = Math.floor(timePass / 1000 / 60 / 60 / 24);
		let hours = Math.floor(timePass / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(timePass / 1000 / 60) % 60;
		let seconds = Math.floor(timePass / 1000) % 60;

		daysValue.textContent = days < 10 ? '0' + days : days;
		hoursValue.textContent = hours < 10 ? '0' + hours : hours;
		minutesValue.textContent = minutes < 10 ? '0' + minutes : minutes;
		secondsValue.textContent = seconds < 10 ? '0' + seconds : seconds;

		daysText.textContent = declOfNum(days, ['День', 'Дня', 'Дней']);
		hoursText.textContent = declOfNum(hours, ['Час', 'Часа', 'Часов']);
		minutesText.textContent = declOfNum(minutes, ['Минуту', 'Минуты', 'Минут']);
		secondsText.textContent = declOfNum(seconds, ['Секунду', 'Секунды', 'Секунд']);
	};

	timeCount();

	setInterval(timeCount, 1000);
});
