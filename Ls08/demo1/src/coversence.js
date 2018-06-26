var CoverLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer=new cc.LayerColor(cc.color.GREEN);
        this.addChild(layer);


        var size=cc.winSize;
        var label=new cc.LabelTTF('这是第三个场景','',50);
        label.x=size.width*0.5;
        label.y=size.height*0.5;
        this.addChild(label);

        var menuItem=new cc.MenuItemFont('跳到第一场景',function(){
            // cc.director.runScene(new StarScene());
            cc.director.runScene(new cc.TransitionFade(2,new StarScene(),cc.color.WHITE))
        },this);

        menuItem.setFontSize(50);
        var menu=new cc.Menu(menuItem);

        menu.setPosition(0,0);
        menu.x=size.width*0.5;
        menu.y=size.height*0.3;
        this.addChild(menu);
    }
})

var bgLayer=cc.layer.extend({
    ctor:function(){
        this._super();
        var bglayer1=new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc(0,-1));
        var bglayer2=new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc(-1,-1),

        [{p:0,color:cc.color.YELLOW},
            {p:5,color:new cc.Color(0,0,0,0)},
            {p:1,color:cc.color.BLUE}



        ]);
        this.addChild(bglayer2);
    }
})
var CoverScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer=new CoverLayer();
        this.addChild(layer);
    }
})