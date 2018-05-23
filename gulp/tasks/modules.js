import gulp from 'gulp';
import file from 'gulp-file';
import plumber from 'gulp-plumber';
import {
    modulesConfig,
    plumberConfig
} from '../config';

const modules = () => {
    let watcher = gulp.watch(['source/components/*', '!source/components/_*']);

    return watcher.on('addDir', function (path) {
        let pathArray = path.split('\\');
        let folderName = pathArray[pathArray.length-1];

        if (modulesConfig.js === true) {
            return gulp.src(path + '/*')
                .pipe(plumber(plumberConfig))
                .pipe(file(folderName + '.pug', '//- ' + folderName + ' module'))
                .pipe(file(folderName + '.scss', '/* ' + folderName + ' style */'))
                .pipe(file(folderName + '.js', '// ' + folderName + ' JavaScript'))
                .pipe(gulp.dest(path));
        } else {
            return gulp.src(path + '/*')
                .pipe(plumber(plumberConfig))
                .pipe(file(folderName + '.pug', '//- ' + folderName + ' module'))
                .pipe(file(folderName + '.scss', '/* ' + folderName + ' style */'))
                .pipe(gulp.dest(path));
        }
    });
};

export default modules;
