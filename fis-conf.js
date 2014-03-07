// 加载LESS插件
fis.config.set('modules.parser.less', 'less');
fis.config.set('roadmap.ext.less', 'css');
// 加载coffee插件
fis.config.set('modules.parser.coffee', 'coffee-script');
fis.config.set('roadmap.ext.coffee', 'js');
// seajs 处理器
fis.config.set('modules.postpackager','seajs');
// 用fis的js包装器
fis.config.set('settings.postprocessor.jswrapper.type','amd');
 //不要压缩require关键字，否则seajs会识别不了require
fis.config.set('optimizer.uglify-js.mangle',{except:['require']});
//不用coffee-script包装作用域
fis.config.set('settings.parser.coffee-script.bare',true)


fis.config.set('roadmap.path',[
  {
                //一级同名组件，可以引用短路径，比如sea-modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg : /^\/static\/([^\/]+)\/\1\.(js|coffee|less|css)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //less和css文件会做csssprite处理
                useSprite : true,
                //id为文件夹名
                id : '$1'
            },
            {
                //sea-modules目录下的其他文件
                reg : /^\/static\/(.*)\.(js|coffee|less|css)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //less和css文件会做csssprite处理
                useSprite : true,
                //id是去掉sea-modules和.js后缀中间的部分
                id : '$1'
            }
  ])
