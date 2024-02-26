/**
 * Convert current timezone date to target timezone date
 * @param {string | Date | number} date 
 * @param {string} targetTimezone 
 * @returns {string}
*/
export declare function convertTimeToTargetTimezone(date: string | Date | number, targetTimezone: string): string;

/**
 * Convert date to one timezone to target timezone date
 * @param {string | Date | number} date 
 * @param {string} timezone
 * @param {string} targetTimezone 
 * @returns {string}
*/
export declare function oneTimezoneToTargetTimezone(
    date: string | Date | number,
    timezone: string,
    targetTimezone: string,
): string;
