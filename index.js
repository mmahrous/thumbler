"use strict";

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const exec = require('child_process').exec;

var extract = function (options,callback) {
	if (options.type == 'video') {
		video(options, function(err, path){
			if (err) return callback( err , null);
	    	callback(null, path);
		})
	}else if (options.type == 'image') {
		image(options, function(err, path){
			if (err) return callback( err , null);
	    	callback(null, path);
		})
	}else{
		callback("Not supported.", null);
	}
}

function video(options, callback){
	if (options.size == null) {
	  options.size = ' ';
	}else {
		options.size = ' -y -s ' + options.size;
	}
	if (options.time == null) {
	  options.time = '00:00:01';
	}
	exec(ffmpegPath +' -ss ' + options.time + ' -i "' + options.input+ '"' + options.size + ' -vframes 1 -f image2 "' + options.output+'"', function( err ) {
		if (err) return callback( err , null);
		callback(null, options.output);
	});
}

function image(options, callback){
	exec(ffmpegPath + ' -i "' + options.input + '" -vf scale='+options.size+':force_original_aspect_ratio=decrease "' + options.output + '"', function( err ) {
		if (err) return callback( err , null);
		callback(null, options.output);
	});
}

module.exports = extract;
