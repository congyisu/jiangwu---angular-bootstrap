var gulp = require( "gulp" ),
	less = require("gulp-less"),   //编译less
	cssMinify = require("gulp-minify-css"),  //css压缩
	rename = require("gulp-rename"), //重命名
	connect = require('gulp-connect'),  //启动服务
	amd = require("amd-optimize"),   //模块化命名
	concat = require("gulp-concat"),  //合并
	rev = require("gulp-rev"),		//md5加密
	revCollector = require("gulp-rev-collector"),  //替换加密后的引入路径
	mock = require("gulp-mock-server");  //启动mock服务

/**less编译**/ 
gulp.task("less",function(){
	gulp.src(["dev/public/css/index.less"])
		.pipe( less() )		
		.pipe( gulp.dest("dev/public/css/") )
		.pipe( cssMinify() )
		.pipe( rename("index.min.css") ) 
		.pipe(  gulp.dest("dev/public/css/") )
});
/**创建服务***/ 
// gulp.task("server",function(){
// 	gulp.src([".","./app/","./app/**/*"])
// 		.pipe( mock({
// 			port: 8090
// 		}))
// });
gulp.task('server', function() {
   connect.server({
   		root : "dev/",
		port: 8090,
		livereload : true
		
	})
});

gulp.task('mockServer', function() {
   gulp.src([".","./app/","./app/**/*"])
		.pipe( mock({
			port: 8080,
			dirctoryListing:true,
			allowCrossOrigin:true
		}))
});
/** 监听变化保存刷新 **/
gulp.task("reload",function(){
	gulp.src( [
		"dev/index.html",
		"dev/controllers/**/*.html",
		"dev/components/**/*.html",
		"dev/public/css/*.less",
		"dev/public/less/*.less",
		"dev/public/less/**/*.less",
		"dev/index.js",
		"dev/**/*.js",
		"dev/**/**/*.js"
	] )
	 	.pipe( connect.reload() );	
}); 
/** 事件监听***/ 
gulp.task("watch",function(){
	gulp.watch([
		"dev/index.html",
		"dev/controllers/**/*.html",
		"dev/components/**/*.html",
		"dev/index.js",
		"dev/**/*.js",
		"dev/**/**/*.js"
	],["reload"]);
	gulp.watch([
		"dev/public/css/*.less",
		"dev/public/less/*.less",
		"dev/public/less/**/*.less"
	],["less","reload"]);
})


gulp.task("default",["less","server","watch","mockServer"])