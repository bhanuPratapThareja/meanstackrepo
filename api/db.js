var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.dbURI, {useMongoClient: true});

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to ' + config.dbURI);
});

mongoose.connection.on('disconnected', function(){
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(){
  console.log('Mongoose connection error ' + error);
});

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through app termination (SIGINT)');
    process.exit(0);
  });
});

process.on('SIGTERM', function(){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through app termination (SIGTERM)');
    process.exit(0);
  });
});

process.once('SIGUSR2', function(){
  mongoose.connection.close(function(){
    console.log('Mongoose disconnected through app termination (SIGUSR2)');
    console.log('Process ID: ' + process.pid);
    process.kill(process.pid, 'SIGUSR2');
  });
});
