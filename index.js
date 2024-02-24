export const convertCurrentTimeToRelatedZone = (originalTime, timezone) => {
	// Get the current date in current time zone
	const currentDate = new Date(originalTime);
	// console.log("\n\n currentDate: ", currentDate.toLocaleString());
	// console.log("currentDate: ", currentDate.getTime());

	// Create a temporary date object for the specified timezone
	const tempDate = new Date(
		currentDate.toLocaleString("en-US", { timeZone: timezone })
	);
	// console.log("tempDate: ", tempDate.toLocaleString());
	// console.log("tempDate: ", tempDate.getTime());

	const timediff = currentDate.getTime() - tempDate.getTime();
	// console.log("timediff: ", timediff);

	const timezoneTime = currentDate.getTime() + timediff;
	// console.log("timezoneTime: ", timezoneTime);
	// console.log("timezoneTime: ", new Date(timezoneTime).toLocaleString());

	const currentZoneTimeOfOtherZone = new Date(timezoneTime);
	// console.log("currentZoneTimeOfOtherZone: ", currentZoneTimeOfOtherZone);

	return currentZoneTimeOfOtherZone.toISOString();
};

// convertCurrentTimeToRelatedZone(new Date().getTime(), "Asia/Calcutta");
