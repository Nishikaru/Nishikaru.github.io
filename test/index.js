var pname = prompt("Your name please!");
var gameLvl = 1;
const madeUpNumber=[];
const newNumber=[];


$('h2').text("you are on level = "+gameLvl);
$("h1").text("Welcome "+pname);
$("div").hide();
$("button").click(function () {
    $("div").show();
    $("button").remove();
    caller();
})
if ($('#yes').length) {
    
    $(document).keypress(function () {
        $("div").show();
        $("button").remove();
        caller();
    })
}

//random number .................
function caller() {
    
    for (let i = 0; i < gameLvl; i++) {
        
        setTimeout(function() {
            var clicks =Math.floor(4* Math.random());
            madeUpNumber[i]=clicks;
        console.log(clicks);
            colorchanger(clicks);
        },(i*1000)+1000);
        
    }
}

//color changer.....................

function colorchanger(gotit) {
    if (gotit==0) {
        $('.red').addClass("newStyle");
        setTimeout(function () {
            $('.red').removeClass("newStyle");
        },500)
    }else if (gotit==1) {
        $('.blue').addClass("newStyle");
        setTimeout(function () {
            $('.blue').removeClass("newStyle");
        },500)
    }else if (gotit==2) {
        $('.green').addClass("newStyle");
        setTimeout(function () {
            $('.green').removeClass("newStyle");
        },500)
    }else if (gotit==3) {
        $('.pink').addClass("newStyle");
        setTimeout(function () {
            $('.pink').removeClass("newStyle");
        },500)
    }
}

//event..................................


var io=0;
$("div").click(function () {
    var idNmane=this.id;
        userinput(idNmane)
    })
function userinput(idname) {
    var act=true;
    while (act) {
        if (idname=="red") {
            newNumber[io]=0;
            console.log(newNumber[io]);
            
        }else if (idname=="blue") {
            newNumber[io]=1;
            console.log(newNumber[io]);
            
        }else if (idname=="green") {
            newNumber[io]=2;
            console.log(newNumber[io]);
            
        }else if (idname=="pink") {
            newNumber[io]=3;
            console.log(newNumber[io]);
            
        }

        if (newNumber[io]!=madeUpNumber[io]) {
            $("body").addClass("newbg");
            $("h2").text("Game over");
            setTimeout(function(){
                location.reload();
            }, 4000);
        }
        io++;
        if (io==gameLvl) {
            gameLvl++;
            io=0;
            $('h2').text("you are on level = "+gameLvl);
            caller();
        }
        act=false;
    }
}

//copm........................................


