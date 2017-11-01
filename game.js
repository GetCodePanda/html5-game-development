var canvas = null ,
    context = null ,
    frameRate = 1000/30,
    frame = 0,
    assets = [
        ''
    ];

var setup = function(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    // setting a canvas width and height to 
    // window width and height ...
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // creating new img object;
    img  = new Image();
    img.onload = onImageLoad;
    img.src = 'https://avatars3.githubusercontent.com/u/21275383?s=40&v=4'
}

var onImageLoad = function(){
    console.log('Image !!!' , img);
    // draw the image in a particular window location :
    context.drawImage(img, 192, 192);
}

setup();
