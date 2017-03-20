一般来说，在Java中，谈论深浅克隆比较多，在 Java 语言中，数据类型分为值类型（基本数据类型）和引用类型，值类型包括 int、double、byte、boolean、char 等简单数据类型，引用类型包括类、接口、数组等复杂类型。浅克隆和深克隆的主要区别在于是否支持引用类型的成员变量的复制。
然而在Javascript中，我们也将采用原型对象实现了OOP（面向对象编程），因此也就会遇到深浅克隆的问题了。

#Javascript中的数据类型

- 栈：原始数据类型（undefined,Null,Boolean,Number,String）
- 堆 ：引用数据类型（对象，函数，数组）

两者的区别在于，存储的位置不同：

**原始数据类型**直接存储在栈中的简单数据段，占用空间小，大小固定，属于被频繁使用数据，所以放在栈中存储；

**引用数据类型**存储在堆（heap）中，占据空间大，大小不固定。如果存储在栈中，会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

#深克隆与浅克隆

##浅克隆
在浅克隆中，如果原型对象的成员变量是值类型，将复制一份给克隆对象；如果原型对象的成员变量是引用类型，则将引用对象的地址复制一份给克隆对象，也就是说原型对象和克隆对象的成员变量指向相同的内存地址。简单来说，在浅克隆中，当对象被复制时只复制它本身和其中包含的值类型的成员变量，而引用类型的成员对象并没有复制，如图所示：

![这里写图片描述](http://img.blog.csdn.net/20170320145743115?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

例如：

```
var obj = { a:1, arr: [2,3] };
var shadowObj = shadowCopy(obj);

function shadowCopy(src) {
  var dst = {};
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      dst[prop] = src[prop];
    }
  }
  return dst;
}

```
![这里写图片描述](http://img.blog.csdn.net/20170320151224281?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
【来源于知乎】

导致的结果就是修改了复制对象引用的函数，那么原对象也就变了。
```
shadowObj.arr[1] = 5;
obj.arr[1]   // = 5
```
##深克隆
在深克隆中，无论原型对象的成员变量是值类型还是引用类型，都将复制一份给克隆对象，深克隆将原型对象的所有引用对象也复制一份给克隆对象。简单来说，在深克隆中，除了对象本身被复制外，对象所包含的所有成员变量也将复制，如图所示：

![这里写图片描述](http://img.blog.csdn.net/20170320151532217?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

而深复制则不同，它不仅将原对象的各个属性逐个复制出去，而且将原对象各个属性所包含的对象也依次采用深复制的方法递归复制到新对象上。这就不会存在上面 obj 和 shadowObj 的 arr 属性指向同一个对象的问题。
![这里写图片描述](http://img.blog.csdn.net/20170320152201624?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2luYXRfMjUxMjcwNDc=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

##深克隆实现方法

```
var cloneObj = function(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
};

//https://www.zhihu.com/question/23031215/answer/31944721
//来源：知乎

```