class Player {
    /**
     * 
     * ctx = canvas objektet vi ritar pa
     * x = vart spelaren skall starta horisontellt
     * y = vart spelaren skall starta vertikalt
     */
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speed = 4;         // en konstant for hur snabbt vi skall rora oss.
    }

    // kors varje gang bilden uppdaterar sig, detta ar lite som en loop.
    update() {

        // event listener som kollar nar vi trycker pa en knapp.
        // evt = event objektet (inbyggt i Javascript)
        document.onkeypress = function(evt) {
            var charCode = evt.keyCode || evt.which;    // vilken kod pa knappen som ar tryckt
            var charStr = String.fromCharCode(charCode);    // hamta bokstaven vi tryckt pa
            
            // om W ar tryckt
            if (charStr === "w") {
                this.moveUp();
            }

            // om A ar tryckt
            if (charStr === "a") {
                this.moveLeft();
            }

            // om D ar tryckt
            if (charStr === "d") {
                this.moveRight();
            }

            // om S ar tryckt
            if (charStr === "s") {
                this.moveDown();
            }
        }.bind(this);
    }

    draw() {
        this.ctx.fillStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        this.ctx.stroke();
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}