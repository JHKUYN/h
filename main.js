var canvas=new fabric.Canvas("myCanvas");
// Create canvas variable
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromUrl("golf-h.png",function(Img) {
		hole_obj=Img;
		hole_obj=scaleToWidth(50);
	hole_obj=scaletoHeigth(50);
	hole_objset({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromUrl("ball.png",function(Img) {
		hole_obj=Img;
		hole_obj=scaleToWidth(50);
	hole_obj=scaletoHeigth(50);
	hole_objset({
		top:hole_y,
		left:hole_x
	});
	canvas.add(hole_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
 {}
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML='You have hit the ball';
		document.getElementById("myCanvas").style.bordercolor="red";
	}
	
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
{
    if(ball_y >=0)
    {
        ball_y=ball_y-block_image_heigth;
        console.log("block image height=" + block_image_heigth);
        console.log("When up arrow is pressed,X=" +ball_x +",Y"+ball_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down()
{
    if(ball_y <=500)
    {
        ball_y=ball_y-block_image_heigth;
        console.log("block image height=" + block_image_heigth);
        console.log("When up arrow is pressed,X=" +ball_x +",Y"+ball_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left()
{
    if(ball_x_x >=0)
    {
        ball_x=ball_x-block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When left arrow is pressed,X=" +ball_x +",Y"+bal_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right()
{
    if(ball_x <=850)
    {
        ball_x=ball_x+block_image_width;
        console.log("block image width=" + block_image_width);
        console.log("When right arrow is pressed,X=" +ball_x +",Y"+ball_y);
        canvas.remove(player_object);
        player_update();
    }
}