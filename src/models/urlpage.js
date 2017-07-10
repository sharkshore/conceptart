//原画设计网站
//UI设计网站
//前端学习网站
//Java网站
//Python网站
//大数据网站
export default {
  namespace: 'urlPage',
  state: {
    urls: {
      //教育网站
      education: {
        name: '教育网站',
        list: [
          {
            name: '火星时代培训',
            url: 'http://edu.hxsd.com/edunew/',
          },
          {
            name: '奇迹曼特',
            url: 'http://www.qijixue.com/'
          },
          {
            name: 'CG王',
            url: 'http://www.cgwang.com/'
          }
        ]
      },
      //素材
      material: {
        name: '素材网站',
        list: [
          {
            name: '花瓣网',
            url: 'http://huaban.com/'
          },
          {
            name: 'http://cgwall.cn/',
            url: 'http://cgwall.cn/'
          },
          {
            name: '原画联盟',
            url: 'http://www.yuanhuacc.com/'
          }
        ]

      },
      //论坛
      fortum: {
        name: '论坛',
        list:[]
      },
      //知名博客
      blog: {
        name: '知名博客',
        list: [
          {
            name: 'Nick Carver',
            url: 'https://www.artstation.com/artist/nickcarver',
          }
        ]
      }
    }
  },
  reducers: {},
  effects: {},
  subscriptions: {},
};
