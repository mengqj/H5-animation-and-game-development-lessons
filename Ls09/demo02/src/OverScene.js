var OverSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();


        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverSceneLayer();
        this.addChild(layer);
    }});