import { AXIS_WIDTH, AXIS_LINE_WIDTH, TEXT_COLOR, TICK_LENGTH } from '../config';
import { getMaxY, getMinY, getMaxDate, getMinDate } from './utils';

export function drawAxes(ctx, pts, height, width) {
	const max = Math.ceil(getMaxY(pts));
	const min = Math.floor(getMinY(pts));

	ctx.lineWidth = AXIS_LINE_WIDTH;
	ctx.fillStyle = TEXT_COLOR;
	ctx.strokeStyle = TEXT_COLOR;

	const yAxisStep = (height - AXIS_WIDTH) / (max - min);
	const xAxisStep = (width - AXIS_WIDTH) / pts.length;

	drawYAxis(ctx, yAxisStep, max, min, height, width);
	drawXAxis(ctx, xAxisStep, pts, height, width);
}

function drawYAxis(ctx, step, max, min, height, width) {
	drawYAxisLabel(ctx, height, width);
	let i = 0;

	while ((Math.ceil(max) - i) > Math.floor(min)) {
		// draw price
		ctx.beginPath();
		ctx.fillText(
			Math.ceil(max) - i,
			AXIS_WIDTH - (AXIS_WIDTH / 2),
			step * i,
			AXIS_WIDTH
		);

		// draw tick
		ctx.beginPath();
		ctx.moveTo(AXIS_WIDTH, step * i);
		ctx.lineTo((TICK_LENGTH - AXIS_WIDTH) * (-1), step * i);
		ctx.stroke();

		i++;
	}

	ctx.moveTo(AXIS_WIDTH, 0);
	ctx.lineTo(AXIS_WIDTH, height - AXIS_WIDTH);
	ctx.stroke();
}

function drawYAxisLabel(ctx, height, width) {
	const x = AXIS_WIDTH + AXIS_LINE_WIDTH;
	const y = 0;

	ctx.beginPath();
	ctx.fillText('Closing Average Price', x, y);
}

function drawXAxis(ctx, step, pts, height, width) {
	drawXAxisLabel(ctx, height, width);

	let currentMonth;

	pts.forEach((pt, i) => {
		if (currentMonth !== new Date(pt.date).getMonth()) {
			const date = new Date(pt.date);
			currentMonth = date.getMonth();

			ctx.beginPath();
			ctx.fillText(
				(date.getMonth() + 1) + ' / ' + date.getFullYear(),
				AXIS_WIDTH + (step * i),
				height - AXIS_WIDTH + AXIS_LINE_WIDTH
			);
		}
	});

	ctx.moveTo(AXIS_WIDTH, height - AXIS_WIDTH);
	ctx.lineTo(width, height - AXIS_WIDTH);
	ctx.stroke();
}

function drawXAxisLabel(ctx, height, width) {
	const x = width / 2;
	const y = height - (AXIS_WIDTH / 2);

	ctx.beginPath();
	ctx.fillText('Date', x, y);
}
