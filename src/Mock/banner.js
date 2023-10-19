const Mock = require('mockjs');
export default [
	// 广告信息
	{
		url: '/gg',
		type: 'get',
		response: () => {
			return {
				code: 20000,
				data: [{
						id: 1,
						name: 'gg1.png',
						url: require('../assets/img/gg1.png'),
						href: '#'
					},
					{
						id: 2,
						name: 'gg2.png',
						url: require('../assets/img/gg2.png'),
						href: '#'
					},
					{
						id: 3,
						name: 'gg3.png',
						url: require('../assets/img/gg3.png'),
						href: '#'
					},
					{
						id: 4,
						name: 'gg4.png',
						url: require('../assets/img/gg4.png'),
						href: '#'
					},
					{
						id: 5,
						name: 'gg5.png',
						url: require('../assets/img/gg5.png'),
						href: '#'
					},
					{
						id: 6,
						name: 'gg6.png',
						url: require('../assets/img/gg6.png'),
						href: '#'
					}
				]
			}
		}
	}
]
