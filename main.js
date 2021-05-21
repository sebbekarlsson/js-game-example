const canvas = document.getElementById("canvas");       // hamta canvas
const ctx = canvas.getContext("2d");                    // hamta objektet vi ritar pa (inbyggt i JS)


// fyll en rektangel med vit farg over hela canvasen
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// skapar jag min player fran min "Player" klass.
// jag stoppar aven in x och y.
// x = 640 / 2
// y = 480 / 2
const player = new Player(ctx, 640 / 2, 480 / 2);


// loop som uppdaterar och ritar spelaren
function animate() {
    // fyll en rektangel med vit farg over hela canvasen
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();

    requestAnimationFrame(animate);         // inbyggd funktion
                                            // som sager till webblasaren att vi vill
                                            // lyssna pa nar skarmen ritas om.
                                            // och vi vill att varan "animate" funktion skall koras da.
}

animate();  // starta loopen.