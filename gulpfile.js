'use strict';

const gulp = require('gulp');
const $    = require('gulp-load-plugins')();

function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;

    gulp.task(taskName, function(cb) {
        let task = require(path).call(this, options);

        return task(cb);
    });
}

var path = {
    watch: {
        modules: 'source/modules/*'
    },

    test: {
        file: 'source/'
    }
};

var options = {
    watchModuls: {
        read: false,
        ignorePermissionErrors: true,
        events: [
            'addDir',
            'unlinkDir'
        ]
    }
};

gulp.task('watch', function () {
    $.watch([path.watch.modules], options.watchModuls, function (event, cb) {
        var pathArray = event.path.split("\\");
        var folderName = pathArray[pathArray.length-1];

        return gulp.src(event.path+ '/*')
                .pipe($.file(folderName + '.pug', '//- ' + folderName + ' module'))
                .pipe($.file(folderName + '.scss', '/* ' + folderName + ' style */'))
                .pipe($.file(folderName + '.js', '// ' + folderName + ' JavaScript'))
                .pipe(gulp.dest(event.path));
    });
});
