# `Object`

## `Object.assign()`

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

:::
Object.assign(target, ...sources)

**参数**

  target

    目标对象。
  sources

    源对象。

**返回值**

  目标对象。
:::

## `Object.create()`

`Object.create()` 方法创建一个新对象，使用现有的对象来提供新创建的对象的 `__proto__`。 （请打开浏览器控制台以查看运行结果。）

```js
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```

:::
Object.create(proto[, propertiesObject])

**参数**

  proto

    新创建对象的原型对象。
  sources 可选

    如果没有指定为 `undefined`，则是要添加到新创建对象的可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。这些属性对应 `Object.defineProperties()` 的第二个参数。

**返回值**

  一个新对象，带着指定的原型对象和属性。
:::

## `Object.defineProperties()`

`Object.defineProperties()` 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

:::
Object.defineProperties(obj, props)

**参数**

  obj

    在其上定义或修改属性的对象。
  props 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符（更多详情，请参阅 `Object.defineProperty()` ）。描述符具有以下键：

    `configurable` true 当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。默认为 false。
    `enumerable` true 当且仅当在枚举相应对象上的属性时该属性显现。默认为 false。
    `value` 与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等） 默认为 undefined。
    `writable` true true当且仅当与该属性相关联的值可以用assignment operator改变时。默认为 false。
    `get` 作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。默认为 undefined。
    `set` 作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。默认为 undefined。

**返回值**

  传递给函数的对象。
:::

## `Object.defineProperty()`

`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

```js
var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

:::
Object.defineProperty(obj, prop, descriptor)

**参数**

  obj

    在其上定义或修改属性的对象。
  prop

    要定义或修改的属性的名称。

  descriptor

    将被定义或修改的属性描述符。

**返回值**

  传递给函数的对象。
:::

## `Object.entries()`

`Object.entries()` 方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in` 循环遍历该对象时返回的顺序一致（区别在于 `for-in` 循环也枚举原型链中的属性）。

```js
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed
```

:::
Object.entries(obj)

**参数**

  obj

    可以返回其可枚举属性的键值对的对象。

**返回值**

  给定对象自身可枚举属性的键值对数组。
:::

## `Object.freeze()`

`Object.freeze()` 方法可以冻结一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

```js
const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42
```

:::
Object.freeze(obj)

**参数**

  obj

    要被冻结的对象。

**返回值**

  被冻结的对象。
:::

## `Object.fromEntries()`

`Object.fromEntries()` 方法把键值对列表转换为一个对象。

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

:::
Object.fromEntries(iterable);

**参数**

  iterable

    可迭代对象，类似 `Array` 、 `Map` 或者其它实现了可迭代协议的对象。

**返回值**

  一个由该迭代对象条目提供对应属性的新对象。
:::

## `Object.getOwnPropertyDescriptor()`

`Object.getOwnPropertyDescriptor()` 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

```js
var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d {
//   value: 8675309,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

:::
Object.getOwnPropertyDescriptor(obj, prop)

**参数**

  obj

    需要查找的目标对象。

  prop

    目标对象内属性名称。

**返回值**

  如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。
:::

## `Object.getOwnPropertyDescriptors()`

`Object.getOwnPropertyDescriptors()` 方法用来获取一个对象的所有自身属性的描述符。

:::
Object.getOwnPropertyDescriptors(obj)

**参数**

  obj

    任意对象。

**返回值**

  所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象。
:::

## `Object.getOwnPropertyNames()`

`Object.getOwnPropertyNames()` 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。

:::
Object.getOwnPropertyNames(obj)

**参数**

  obj

    一个对象，其自身的可枚举和不可枚举属性的名称被返回。

**返回值**

  在给定对象上找到的自身属性对应的字符串数组。
:::

## `Object.getOwnPropertySymbols()`

`Object.getOwnPropertySymbols()` 方法返回一个给定对象自身的所有 Symbol 属性的数组。

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```

:::
Object.getOwnPropertySymbols(obj)

**参数**

  obj

    要返回 Symbol 属性的对象。

**返回值**

  在给定对象自身上找到的所有 Symbol 属性的数组。
:::

## `Object.getPrototypeOf()`

`Object.getPrototypeOf()` 方法返回指定对象的原型（内部[ [Prototype] ]属性的值）。

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true
```

:::
Object.getOwnPropertySymbols(obj)

**参数**

  obj

    要返回其原型的对象。

**返回值**

  给定对象的原型。如果没有继承属性，则返回 null 。
:::

## `Object.is()`

`Object.is()` 方法判断两个值是否是相同的值。

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(0, +0);            // true
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

:::
Object.is(value1, value2)

**参数**

  value1

    第一个需要比较的值。

  value2

    第二个需要比较的值。

**返回值**

  表示两个参数是否相同的布尔值 。
:::

## `Object.isExtensible()`

`Object.isExtensible()` 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

```js
// 新对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty); // === true

// ...可以变的不可扩展.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

:::
Object.isExtensible(obj)

**参数**

  obj

    需要检测的对象。

**返回值**

  表示给定对象是否可扩展的一个Boolean 。
:::

## `Object.isSealed()`

`Object.isSealed()` 方法判断一个对象是否被密封。

```js
// 新建的对象默认不是密封的.
var empty = {};
Object.isSealed(empty); // === false

// 如果你把一个空对象变的不可扩展,则它同时也会变成个密封对象.
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 但如果这个对象不是空对象,则它不会变成密封对象,因为密封对象的所有自身属性必须是不可配置的.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// 如果把这个属性变的不可配置,则这个对象也就成了密封对象.
Object.defineProperty(hasProp, "fee", { configurable: false });
Object.isSealed(hasProp); // === true

// 最简单的方法来生成一个密封对象,当然是使用Object.seal.
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// 一个密封对象同时也是不可扩展的.
Object.isExtensible(sealed); // === false

// 一个密封对象也可以是一个冻结对象,但不是必须的.
Object.isFrozen(sealed); // === true ，所有的属性都是不可写的
var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false， 属性"p"可写

var s3 = Object.seal({ get p() { return 0; } });
Object.isFrozen(s3); // === true ，访问器属性不考虑可写不可写,只考虑是否可配置
```

:::
Object.isSealed(obj)

**参数**

  obj

    需要检测的对象。

**返回值**

  表示给定对象是否被密封的一个Boolean 。
:::

## `Object.keys()`

`Object.keys()` 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 `for...in` 循环遍历该对象时返回的顺序一致 。如果对象的键-值都不可枚举，那么将返回由键组成的数组。

```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

:::
Object.keys(obj)

**参数**

  obj

    要返回其枚举自身属性的对象。

**返回值**

  一个表示给定对象的所有可枚举属性的字符串数组。
:::

## `Object.preventExtensions()`

`Object.preventExtensions()` 方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

```js
// Object.preventExtensions将原对象变的不可扩展,并且返回原对象.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的.
var empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变.
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用Object.defineProperty方法为一个不可扩展的对象添加新属性会抛出异常.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出TypeError异常

// 在严格模式中,为一个不可扩展对象的新属性赋值会抛出TypeError异常.
function fail()
{
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}
fail();

// 一个不可扩展对象的原型是不可更改的,__proto__是个非标准魔法属性,可以更改一个对象的原型.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // 抛出TypeError异常
```

:::
Object.preventExtensions(obj)

**参数**

  obj

    将要变得不可扩展的对象。

**返回值**

  已经不可扩展的对象。
:::

## `hasOwnProperty`

`hasOwnProperty()` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是是否有指定的键）

```js
o = new Object();
o.prop = 'exists';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // 返回 true
changeO();
o.hasOwnProperty('prop');   // 返回 false
```

:::
obj.hasOwnProperty(prop)

**参数**

  prop

    要检测的属性  字符串 名称或者 Symbol。

**返回值**

  用来判断某个对象是否含有指定的属性的 Boolean 。
:::

## `isPrototypeOf`

`isPrototypeOf()` 方法用于测试一个对象是否存在于另一个对象的原型链上。

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

:::
prototypeObj.isPrototypeOf(object)

**参数**

  object

    在该对象的原型链上搜寻。

**返回值**

  Boolean，表示调用对象是否在另一个对象的原型链上。
:::

## `propertyIsEnumerable`

`propertyIsEnumerable()` 方法返回一个布尔值，表示指定的属性是否可枚举。

```js
var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');   //  返回 true
a.propertyIsEnumerable(0);        // 返回 true
```

:::
obj.propertyIsEnumerable(prop)

**参数**

  prop

    需要测试的属性名。

**返回值**

  用来表示指定的属性名是否可枚举的Boolean 。
:::

## `toLocaleString`

`toLocaleString()` 方法返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。

```js
var o = {};
var a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop');   //  返回 true
a.propertyIsEnumerable(0);        // 返回 true
```

:::
obj.toLocaleString()

**返回值**

  表示对象的字符串。
:::

## `toString`

`toString()` 方法返回一个表示该对象的字符串。

```js
function Dog(name) {
  this.name = name;
}

var dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return '' + this.name;
}

console.log(dog1.toString());
// expected output: "Gabby"
```

:::
obj.toString()

**返回值**

  一个表示该对象的字符串。
:::

## `valueOf`

`valueOf()` 方法返回指定对象的原始值。

```js
// Array：返回数组对象本身
var array = ["ABC", true, 12, -5];
console.log(array.valueOf() === array);   // true

// Date：当前时间距1970年1月1日午夜的毫秒数
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.valueOf());   // 1376838719230

// Number：返回数字值
var num =  15.26540;
console.log(num.valueOf());   // 15.2654

// 布尔：返回布尔值true或false
var bool = true;
console.log(bool.valueOf() === bool);   // true

// new一个Boolean对象
var newBool = new Boolean(true);
// valueOf()返回的是true，两者的值相等
console.log(newBool.valueOf() == newBool);   // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool);   // false

// Function：返回函数本身
function foo(){}
console.log( foo.valueOf() === foo );   // true
var foo2 =  new Function("x", "y", "return x + y;");
console.log( foo2.valueOf() );
/*
ƒ anonymous(x,y
) {
return x + y;
}
*/

// Object：返回对象本身
var obj = {name: "张三", age: 18};
console.log( obj.valueOf() === obj );   // true

// String：返回字符串值
var str = "http://www.xyz.com";
console.log( str.valueOf() === str );   // true

// new一个字符串对象
var str2 = new String("http://www.xyz.com");
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log( str2.valueOf() === str2 );   // false
```

:::
object.valueOf()

**返回值**

  返回值为该对象的原始值。
:::

## `Object.seal()`

`Object.seal()` 方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。

```js
const object1 = {
  property1: 42
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
```

:::
Object.seal(obj)

**参数**

  obj

    将要被密封的对象。

**返回值**

  被密封的对象。
:::

## `Object.seal()`

`Object.setPrototypeOf()` 方法设置一个指定的对象的原型 ( 即, 内部[ [Prototype] ]属性）到另一个对象或  null。

::: warning 警告
由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [ [Prototype] ]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 obj.__proto__ = ... 语句上的时间花费，而且可能会延伸到任何代码，那些可以访问任何[ [Prototype] ]已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 [ [Prototype] ]。相反，你应该使用 `Object.create()` 来创建带有你想要的[ [Prototype] ]的新对象。
:::

```js
var dict = Object.setPrototypeOf({}, null);
```

:::
Object.setPrototypeOf(obj, prototype)

**参数**

  obj

    要设置其原型的对象。

  prototype

    该对象的新原型(一个对象 或 null)。
:::

## `Object.values()`

`Object.values()` 方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

:::
Object.values(obj)

**参数**

  obj

    被返回可枚举属性值的对象。

**返回值**

  一个包含对象自身的所有可枚举属性值的数组。
:::
