/*:
* @author John Gale
* @plugindesc A test plugin for Ludum Dare 47.
*
* @param Text Param
* @type text
* @default This is the default text for this parameter.
*
* @param Number Param
* @type number
* @desc A number parameter for this test plugin.
* @ @min 0
* @max 50
* @decimals 5
*
* @param File Param
* @type file
* @dir audio/bgm
* @require 1
* @desc Pick a song!
*
* @help
* I don't think you need any help.
*/
 

(function(){

    var params = PluginManager.parameters("TestPlugin");

    var text = params["Text Param"];
    var number = params["Number Param"];
    var file = params["File Param"];

    console.log(text);
    console.log(number);
    console.log(file);
})();

var lh = Window_Base.prototype.lineHeight()*2;

function My_Window(){
    this.initialize.apply(this, arguments);
}

My_Window.prototype = Object.create(Window_Base.prototype);
My_Window.prototype.constructor = My_Window;

My_Window.prototype.initialize = function(){
    Window_Base.prototype.initialize.call(this, 0, 0, Graphics.boxWidth, lh);
    this.refresh();
}

My_Window.prototype.refresh = function(){
    this.contents.clear();
    this.drawtext(text, 0, 0);
}

var smstart = Scene_Map.prototype.start;
Scene_Map.prototype.start = function(){
    smstart.apply(this, arguments);
    this.my_window = new My_Window();
    this.addChild(this.my_window);
}