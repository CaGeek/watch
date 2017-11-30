/*背景百度地图*/
var Chart = echarts.init(document.getElementById('backgroun'));
// myChart.showLoading() //加载中
var series = [
];
myOption = {
	bmap: {
		center: [113.60, 33.36],
		zoom: 6,
		roam: false, //是否开启鼠标缩放
		mapStyle: {
			styleJson: [{
				'featureType': 'land', //调整土地颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#00192E'
				}
			}, {
				'featureType': 'building', //调整建筑物颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#04406F'
				}
			}, {
				'featureType': 'building', //调整建筑物标签是否可视
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'highway', //调整高速道路是否可见
				'elementType': 'geometry',
				'stylers': {
					'color': '#fff',
					'visibility': 'off'
				}
			}, {
				'featureType': 'highway', //调整高速名字是否可视
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'arterial', //调整一些干道颜色
				'elementType': 'geometry',
				'stylers': {
					'color': '#003051'
				}
			}, {
				'featureType': 'arterial',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'green',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'water',
				'elementType': 'geometry',
				'stylers': {
					'color': '#002F47',
				}
			}, {
				'featureType': 'subway', //调整地铁颜色
				'elementType': 'geometry.stroke',
				'stylers': {
					'color': '#003051',
					'visibility': 'off'
				}
			}, {
				'featureType': 'subway',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'railway',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'railway',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'all', //调整所有的标签的边缘颜色
				'elementType': 'labels.text.stroke',
				'stylers': {
					'color': '#313131',
					'visibility': 'off'
				}
			}, {
				'featureType': 'all', //调整所有标签的填充颜色
				'elementType': 'labels.text.fill',
				'stylers': {
					'color': '#FFFFFF'
				}
			}, {
				'featureType': 'manmade',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'manmade',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'local',
				'elementType': 'geometry',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'local',
				'elementType': 'labels',
				'stylers': {
					'visibility': 'off'
				}
			}, {
				'featureType': 'boundary',
				'elementType': 'geometry',
				'stylers': {
					'color': '#8b8787',
					'weight': '0.5',
					'lightness': -29
				}
			}]
		}
	},
	series: series,
	animation: true
};
Chart.setOption(myOption);