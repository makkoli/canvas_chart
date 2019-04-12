import { data } from './data';
import { convertData } from './utils/convertData';
import { normalizePoints } from './draw/normalizePoints';
import { draw, drawLinesToPoint } from './draw/draw';
import { CIRCLE_RADIUS, } from './config';

function onCanvasClick(ctx, points, height, width, e) {
	const rect = e.target.getBoundingClientRect();
	const x = e.clientX - rect.left;
	const y = e.clientY - rect.top;

	for (let pt of points) {
		if (x < pt.x + CIRCLE_RADIUS
			&& x > pt.x - CIRCLE_RADIUS
			&& y < pt.y + CIRCLE_RADIUS
			&& y > pt.y - CIRCLE_RADIUS) {

			ctx.clearRect(0, 0, width, height);
			draw(ctx, points, height, width);
			drawLinesToPoint(ctx, pt, height);

			tip.innerText = `
				${new Date(pt.date).toDateString()}\n
				${pt.closeAvg}
			`;

			break;
		}
	}
}

(function() {
	const canvas = document.getElementById('canvas');
	const tip = document.getElementById('tip');
	const ctx = canvas.getContext('2d');

	let { height, width } = window.getComputedStyle(canvas);
	height = parseInt(height, 10);
	width = parseInt(width, 10);

	let points = convertData(data);
	points = normalizePoints(points, height, width);
	draw(ctx, points, height, width);

	canvas.addEventListener(
		'click',
		onCanvasClick.bind(this, ctx, points, height, width)
	);
})();
