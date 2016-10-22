# Thumbler
This package will extract thumbnail from video and images.


## Video
Specify a time that you want the thumbnail to use it.

### Example 
```javascript
const Thumbler = require('thumbler');

Thumbler({
	type: 'video', 
	input: 'input.mp4',
	output: 'output.jpeg', 
	time: '00:00:22',
	size: '300x200' // this optional if null will use the desimention of the video
}, function(err, path){
    if (err) return err;
    return path;
});
```
## Image
Specify a time that you want the thumbnail to use it.

### Example 
```javascript
const Thumbler = require('thumbler');

Thumbler({
	type: 'image', 
	input: 'input.jpg',
	output: 'output.jpeg', 
	size: '300x200' // this optional if null will use the desimention of the video
}, function(err, path){
    if (err) return err;
    return path;
});
```
#### License
Licensed under MIT

#### Author
M. Mahrous
Feel free to contact me [M. Mahrous](mailto:m.mahrous.94@gmail.com) and improve the code.