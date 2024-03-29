# time-converter-by-timezone

Convert Timezone is a lightweight npm package that simplifies the process of converting time from one timezone to another. Whether you need to convert from Current timezone time to Australia/Perth or any other timezone, this package handles the conversion seamlessly. Simply input the current timezone time and the target timezone, and Convert Timezone will provide the equivalent time in the desired timezone, making timezone conversions hassle-free.

### Install package using npm

```bash
npm i time-converter-by-timezone
```

### Install package using yarn

```bash
yarn add time-converter-by-timezone
```

## Usage

Convert current timezone date to target timezone date

```javascript
// Note: Current timezone will pick automatically

import { convertTimeToTargetTimezone } from "time-converter-by-timezone";

const time = convertTimeToTargetTimezone(
	"02/25/2024, 11:00:00 AM", // You can pass time as you want in any date format
	"Australia/Perth" // Target timezone
);
console.log("time: ", time);
// time: 2024-02-25T03:00:00.000Z
console.log("Local string: ", new Date(time).toLocaleString());
// Local string: 25/2/2024, 8:30:00 am

// Australia/Perth timezone is 2:30 hours ahead of Asia/Calcutta timezone
// Hence when 8:30 AM Asia/Calcutta equals to 11 AM Australia/Perth time
```

Convert date to one timezone to target timezone date. You can get date/time that refers target timezone

```javascript
import { oneTimezoneToTargetTimezone } from "time-converter-by-timezone";

const time = oneTimezoneToTargetTimezone(
	"02/25/2024, 11:00:00 AM", // You can pass time as you want in any date format
	"Asia/Calcutta", // You can mention your timezone
	"Australia/Perth" // Target timezone
);
console.log("time = ", time);
// time: 2024-02-25T03:00:00.000Z
console.log("Local string = ", new Date(time).toLocaleString());
// Local string: 25/2/2024, 8:30:00 am

// Australia/Perth timezone is 2:30 hours ahead of Asia/Calcutta timezone
// Hence when 8:30 AM Asia/Calcutta equals to 11 AM Australia/Perth time
```
