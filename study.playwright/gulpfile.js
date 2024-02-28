var gulp = require('gulp');

var sonarqubeScanner = require('sonarqube-scanner');

gulp.task('sonar', function(callback) {
    
    sonarqubeScanner({
        
        serverUrl : 'http://localhost:9001',
        options : {

        }
    }, callback);
});