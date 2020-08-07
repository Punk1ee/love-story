const stages = [
  {
    content: [
      { 
        name: 'Album', source: {
          out_front: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/1.jpg',
          out_back: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/2.jpg',
          out_left: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/3.jpg',
          out_right: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/4.jpg',
          out_top: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/5.jpg',
          out_bottom: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/6.jpg',
          in_front: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/7.jpg',
          in_back: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/8.jpg',
          in_left: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/9.jpg',
          in_right: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/10.jpg',
          in_top: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/11.jpg',
          in_bottom: 'https://punk1ee.oss-cn-beijing.aliyuncs.com/album/12.jpg'
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
  },
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
    style: { background: 'linear-gradient(to bottom, #010A10 20%, #59230B 40%, #2F1107 100%)' }
  }
]

export default stages