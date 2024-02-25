function typeCheck(t) {
	if (typeof t !== "string" && typeof t !== "number" && !(t instanceof Date)) {
		throw new TypeError("time must be a string / number / instance of Date");
	}
}

function getDate(d) {
	return new Date(d);
}

function getDateOfOtherTimezone(d, zone) {
	return new Date(d.toLocaleString("en-US", { timeZone: zone }));
}

function calculateTimeDiff(d, zTime) {
	return d.getTime() - zTime.getTime();
}

function getTimeOfZone(d, diff) {
	const time = d.getTime() + diff;
	return new Date(time);
}

module.exports = {
	typeCheck,
	getDate,
	getDateOfOtherTimezone,
	calculateTimeDiff,
	getTimeOfZone,
};
