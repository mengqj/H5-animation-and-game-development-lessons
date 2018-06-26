var StarLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer=new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);

        var size=cc.winSize;
        var label=new cc.LabelTTF('这是第一个场景','',50);
        label.x=size.width*0.5;
        label.y=size.height*0.5;
        this.addChild(label);



        var menuItem=new cc.MenuItemFont('跳到第二场景',function(){
         // cc.director.runScene(new MainScene());
         cc.director.runScene(new cc.TransitionFade(2,new MainScene(),cc.color.WHITE))
        },this);

        menuItem.setFontSize(50);
        var menu=new cc.Menu(menuItem);

        menu.setPosition(0,0);
        menu.x=size.width*0.5;
        menu.y=size.height*0.3;
        this.addChild(menu);
    }
})
var StarScene=cc.Scene.extend({
    onEnter:function(){
        this._super();
        var layer=new StarLayer();
        this.addChild(layer);
    },

    onEnterTransitionDidFinish:function (){},

});