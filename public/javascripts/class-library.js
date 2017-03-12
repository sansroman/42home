
//类库增强版

var Class = function (par) {
    var klass = function(){
        this.init.apply(this,arguments);
    }

    // 改变klass的原型
    /*
    *如果把parent传入Class构造函数,所有的子类则会必然共享一个原型
    *这里用临时匿名函数避免了继承类的时候创建实例,暗示只有实例的属性才会被继承,而不是类的属性
    */
    if(par){
        var subclass = function(){};
        subclass.prototype = parent.prototype;
        klass.prototype = new subclass;
    }

    klass.prototype.init = function(){};

    // 定义prototype别名
    klass.fn = klass.prototype;

    // 添加一个proxy函数用来调整上下文
    /*
    *目前ECMAScript5 引入了 bind()函数来控制调用的作用域，其和这个函数作用类似，老版本的浏览器不支持，但是可以打补丁
    */
    klass.proxy = function(func){
        var self = this;
        return(function(){
            return func.apply(self,arguments);
        });
    }

    // 给实例也添加这个函数
    klass.fn.proxy = klass.proxy;

    // 定义类别名
    klass.fn.parent = klass;

    // 给类添加属性
    klass.extend = function(obj){
        var extended = obj.extended;
        for (var i in obj){
            klass[i] = obj[i];
        }
        if(extended)extended(klass);
    }

    // 给实例添加属性
    klass.include = function(obj){
        var included = obj.included;
        for(var i in obj){
            klass.fn[i] = obj[i];
        }
        if (included) included(klass)

    }
    return klass;
}