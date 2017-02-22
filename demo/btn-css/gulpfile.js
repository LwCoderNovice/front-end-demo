// load plugins
// 
var gulp = require("gulp"),
	scsslint = require("gulp-scss-lint"),
	buildscss = require("gulp-sass"),
	scssmini = require("gulp-clean-css"),
	livereload = require("gulp-livereload");
	webserver = require("gulp-webserver");

gulp.task("scsslint",function(){
	return gulp.src('scss/*.scss')
		.pipe(scsslint());
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(livereload());
});

gulp.task("buildscss",function(){
	return gulp.src('scss/styles.scss')
		.pipe(buildscss())
		.pipe(gulp.dest('css/'))
		.pipe(scssmini())
		.pipe(gulp.dest('css/min'))
		.pipe(livereload());
});

gulp.task("watching",function(){
	livereload.listen();
	gulp.watch('scss/**/*.scss',['buildscss']);
	gulp.watch('./*.html',['html']);
});

gulp.task("server",function(){
	gulp.src('')
	.pipe(webserver({
		livereload: true,
	      open: true,
	      port: 9000,
	      directory: true
	}));

	gulp.start('watching');
});

gulp.task('default', ['buildscss','server']);

gulp.task('watch', ['buildscss','watching']);