const apa = {"type": "apa"};

const hej = function(){
    console.log("this from hej: ", this);
}.bind(apa);



const g = hej()