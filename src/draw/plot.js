import {
	AXIS_WIDTH,
	CIRCLE_RADIUS,
	FILL_COLOR,
	LINE_PLOT_WIDTH
} from '../config';

export function plot(ctx, points) {
	let prevX, prevY;
	ctx.lineWidth = LINE_PLOT_WIDTH;
	ctx.strokeStyle = FILL_COLOR;
	ctx.fillStyle = FILL_COLOR;

	points.forEach((pt, i) => {
		// plot lines after first pt is plotted
		if (i > 0) {
			ctx.beginPath();
			ctx.moveTo(prevX, prevY);
			ctx.lineTo(pt.x, pt.y);
			ctx.stroke();
		}

		ctx.beginPath();
		ctx.arc(pt.x, pt.y, CIRCLE_RADIUS, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		prevX = pt.x;
		prevY = pt.y;
	});
}
