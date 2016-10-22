const Thumbler = require('../index');

Thumbler({
	type: 'video', 
	input: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
	output: './output.jpeg', 
	time: '00:00:22',
	size: '300x200' // this optional if null will use the desimention of the video
}, function(err, path){
    if (err) return err;
    return true;
});