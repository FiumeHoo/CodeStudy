const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('reload', () => {
	var files = [
		'**/*.html',
		'**/*.js'
	]

	browserSync.init(files, {
		server: {
			baseDir: './'
		}
	})
})

gulp.task('default', ['reload'])
