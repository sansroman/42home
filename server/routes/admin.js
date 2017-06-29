var express = require('express');
var router = express.Router();
var Oauth = require('../middleware/Dao').Oauth


router
	.get('/', (req, res, next) => {
		console.log(req.session.Oauth)
	if (req.session.Oauth == "2")
		res.render('admin');
	else
		res.render('login');	
	})
	.post('/', Oauth)












router.get('/data/test', (req, res, next) => {
		var random = [];
		console.log(Math.random)
		random.push(parseInt(Math.random() * 20));
		random.push(parseInt(Math.random() * 20));
		random.push(parseInt(Math.random() * 20));
		random.push(parseInt(Math.random() * 20));
		console.log(random);

		var data = {
				title: {
						text: '拉取到的demo',
				},
				tooltip: {},
				legend: {},
				xAxis: ['网站', 'APP', '微信', '微博'],
				series: [{
						name: '数量',
						type: 'bar',
						data: random
				}]
		}
		res.json(data)
})
router.get('/data/line', (req, res, next) => {
		res.json({
				title: {
						text: '动态数据 + 时间坐标轴'
				},
				tooltip: {
						trigger: 'axis',
						formatter: function (params) {
								params = params[0];
								var date = new Date(params.name);
								return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
						},
						axisPointer: {
								animation: false
						}
				},
				xAxis: {
						type: 'time',
						splitLine: {
								show: false
						}
				},
				yAxis: {
						type: 'value',
						boundaryGap: [0, '100%'],
						splitLine: {
								show: false
						}
				},
				series: [{
						name: '模拟数据',
						type: 'line',
						showSymbol: false,
						hoverAnimation: false,
						data: [10000, 10000]
				}]
		})
})

var data = []

var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;

function randomData() {
		now = new Date(+now + oneDay);
		value = value + Math.random() * 21 - 10;
		return {
				name: now.toString(),
				value: [
						[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
						Math.round(value)
				]
		}
}
for (var i = 0; i < 1000; i++) {
		data.push(randomData());
}

router.get('/data/line/update', (req, res, next) => {
		for (var i = 0; i < 5; i++) {
				data.shift();
				data.push(randomData());
		}
		var option = {
				series: [{
						data: data
				}]
		}
		res.json(option);
})
module.exports = router;