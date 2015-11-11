//global variables
var images = ["http://www.arttherapyblog.com/uimages/2011/01/art-therapy-career2.jpg", 
              "http://lifewallpaperz.com/images/2015/abstract-art/abstract-art-02.jpg",
              "https://flavorwire.files.wordpress.com/2009/10/josef-albers-homage-to-the-square-midday-1954-57.jpg",
              "http://cdn.hpdetijd.nl/wp-content/uploads/2013/05/Victory-Boogie-Woogie-fragment.-Piet-Mondriaan..jpg"
];
var angle = 0;
var imageNumber = 0;



//turn function
turn = function(){
    
    //creating local variables
    var img = document.getElementById('image');
    
    //make sure the agle is max 360 degrees
    if (angle>300){
        angle = 0;
    }
    
    //adding 90degrees to the able every click
    angle+=90;
    img.style.transform = 'rotate('+angle+'deg)'; 
    console.log("click received: " + angle + " deg");
}



//guess function
guess = function(){
    if(angle==360){
        alert("thats right!");
        images[imageNumber] = "http://images.vectorhq.com/images/previews/5f3/green-checkmark-and-red-minus-147478.png";
        next();
    }else{
        alert("Wrong, try again!");
    }
    console.log("guess received: " + angle + " deg");
}


//next function
next = function(){
    imageNumber+=1;
    if (imageNumber == images.length){
        imageNumber=0;
    }
    turn();  //"randomize" the angle
    document.getElementById('image').src = images[imageNumber];
    console.log("next received");
}



//previous function
prev = function(){
    imageNumber-=1;
    if (imageNumber == -1){
        imageNumber = images.length-1;
    }
    turn();  //"randomize" the angle
    document.getElementById('image').src = images[imageNumber];
    console.log("prev received");
}