#项目初始化
1. 首先在index.html中修改viewport meta,因为是移动端所以要禁止用户缩放等等。
2. 引入reset.css 样式初始化（所有样式在所有浏览器下是一致的）,在assets文件夹下,在main.js中引入，因为main.js是入口文件。
3. 1像素边框问题: 引入border.css,在main.js中引入
4. 300ms点击延迟的问题，点击延迟300ms再执行，引入fastclick库
   npm install fastclick --save

   在main.js中使用:
   import fastclick from 'fastclick'
   // 引入fastclick
   fastclick.attach(document.body)
   // 把fastclick绑定到document.body上面

