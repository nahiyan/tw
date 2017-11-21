var gulp = require('gulp');
var minify = require('gulp-minify');

var paths = {
	scripts: ['market.js', 'incoming_res.js', 'farm.js', 'la.js']
};

gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
		.pipe(minify())
		.pipe(gulp.dest('build/js'));
});

gulp.task('default', function(){
	gulp.watch(paths.scripts, ['scripts']);
});