/*global x*/
/*global uploadedPic*/

$("input").change(function(readImage) {
    var file = readImage.originalEvent.srcElement.files[0];
    var uploadedPic = document.createElement("img");
    var reader = new FileReader();
    reader.onloadend = function() {
        uploadedPic.src = reader.result;
        // uploadedPic.width = 250;
        // uploadedPic.height = 250;
        uploadedPic.id = "newpic";
        uploadedPic.style = "margin:auto;display:block;";
        var x = uploadedPic.src;
        console.log(x);
        load(x);
    };
    reader.readAsDataURL(file);
    $(uploadedPic).appendTo("input");
    console.log("testing!");
});

$(".text").hover(detectTyping());

$(document).ready(function() {
    $("#clickhere").click(function() {
        $("#upload-file").css("display", "block");
        $("#hidehere").css("display", "inline-block");
    });
    $("#hidehere").click(function() {
        $("#upload-file").css("display", "none");
        $("#hidehere").css("display", "none");
    });
});

$("#retry").click(function() {
    $("input").val('');
    document.getElementbyID("myCanvas");
    canvas.width = canvas.width;
});
    
function detectTyping() {
    var one = document.getElementById("u1");
    var two = document.getElementById("u2");
    var three = document.getElementById("u3");
    var four = document.getElementById("u4");
    var five = document.getElementById("u5");
    var six = document.getElementById("u6");
    var content = [];

    document.onkeypress = function(e) {
        if (e.keyCode < 48 || e.keyCode > 57 && e.keyCode < 97 || e.keyCode >= 103) {
            return false;
        }

        if (content.length < 6) {
            var hexChar = String.fromCharCode(e.keyCode);
            content.push(hexChar);
            document.getElementById("u" + (content.length)).innerHTML = hexChar;
        }
        if (content.length > 6) {
            return false;
        }
        if (content.length == 6) {
            var color = "#" + content.join("");
            var doms = document.querySelectorAll(".underscore");
            for (var i = 0; i < content.length; i++) {
                doms[i + 1].style.color = color;
            }
        }

    }

    document.onkeydown = function(e) {
        if (e.keyCode == 8) {
            content.pop();
            document.getElementById("u" + (content.length + 1)).innerHTML = "";
            var doms = document.querySelectorAll(".underscore");
            for (var i = 0; i < content.length; i++) {
                doms[i + 1].style.color = "#575757";
            }
        }
    };

}

function load(x) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    //add image here
    var img = document.getElementById("newpic");
    img.src = x;
    console.log(img.src);
    context.drawImage(img, 0, 0);
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
}


function findPos(obj) {
    var current_left = 0,
        current_top = 0;
    if (obj.offsetParent) {
        do {
            current_left += obj.offsetLeft;
            current_top += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return {
            x: current_left,
            y: current_top
        };
    }
    return undefined;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

$('#myCanvas').click(function(e) {
    var position = findPos(this);
    var x = e.pageX - position.x;
    var y = e.pageY - position.y;
    var coordinate = "x=" + x + ", y=" + y;
    var canvas = this.getContext('2d');
    var p = canvas.getImageData(x, y, 1, 1).data;
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    console.log("HEX: " + hex);

function clickHex() {
        for (var i = 1; i < 7; i++) {
         var hexChar = hex.substr(i,1)
            content.push(hexChar);
            document.getElementById("u" + (content.length)).innerHTML = hexChar;
         }
        }
        if (content.length == 6) {
            var color = "#" + content.join("");
            var doms = document.querySelectorAll(".underscore");
            for (var i = 0; i < content.length; i++) {
                doms[i + 1].style.color = color;
            }
        }
});