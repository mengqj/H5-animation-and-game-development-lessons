var MainSceneLayer = cc.Layer.extend({
    sprite:null,
    arr:[],

    ctor:function () {
        this._super();
        var size = cc.winSize;
        var bg = new cc.Sprite(res.Bg1_jpg);
        bg.x = cc.winSize.width / 2;
        bg.y = cc.winSize.height / 2;
        this.addChild(bg);
        this.arr[0] = bg;

        var bg2 = new cc.Sprite(res.Bg1_jpg);
        bg2.x = cc.winSize.width / 2;
        bg2.y = cc.winSize.height / 2 + bg.getBoundingBox().height;
        this.addChild(bg2);
        this.arr[1] = bg2;


        // for(var i=0;i<2;i++){
        //     var bg=new cc.Sprite(res.Bg1_jpg);
        //     bg.x=cc.size.width/2;
        //     bg.y=cc.size.height/2+bg.getBoundingBox().height;
        //     this.addChild(bg);
        //     this.arr[i]=bg;
        // }



        var p1 = new cc.Sprite(res.P1_png);
        p1.x = cc.winSize.width / 2;
        p1.y = cc.winSize.height / 3;
        this.addChild(p1);
        this.plane = p1;


        var enemy = new cc.Sprite(res.P2_png);
        enemy.setRotation(180);
        enemy.x = cc.winSize.width / 2;
        enemy.y = cc.winSize.height;
        this.addChild(enemy);
        this.enemy = enemy;



        this.schedule(this.bgCallBack,0.001);
        this.schedule(this.enemyCallback,0.001);
        return true;
    },
    bgCallBack:function(dt){
        for(var i in this.arr)
        {
            if(this.arr[i].y<-720){
                this.arr[i].y+=2*1440;
                }
            this.arr[i].y-=2;
        }
    },


    enemyCallback: function (dt) {
        if (this.enemy.y < 0) {
            this.enemy.y = cc.winSize.height;
            this.enemy.x = cc.winSize.width * cc.random0To1();
            this.speed += 2;
        } else {
            this.enemy.y -= this.speed;
            //碰撞检测
            if(cc.rectContainsPoint(this.plane.getBoundingBox(),this.enemy.getPosition())){
                //cc.log("碰到了");
                var ls = cc.sys.localStorage;
                ls.setItem("currentScore",this.score);
                if(this.score > ls.getItem("bestScore")){
                    ls.setItem("bestScore",this.score);
                }
                cc.director.runScene(new OverScene());
            }
        }
    }
});

var MainScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainSceneLayer();
        this.addChild(layer);
    }});