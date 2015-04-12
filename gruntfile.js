/**
 * Created by Jesus_H on 4/9/2015.
 */
module.exports = function(grunt){

    grunt.initConfig({
        babel:{
            options:{
                sourceMap: true
            },
            dist:{
                files: [{
                    //'build/'  : 'src/**/*.js' //Source
                    expand:true,
                    cwd:'src/',
                    src:['**/*.js'], //Origine de la carpeta
                    dest:'build/', //Destino de la carpeta
                    ext:'.min.js', //Extension que tendra al crear el archivo
                    extDot:'first' //
                }]
            }
        },
        watch:{
            js:{
                files: ['src/**/*.js'], //Watch Files
                tasks: ['babel:dist'] //Task Running
        }
    }});
/*    grunt.loadNpmTasks('grunt-tasks');*/
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['watch'], function(){
        grunt.log.write('Task Babel finished ').ok();
    });
};