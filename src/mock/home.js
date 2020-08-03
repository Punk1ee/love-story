export default {
  getIssues: () => {
    const data = []
    for (let i = 0; i < 10; i++) {
      const time = new Date().getTime() - i * 1000000
      data.push({
        avatarSrc: 'https://img.yzcdn.cn/vant/cat.jpeg',
        username: 'punklee',
        text: '清风烈酒孤独为友清风烈酒孤独为友清风烈酒孤独为友清风烈酒孤独为友',
        time,
        imgs: [
          { id: '0', src: 'https://img.yzcdn.cn/vant/cat.jpeg' }, { id: '1', src: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { id: '2', src: 'https://img.yzcdn.cn/vant/cat.jpeg' }, { id: '3', src: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { id: '4', src: 'https://img.yzcdn.cn/vant/cat.jpeg' }, { id: '5', src: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { id: '6', src: 'https://img.yzcdn.cn/vant/cat.jpeg' }, { id: '7', src: 'https://img.yzcdn.cn/vant/cat.jpeg' },
          { id: '8', src: 'https://img.yzcdn.cn/vant/cat.jpeg' }
        ]
      })
    }
    return {
      code: 1,
      data,
      message: '操作成功'
    }
  }
}
