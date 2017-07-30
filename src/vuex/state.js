
const state = {
  iPhone6S: {
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    style: [
      {color:'银色', url:'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png'},
      {color:'深空灰色', url:'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png'},
      {color:'金色', url:'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png'},
      {color:'玫瑰金色',url:'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'}
    ],
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    storage: [
      {type: '16GB', price: 5288},
      {type: '64GB', price: 6088},
      {type: '128GB', price: 6888}
    ]
  },
  cart: []
}

export default state