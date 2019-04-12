import { AXIS_WIDTH } from '../config';
import { getMaxY, getMinY } from './utils';

// normalize the points for plotting on the canvas
export function normalizePoints(points, height, width) {
	const originX = AXIS_WIDTH;
	const originY = height;
	const maxY = Math.ceil(getMaxY(points));
	const minY = Math.floor(getMinY(points));

	const xAxisStep = (width - AXIS_WIDTH) / points.length;
	const yAxisStep = (height - AXIS_WIDTH) / (maxY - minY);

	return points.map((pt, i) => {
		return {
			...pt,
			x: (xAxisStep * i) + AXIS_WIDTH,
			y: (height - AXIS_WIDTH) - (yAxisStep * (pt.closeAvg - minY))
		};
	});
}
