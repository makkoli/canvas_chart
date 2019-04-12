import {
	AXIS_WIDTH,
	AXIS_LINE_WIDTH,
	CIRCLE_RADIUS,
	FONT,
	HIGHLIGHT_LINE_WIDTH,
	TEXT_BASELINE,
	TEXT_COLOR
} from '../config';
import { drawAxes } from './drawAxes';
import { plot } from './plot';

export function draw(ctx, points, height, width) {

	// set up canvas
	ctx.font = FONT;
	ctx.textBaseline = TEXT_BASELINE;

	drawAxes(ctx, points, height, width);
	plot(ctx, points);
}

export function drawLinesToPoint(ctx, pt, height) {
	// draw the lines pointing to the selected point
	ctx.strokeStyle = TEXT_COLOR;
	ctx.lineWidth = AXIS_LINE_WIDTH;

	ctx.beginPath();
	ctx.moveTo(pt.x, pt.y);
	ctx.lineTo(AXIS_WIDTH, pt.y);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(pt.x, pt.y);
	ctx.lineTo(pt.x, height - AXIS_WIDTH);
	ctx.stroke();

	ctx.beginPath();
	ctx.lineWidth = HIGHLIGHT_LINE_WIDTH;
	ctx.arc(pt.x, pt.y, CIRCLE_RADIUS, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
}
