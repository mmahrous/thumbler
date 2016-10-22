"use strict";

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const exec = require('child_process').exec;

function extract(path, destPath, time, size, callback) {
	if (time == null) {
	  time = '00:00:01';
	}
	if (size == null) {
	  size = '200x125';
	}
	return exec(ffmpegPath +' -ss ' + time + ' -i ' + path + ' -y -s ' + size + ' -vframes 1 -f image2 -vf scale=iw*.5:ih*.5' + destPath, function( err ) {
	  if (callback) {
	    return callback( err , null);
	    callback(null, destPath);
	  }
	});
}