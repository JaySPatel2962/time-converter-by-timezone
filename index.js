const {
	typeCheck,
	getDate,
	getDateOfOtherTimezone,
	calculateTimeDiff,
	getTimeOfZone,
} = require("./src/helpers");

function convertTimeToTargetTimezone(date, targetTimezone) {
	typeCheck(date);
	if (!targetTimezone) throw new Error("targetTimezone is required");
	const dateInstance = getDate(date);
	const convertedDate = getDateOfOtherTimezone(dateInstance, targetTimezone);
	const timediff = calculateTimeDiff(dateInstance, convertedDate);
	const timeOfOtherTimezone = getTimeOfZone(dateInstance, timediff);
	return timeOfOtherTimezone.toISOString();
}

function oneTimezoneToTargetTimezone(date, timezone, targetTimezone) {
	typeCheck(date);
	if (!timezone) throw new Error("timezone is required");
	if (!targetTimezone) throw new Error("targetTimezone is required");

	const dateInstance = getDate(date);
	const time1 = getDateOfOtherTimezone(dateInstance, timezone);
	const time2 = getDateOfOtherTimezone(dateInstance, targetTimezone);
	const timediff = calculateTimeDiff(time1, time2);
	const timeOfOtherTimezone = getTimeOfZone(dateInstance, timediff);
	return timeOfOtherTimezone.toISOString();
}

module.exports = { convertTimeToTargetTimezone, oneTimezoneToTargetTimezone };
