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
                "title": "HashMap",
                "link": "/zh-cn/docs/2.java/基础/1.HashMap.html"
              },
              {
                "title": "integer",
                "link": "/zh-cn/docs/2.java/基础/2.integer.html"
              },
              {
                "title": "calculations",
                "link": "/zh-cn/docs/2.java/基础/3.calculations.html"
              },
              {
                "title": "LinkedHashMap",
                "link": "/zh-cn/docs/2.java/基础/4.LinkedHashMap.html"
              },
              {
                "title": "list",
                "link": "/zh-cn/docs/2.java/基础/5.list.html"
              },
              {
                "title": "reference",
                "link": "/zh-cn/docs/2.java/基础/6.reference.html"
              },
              {
                "title": "synchronized",
                "link": "/zh-cn/docs/2.java/基础/7.synchronized.html"
              },
              {
                "title": "volatile",
                "link": "/zh-cn/docs/2.java/基础/8.volatile.html"
              }
            ],
          },{
            title: 'JVM',
            opened: false,
            children: [
              {
                "title": "jvm类加载",
                "link": "/zh-cn/docs/2.java/jvm/1.jvm类加载.html"
              },
              {
                "title": "栈帧",
                "link": "/zh-cn/docs/2.java/jvm/2.栈帧.html"
              },
              {
                "title": "内存模型",
                "link": "/zh-cn/docs/2.java/jvm/3.内存模型.html"
              },
              {
                "title": "垃圾回收",
                "link": "/zh-cn/docs/2.java/jvm/4.垃圾回收.html"
              },
              {
                "title": "垃圾收集器",
                "link": "/zh-cn/docs/2.java/jvm/5.垃圾收集器.html"
              },
              {
                "title": "JVM参数",
                "link": "/zh-cn/docs/2.java/jvm/6.JVM参数.html"
              },
              {
                "title": "JVM常用命令",
                "link": "/zh-cn/docs/2.java/jvm/7.JVM常用命令.html"
              },
              {
                "title": "JVM常用工具",
                "link": "/zh-cn/docs/2.java/jvm/8.JVM常用工具.html"
              },
              {
                "title": "常见问题",
                "link": "/zh-cn/docs/2.java/jvm/9.常见问题.html"
              }
            ],
          },{
            title: '网络编程',
            opened: false,
            children: [ {
              "title": "Http",
              "link": "/zh-cn/docs/2.java/网络编程/1.Http.html"
            },
            {
              "title": "Socket",
              "link": "/zh-cn/docs/2.java/网络编程/2.Socket.html"
            }],
          },{
            title: '并发编程',
            opened: false,
            children: [
              {
                "title": "并发基本概念",
                "link": "/zh-cn/docs/2.java/并发/1.并发基本概念.html"
              },
              {
                "title": "并发级别",
                "link": "/zh-cn/docs/2.java/并发/2.并发级别.html"
              },
              {
                "title": "CountDownLatch",
                "link": "/zh-cn/docs/2.java/并发/3.CountDownLatch.html"
              },
              {
                "title": "CyclicBarrier",
                "link": "/zh-cn/docs/2.java/并发/4.CyclicBarrier.html"
              },
              {
                "title": "线程池",
                "link": "/zh-cn/docs/2.java/并发/5.线程池.html"
              },
              {
                "title": "原子类",
                "link": "/zh-cn/docs/2.java/并发/6.原子类.html"
              },
              {
                "title": "锁",
                "link": "/zh-cn/docs/2.java/并发/7.锁.html"
              }
            ],
          }
        ],
      },{
        title: '数据库',
        children: [
          {
            title: 'MySQL',
            opened: false,
            children: [
              {
                "title": "mysql安装与卸载",
                "link": "/zh-cn/docs/3.数据库/mysql/1.mysql安装与卸载.html"
              },
              {
                "title": "忘记和修改密码",
                "link": "/zh-cn/docs/3.数据库/mysql/2.忘记和修改密码.html"
              },
              {
                "title": "Mysql的基本语法",
                "link": "/zh-cn/docs/3.数据库/mysql/3.Mysql的基本语法.html"
              },
              {
                "title": "mysql索引",
                "link": "/zh-cn/docs/3.数据库/mysql/4.mysql索引.html"
              },
              {
                "title": "SQL的执行流程",
                "link": "/zh-cn/docs/3.数据库/mysql/5.SQL的执行流程.html"
              },
              {
                "title": "MySQL的存储结构",
                "link": "/zh-cn/docs/3.数据库/mysql/6.MySQL的存储结构.html"
              },
              {
                "title": "MySQL事务",
                "link": "/zh-cn/docs/3.数据库/mysql/7.MySQL事务.html"
              },
              {
                "title": "MySQL锁",
                "link": "/zh-cn/docs/3.数据库/mysql/8.MySQL锁.html"
              },
              {
                "title": "性能优化",
                "link": "/zh-cn/docs/3.数据库/mysql/9.性能优化.html"
              }
            ],
          },{
            title: 'ElasticSearch',
            opened: false,
            children: [
              {
                "title": "安装",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/1.安装.html"
              },
              {
                "title": "基本概念",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/2.基本概念.html"
              },
              {
                "title": "logstash导入数据",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/3.logstash导入数据.html"
              },
              {
                "title": "基本操作",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/4.基本操作.html"
              },
              {
                "title": "Index操作",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/5.Index操作.html"
              },
              {
                "title": "CRUD",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/6.CRUD.html"
              },
              {
                "title": "集群操作",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/7.集群操作.html"
              },
              {
                "title": "多字段特性及自定义Analyzer",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/8.多字段特性及自定义Analyzer.html"
              },
              {
                "title": "S_St",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/.DS_Stohtml"
              },
              {
                "title": "IndexTemplate",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/9.IndexTemplate.html"
              },
              {
                "title": ".聚合",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/10.聚合.html"
              },
              {
                "title": ".Term和全文本查询",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/11.Term和全文本查询.html"
              },
              {
                "title": ".错误",
                "link": "/zh-cn/docs/3.数据库/elasticsearch/12.错误.html"
              }
            ],
          },{
            title: 'ClickHouse',
            opened: false,
            children:[
              {
                "title": "介绍",
                "link": "/zh-cn/docs/3.数据库/clickhouse/1.介绍.html"
              },
              {
                "title": "安装教程",
                "link": "/zh-cn/docs/3.数据库/clickhouse/2.安装教程.html"
              },
              {
                "title": "JAVA接入",
                "link": "/zh-cn/docs/3.数据库/clickhouse/3.JAVA接入.html"
              },
              {
                "title": "SQL语法",
                "link": "/zh-cn/docs/3.数据库/clickhouse/4.SQL语法.html"
              },
              {
                "title": "Mysql迁移",
                "link": "/zh-cn/docs/3.数据库/clickhouse/5.Mysql迁移.html"
              },
              {
                "title": "引擎engine",
                "link": "/zh-cn/docs/3.数据库/clickhouse/5.引擎engine.html"
              },
              {
                "title": "HDFS",
                "link": "/zh-cn/docs/3.数据库/clickhouse/6.HDFS.html"
              }
            ],
          }
        ],
      },{
        title: 'MQ',
        children: [
          {
            title: 'RabbitMQ',
            opened: false,
            children: [
              {
                "title": "安装",
                "link": "/zh-cn/docs/4.mq/rabbitmq/1.安装.html"
              },
              {
                "title": "消息模式",
                "link": "/zh-cn/docs/4.mq/rabbitmq/2.消息模式.html"
              },
              {
                "title": "基本操作",
                "link": "/zh-cn/docs/4.mq/rabbitmq/3.基本操作.html"
              },
              {
                "title": "消息可靠性投递",
                "link": "/zh-cn/docs/4.mq/rabbitmq/4.消息可靠性投递.html"
              },
              {
                "title": "重复消费",
                "link": "/zh-cn/docs/4.mq/rabbitmq/5.重复消费.html"
              },
              {
                "title": "消息丢失问题",
                "link": "/zh-cn/docs/4.mq/rabbitmq/6.消息丢失问题.html"
              },
              {
                "title": "高可用",
                "link": "/zh-cn/docs/4.mq/rabbitmq/7.高可用.html"
              },
              {
                "title": "消息积压",
                "link": "/zh-cn/docs/4.mq/rabbitmq/8.消息积压.html"
              },
              {
                "title": "死信队列",
                "link": "/zh-cn/docs/4.mq/rabbitmq/9.死信队列.html"
              },
              {
                "title": ".如何设计一个MQ",
                "link": "/zh-cn/docs/4.mq/rabbitmq/10.如何设计一个MQ.html"
              }
            ],
          }
        ]  
      },{
        title: '框架',
        children: [
          {
            title: 'MyBatis',
            opened: false,
            children: [
              {
                "title": "jdbc连接流程",
                "link": "/zh-cn/docs/5.框架/mybatis/1.jdbc连接流程.html"
              },
              {
                "title": "源码解读",
                "link": "/zh-cn/docs/5.框架/mybatis/2.源码解读.html"
              },
              {
                "title": "手写mybatis",
                "link": "/zh-cn/docs/5.框架/mybatis/3.手写mybatis.html"
              },
              {
                "title": "ORM",
                "link": "/zh-cn/docs/5.框架/mybatis/4.ORM.html"
              }
            ],
          },{
            title: 'Spring',
            opened: false,
            children: [
              {
                "title": "基本教程",
                "link": "/zh-cn/docs/5.框架/spring/1.基本教程.html"
              },
              {
                "title": "IOC的XML方式源码分析",
                "link": "/zh-cn/docs/5.框架/spring/2.IOC的XML方式源码分析.html"
              },
              {
                "title": "IOC的注解方式源码解析",
                "link": "/zh-cn/docs/5.框架/spring/3.IOC的注解方式源码解析.html"
              },
              {
                "title": "DI源码解析",
                "link": "/zh-cn/docs/5.框架/spring/4.DI源码解析.html"
              },
              {
                "title": "AOP源码分析",
                "link": "/zh-cn/docs/5.框架/spring/5.AOP源码分析.html"
              },
              {
                "title": "mvc",
                "link": "/zh-cn/docs/5.框架/spring/6.mvc.html"
              },
              {
                "title": "事务",
                "link": "/zh-cn/docs/5.框架/spring/7.事务.html"
              }
            ],
          },{
            title: 'spring-boot',
            opened: false,
            children: [
              {
                "title": "SpringBoot初识",
                "link": "/zh-cn/docs/5.框架/spring-boot/1.SpringBoot初识.html"
              },
              {
                "title": "源码解读",
                "link": "/zh-cn/docs/5.框架/spring-boot/2.源码解读.html"
              }
            ],
          },{
            title: 'spring-cloud',
            opened: false,
            children: [
              {
                "title": "consul",
                "link": "/zh-cn/docs/5.框架/spring-cloud/1.consul.html"
              },
              {
                "title": "Ribbon",
                "link": "/zh-cn/docs/5.框架/spring-cloud/2.Ribbon.html"
              },
              {
                "title": "feign",
                "link": "/zh-cn/docs/5.框架/spring-cloud/3.feign.html"
              },
              {
                "title": "Config",
                "link": "/zh-cn/docs/5.框架/spring-cloud/4.Config.html"
              },
              {
                "title": "Hystrix",
                "link": "/zh-cn/docs/5.框架/spring-cloud/5.Hystrix.html"
              }
            ],
          }
        ],
      },{
        title: '缓存',
        children: [
          {
            title: 'Redis',
            opened: false,
            children: [
              {
                "title": "安装",
                "link": "/zh-cn/docs/6.缓存/redis/1.安装.html"
              },
              {
                "title": "数据类型",
                "link": "/zh-cn/docs/6.缓存/redis/2.数据类型.html"
              },
              {
                "title": "应用场景",
                "link": "/zh-cn/docs/6.缓存/redis/3.应用场景.html"
              },
              {
                "title": "单线程模型",
                "link": "/zh-cn/docs/6.缓存/redis/4.单线程模型.html"
              },
              {
                "title": "过期策略",
                "link": "/zh-cn/docs/6.缓存/redis/5.过期策略.html"
              },
              {
                "title": "数据恢复",
                "link": "/zh-cn/docs/6.缓存/redis/6.数据恢复.html"
              },
              {
                "title": "哨兵模式",
                "link": "/zh-cn/docs/6.缓存/redis/7.哨兵模式.html"
              },
              {
                "title": "缓冲",
                "link": "/zh-cn/docs/6.缓存/redis/8.缓冲.html"
              },
              {
                "title": "RedisTemplate",
                "link": "/zh-cn/docs/6.缓存/redis/9.RedisTemplate.html"
              },
              {
                "title": "集群",
                "link": "/zh-cn/docs/6.缓存/redis/10.集群.html"
              },
              {
                "title": "lock",
                "link": "/zh-cn/docs/6.缓存/redis/11.lock.html"
              }
            ]
            ,
          }
        ],
      },{
        title: '分布式',
        children: [
          {
            title: 'zookeeper',
            opened: false,
            children: [
              {
                "title": "基本概念",
                "link": "/zh-cn/docs/7.分布式/zookeeper/1.基本概念.html"
              },
              {
                "title": "操作",
                "link": "/zh-cn/docs/7.分布式/zookeeper/2.操作.html"
              },
              {
                "title": "使用场景",
                "link": "/zh-cn/docs/7.分布式/zookeeper/3.使用场景.html"
              },
              {
                "title": "分布式锁",
                "link": "/zh-cn/docs/7.分布式/zookeeper/4.分布式锁.html"
              },
              {
                "title": "分布式一致性",
                "link": "/zh-cn/docs/7.分布式/zookeeper/5.分布式一致性.html"
              },
              {
                "title": "集群搭建",
                "link": "/zh-cn/docs/7.分布式/zookeeper/6.集群搭建.html"
              }
            ],
          }
        ],
      },{
        title: '服务器',
        children: [
          {
            title: 'centos下软件安装',
            link: "/zh-cn/docs/8.服务器/1.centos下软件安装.html",

            // children: [ {
            //   "title": "Http",
            //   "link": "/zh-cn/docs/2.服务器/1.centos下软件安装.html"
            // }
          } 
        ],
      },{
        title: '算法',
        children: [
          {
            title: '算法',
            opened: false,
            children: [ {
              "title": "递归",
              "link": "/zh-cn/docs/9.算法/1.递归.html"
            },
            {
              "title": "排序",
              "link": "/zh-cn/docs/9.算法/2.排序.html"
            },
            {
              "title": "双子针",
              "link": "/zh-cn/docs/9.算法/3.双子针.html"
            },
            {
              "title": "回溯",
              "link": "/zh-cn/docs/9.算法/4.回溯.html"
            }],
          }
        ],
      },{
        title: '工具',
        children: [
          {
            title: 'arthas',
            opened: false,
            children: [
              {
                "title": "安装",
                "link": "/zh-cn/docs/10.工具/arthas/1.安装.html"
              },
              {
                "title": "dashboard",
                "link": "/zh-cn/docs/10.工具/arthas/2.dashboard.html"
              },
              {
                "title": "thread",
                "link": "/zh-cn/docs/10.工具/arthas/3.thread.html"
              },
              {
                "title": "JVM",
                "link": "/zh-cn/docs/10.工具/arthas/4.JVM.html"
              }
            ],
          },{
            title: 'docker',
            opened: false,
            children: [
              {
                "title": "安装",
                "link": "/zh-cn/docs/10.工具/docker/1.安装.html"
              }
            ],
          },{
            title: 'k8s',
            opened: false,
            children: [
              {
                "title": "环境搭建",
                "link": "/zh-cn/docs/10.工具/k8s/1.环境搭建.html"
              },
              {
                "title": "kubectl",
                "link": "/zh-cn/docs/10.工具/k8s/2.kubectl.html"
              }
            ],
          },{
            title: 'maven',
            opened: false,
            children: [
              {
                "title": "解决依赖冲突",
                "link": "/zh-cn/docs/10.工具/maven/1.解决依赖冲突.html"
              }
            ],
          }
        ],
      },{
        title: '面试',
        children: [
          {
            title: 'java基础',
            link: "/zh-cn/docs/面试/java基础.html",
          } 
        ],
      }
    ],
    barText: '文档',
  }
};
