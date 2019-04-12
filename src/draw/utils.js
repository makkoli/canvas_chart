
export function getMaxY(points) {
	let max = points[0].closeAvg;

	points.forEach(pt => {
		if (pt.closeAvg > max) {
			max = pt.closeAvg;
		}
	});

	return max;
}

export function getMinY(points) {
	let min = points[0].closeAvg;

	points.forEach(pt => {
		if (pt.closeAvg < min) {
			min = pt.closeAvg;
		}
	});

	return min;
}
