# time-converter-by-timezone

Convert Timezone is a lightweight npm package that simplifies the process of converting time from current timezone to another. Whether you need to convert from Current timezone time to Australia/Perth or any other timezone, this package handles the conversion seamlessly. Simply input the current timezone time and the target timezone, and Convert Timezone will provide the equivalent time in the desired timezone, making timezone conversions hassle-free.

### Install package using npm

```bash
npm i time-converter-by-timezone
```

### Install package using yarn

```bash
yarn add time-converter-by-timezone
```

## Usage

```javascript
import { convertTimeToTargetTimeZone } from "time-converter-by-timezone";

const time = convertTimeToTargetTimeZone(
	"02/25/2024, 11:00:00 AM", // You can pass time as you want in any date format
	"Australia/Perth" // Target timezone
);
console.log("time: ", time);
// time: 2024-02-25T03:00:00.000Z
console.log("Local string: ", new Date(time).toLocaleString());
// Local string: 2/25/2024, 8:30:00 AM

// Note: Current timezone is Asia/Calcutta and it will pick automatic
```
