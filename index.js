const {
	typeCheck,
	getDate,
	getDateOfOtherTimezone,
	calculateTimeDiff,
	getTimeOfZone,
} = require("./src/helpers");

function convertTimeToTargetTimeZone(time, timezone) {
	typeCheck(time);
	const date = getDate(time);
	const convertedDate = getDateOfOtherTimezone(time, timezone);
	const timediff = calculateTimeDiff(date, convertedDate);
	const timeOfOtherTimezone = getTimeOfZone(date, timediff);
	return timeOfOtherTimezone.toISOString();
}

module.exports = { convertTimeToTargetTimeZone };
