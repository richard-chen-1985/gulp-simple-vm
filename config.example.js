/**
 * @main config file
 */

module.exports = {
    // port for express
    appPort: 8008,
    // open livereload or not
    livereload: true,
    // server default page
    homePage: '',
    // project source files directory
    baseDir: 'src',
    // output directory
    buildDir: '.build',
    // if is true, will optimize css, js and images
    optimize: false,
    optimizeConfig: {
        compatibility: 'ie7',
        mangle: {
            except:['$', 'require', 'exports', 'module']
        }
    },
    cssDir: 'css',
    imageDir: 'img',
    jsDir: 'js',
    htmlDir: '',
    less: {
        // root of less, for watching
        dir: 'less',
        files: ['index.less']
    },
    sass: {
        // root of sass, for watching
        dir: 'sass',
        files: ['index.scss']
    },
    concat: [
        {
            src: ['js/jquery.js', 'js/jquery.pin.js'],
            out: 'js/lib.js',
            sourcemap: false
        },
        {
            src: ['css/bootstrap.min.css', 'css/chosen.min.css', 'css/glyphicon.css'],
            out: 'css/lib.css',
            sourcemap: false
        }
    ],
    // see https://github.com/jrburke/r.js
    requirejs: {
        appDir: 'src/app',
        baseUrl: './',
        mainConfigFile: 'src/app/config.js',
        dir: 'app',
        keepBuildDir: true,
        removeCombined: true,
        findNestedDependencies: true,
        optimize: 'uglify2',
        modules: [
            { name: 'config', exclude: ['jquery'] },
            { name: 'lib/require', include: ['jquery'] }
        ]
    },
    // see https://github.com/richardchen85/gulp-velocityjs
    velocity: {
        dir: 'src/vm',
        config: {
            // tpl root 
            root: 'src/vm/tpl/',
            encoding: 'utf-8',
            //global macro defined file
            macro: 'src/vm/tpl/global-macro/macro.vm',
            globalMacroPath: 'src/vm/tpl/global-macro',
            // test data root path
            dataPath: 'src/vm/data/'
        },
        // files for watch, path related to config.root
        watchList: [
            { src: 'index.vm', out: 'index.html' }
        ]
    },
    // copy static files to specified path
    deploy: {
        // path to webapp static resource directory
        appPath: './webapp',
        // path to cdn directory
        cdnPath: './static/1.0.0'
    }
}
