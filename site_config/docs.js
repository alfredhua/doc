export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '设计模式',
        children: [
          {
            title: '设计原则',
            opened: false,
            children: [
              {
                title: '单一职责',
                link: '/zh-cn/docs/1.设计模式/1.单一职责.html',
              }, {
                title: '开闭原则',
                link: '/zh-cn/docs/1.设计模式/2.开闭原则.html',
              }, {
                title: '接口隔离原则',
                link: '/zh-cn/docs/1.设计模式/3.接口隔离原则.html',
              }, {
                title: '工厂模式',
                link: '/zh-cn/docs/1.设计模式/4.工厂模式.html',
              }, {
                title: '单例模式',
                link: '/zh-cn/docs/1.设计模式/5.单例模式.html',
              }, {
                title: '原型模式',
                link: '/zh-cn/docs/1.设计模式/6.原型模式.html',
              }, {
                title: '代理模式',
                link: '/zh-cn/docs/1.设计模式/7.代理模式.html',
              }, {
                title: '策略模式',
                link: '/zh-cn/docs/1.设计模式/8.策略模式.html',
              }, {
                title: '委派模式和适配器模式',
                link: '/zh-cn/docs/1.设计模式/9.委派模式和适配器模式.html',
              }, {
                title: '装饰器模式',
                link: '/zh-cn/docs/1.设计模式/10.装饰器模式.html',
              }
            ],
          },
        ],
      },{
        title: 'JAVA',
        children: [
          {
            title: '基础',
            opened: false,
            children: [
              {
                title: 'HashMap',
                link: '/zh-cn/docs/2.java/基础/1.HashMap.html',
              },
            ],
          }
        ],
      },
    ],
    barText: '文档',
  },
};
