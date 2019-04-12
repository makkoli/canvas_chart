import { MOVING_AVG_DAYS } from '../config';

function toMoney(m) {
	return Number(m.toFixed(2));
}

export function convertData(data) {
	const convertedData = [];
	let sum = 0;

	data.forEach((d, i, arr) => {
		if (i + 1 < MOVING_AVG_DAYS) {
			sum += d.close;
			return;
		}

		// pop off the last day
		if (i >= MOVING_AVG_DAYS) {
			sum -= arr[i - MOVING_AVG_DAYS].close;
		}

		sum += d.close;

		convertedData.push({
			date: d.date,
			closeAvg: toMoney(sum / MOVING_AVG_DAYS)
		});
	});

	return convertedData;
}
