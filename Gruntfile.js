module.exports = function(grunt) {

  grunt.initConfig({
      compress: {
        main: {
          options: {
            archive: 'tmp/renamenath.zip'
          },
          files: [
            {expand: true, cwd: 'src/', src: ['**']}
          ]
        }
      },
    zip_to_crx: {
      options: {
        // Location of pem encoded private key. 
        privateKey: "./private-keys.pem"
      },
      your_target: {
          // input zip file
          src: "tmp/renamenath.zip", 
          // output .crx file
          dest: "distribution/"
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-zip-to-crx');

  grunt.registerTask('default', ['compress', 'zip_to_crx']);
};