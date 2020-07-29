const stages = [
  {
    content: [
      { name: 'FlowStar' },
      { 
        name: 'Icons',
        source: '/static/imgs/moon.svg',
        number: 1,
        style: {
          width: '40px',
          height: '40px',
          // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
          position: {
            random: true,
            left: ['40%', '80%'],
            top: ['4%', '8%']
          },
          background: {
            size: '40px'
          },
          opacity: 0.8
        }
      },
      { 
        name: 'Icons',
        source: '/static/imgs/shine-star.svg',
        number: [8, 10],
        style: {
          width: '14px',
          height: '14px',
          // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
          position: {
            random: true,
            left: ['5%', '95%'],
            top: ['5%', '20%']
          },
          background: {
            size: '14px'
          },
          animation: {
            name: '_opacity',
            duration: '3s',
            delay: {
              rate: 0.2,
              val: '0s'
            },
            iterationCount: 'infinite'
          },
          opacity: 0.4
        }
      },
      { 
        name: 'Icons',
        source: '/static/imgs/lover.png',
        number: 1,
        style: {
          width: '90px',
          height: '110px',
          // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
          position: {
            random: false,
            left: 'center',
            bottom: '0'
          },
          background: {
            size: '100%'
          },
          opacity: 1
        }
      },
    ],
    style: { background: 'linear-gradient(to bottom, #010A10 20%, #59230B 50%, #2F1107 100%)' }
  },
  {
    content: [
      { 
        name: 'Album', source: {
          out_front: 'https://punklee.oss-cn-beijing.aliyuncs.com/1.jpg',
          out_back: 'https://punklee.oss-cn-beijing.aliyuncs.com/2.jpg',
          out_left: 'https://punklee.oss-cn-beijing.aliyuncs.com/3.jpg',
          out_right: 'https://punklee.oss-cn-beijing.aliyuncs.com/4.jpg',
          out_top: 'https://punklee.oss-cn-beijing.aliyuncs.com/5.jpg',
          out_bottom: 'https://punklee.oss-cn-beijing.aliyuncs.com/6.jpg',
          in_front: 'https://punklee.oss-cn-beijing.aliyuncs.com/7.jpg',
          in_back: 'https://punklee.oss-cn-beijing.aliyuncs.com/8.jpg',
          in_left: 'https://punklee.oss-cn-beijing.aliyuncs.com/9.jpg',
          in_right: 'https://punklee.oss-cn-beijing.aliyuncs.com/10.jpg',
          in_top: 'https://punklee.oss-cn-beijing.aliyuncs.com/11.jpg',
          in_bottom: 'https://punklee.oss-cn-beijing.aliyuncs.com/12.jpg'
        }
      },
      { 
        name: 'Icons',
        source: '/static/imgs/love.svg',
        number: 6,
        style: {
          width: '16px',
          height: '16px',
          // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
          position: {
            random: true,
            left: ['10%', '90%'],
            top: ['100%', '100%']
          },
          background: {
            size: '16px'
          },
          animation: {
            name: '_rise',
            duration: '8s',
            delay: {
              rate: 0.2,
              val: '0s'
            },
            iterationCount: 'infinite'
          },
          opacity: 0.5
        }
      },
      { 
        name: 'Icons',
        source: '/static/imgs/love.svg',
        number: 6,
        style: {
          width: '16px',
          height: '16px',
          // 如果位置随机，则left和top必须是两个值的数组；否则位置默认固定，固定时值为'center'的话则居中
          position: {
            random: true,
            left: ['10%', '90%'],
            top: ['80%', '90%']
          },
          background: {
            size: '16px'
          },
          animation: {
            name: '_rise',
            duration: '8s',
            delay: {
              rate: 0.2,
              val: '0s'
            },
            iterationCount: 'infinite'
          },
          opacity: 0.5
        }
      }
    ],
    style: { background: 'rgba(132, 175, 155, 0.5)' }
  }
]

export default stages