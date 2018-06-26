
var HelloWorldLayer = cc.Layer.extend({
    label:null,
    second:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var labelTTF=new cc.LabelTTF('玩家1:'+this.second,"",64);
        labelTTF.x=50;
        labelTTF.y=size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);
        this.label=labelTTF;
        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0)
        var starMenuItem=new cc.MenuItemFont("开始",function(){
            cc.log("开始按钮点击了!");
        },this);

        var setMenuItem=new cc.MenuItemFont('设置',function(){
            cc.log('设置按钮点击了！');

        },this);

        var menu=new cc.Menu(starMenuItem,setMenuItem);
        menu.alignItemsHorizontally();
        this.addChild(menu);
        menu.y=size.height*0.3;
        return true;
    },
    myTimer:function(dt){
        this.second+=1;
        this.label.setString("玩家1:"+parseInt(this.second));

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

