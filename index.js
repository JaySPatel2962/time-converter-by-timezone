export const convertTimeToTargetTimeZone = (time, timezone) => {
	// Get the date in current time zone
	const date = new Date(time);

	// Create a temporary date object for the specified timezone
	const convertedDate = new Date(
		date.toLocaleString("en-US", { timeZone: timezone })
	);

	// calculate time diff
	const timediff = date.getTime() - convertedDate.getTime();

	const timezoneTime = date.getTime() + timediff;

	const timeOfOtherTimezone = new Date(timezoneTime);

	// return ISO string
	return timeOfOtherTimezone.toISOString();
};
