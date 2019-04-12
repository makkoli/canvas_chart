const fs = require('fs');
const csv = require('fast-csv');

const dataList = [];
const DATE_COL = 0;
const CLOSE_COL = 4;

csv.fromPath('./I(1).csv')
	.on('data', function(data) {
		console.log('data', data);
		dataList.push({
			date: data[DATE_COL],
			close: Number(data[CLOSE_COL])
		});
	})
	.on('end', function() {
		console.log(dataList);
	});
