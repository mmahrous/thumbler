const Thumbler = require('../index');

Thumbler({
	type: 'image', 
	input: 'http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg',
	output: './output.jpeg', 
	size: '300x200' // this optional if null will use the desimention of the video
}, function(err, path){
    if (err) return err;
    return true;
});