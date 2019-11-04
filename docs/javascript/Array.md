# `Array`

## `Array.from`

`Array.from()` 方法从一个类似数组或可迭代对象中创建一个新的，浅拷贝的数组实例。

```js
console.log(Array.from('foo'))
// expected output: Array ['f', 'o', 'o']

console.log(Array.from([1, 2, 3], x => x + x))
// expected output: Array [2, 4, 6]
```

:::
Array.from(arrayLike[, mapFn[, thisArg]])

**参数**

  `arrayLike`

    想要转换成数组的伪数组对象或可迭代对象。
  `mapFn` 可选

    如果指定了该参数，新数组中的每个元素会执行该回调函数。
  `thisArg` 可选

    执行回调函数 `mapFn` 时 `this` 对象。

**返回值**

  一个新的数组实例。
:::

## `Array.isArray`

`Array.isArray()` 用于确定传递的值是否是一个 Array。

```js
Array.isArray([1, 2, 3]);
// true
Array.isArray({foo: 123});
// false
Array.isArray("foobar");
// false
Array.isArray(undefined);
// false
```

:::
Array.isArray(obj)

**参数**

  `obj`

    需要检测的值。

**返回值**

  如果对象是 `Array`，则为 `true`; 否则为 `false`。
:::

```js
// polyfill
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
}
```

## `Array.of`

`Array.of()` 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

```js
Array.of(7)       // [7]
Array.of(1, 2, 3) // [1, 2, 3]
```

:::
Array.of(element0[, element1[, ...[, elementN]]])

**参数**

  `elementN`

    任意个参数，将按顺序成为返回数组中的元素。

**返回值**

  新的 `Array` 实例。
:::

```js
// polyfill
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments)
  }
}
```

## `concat`

`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```js
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2))
// expected output: Array ['a', 'b', 'c', 'd', 'e', 'f']
```

::: tip
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

**参数**

  `valueN` 可选

    将数组和/或值连接成新数组。详情请参阅下文描述。

**返回值**

  新的 `Array` 实例。
:::

## `copyWithin`

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

```js
const array1 = ['a', 'b', 'c', 'd', 'e']

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4))
// expected output: Array ['d', 'b', 'c', 'd', 'e']

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3))
// expected output: Array ['d', 'd', 'e', 'd', 'e']
```

:::
arr.copyWithin(target[, start[, end]])

**参数**

  `target`

    `0` 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。如果 `target` 大于等于 `arr.length`，将会不发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。

  `start`

    `0` 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。 如果 `start` 被忽略，`copyWithin` 将会从0开始复制。

  `end`

    `0` 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。如果是负数， `end` 将从末尾开始计算。 如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）。

**返回值**

  改变后的数组。
:::

## `entries`

`entries()` 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。

```js
const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value)
// expected output: Array [0, 'a']

console.log(iterator1.next().value)
// expected output: Array [1, 'b']
```

## `every`

`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40
}

var array1 = [1, 30, 39, 29, 10, 13]

console.log(array1.every(isBelowThreshold))
// expected output: true
```

:::
arr.every(callback(element[, index[, array]])[, thisArg])

**参数**

  `callback` 用来测试每个元素的函数，它可以接收三个参数：

    `element` 用于测试的当前值。

    `index` 可选 用于测试的当前值的索引。

    `array` 可选 调用 `every` 的当前数组。

  `thisArg`

    执行 `callback` 时使用的 `this` 值。

**返回值**

  如果回调函数的每一次返回都为 `truthy` 值，返回 `true` ，否则返回 `false`。
:::

## `fill`

`fill()` 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

:::
arr.fill(value[, start[, end]])

**参数**

  `value`

    用来填充数组元素的值。
  `start` 可选

    起始索引，默认值为0。
  `end` 可选

    终止索引，默认值为 this.length。

**返回值**

  修改后的数组。
:::

## `filter`

`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

```js
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

:::
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

**参数**

  `callback` 用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：

    `element` 数组中当前正在处理的元素。
    `index` 可选 正在处理的元素在数组中的索引。
    `array` 可选 调用了 `filter` 的数组本身。

  `thisArg` 可选 执行 `callback` 时，用于 `this` 的值。

**返回值**

  一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。
:::

## `find`

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

```js
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
```

:::
arr.find(callback[, thisArg])

**参数**

  `callback` 在数组每一项上执行的函数，接收 3 个参数：

    `element` 当前遍历到的元素。
    `index` 可选 当前遍历到的索引。
    `array` 可选 数组本身。

  `thisArg` 可选 执行回调时用作 `this` 的对象。

**返回值**

  数组中第一个满足所提供测试函数的元素的值，否则返回 `undefined`。
:::

## `findIndex`

`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

```js
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

:::
arr.findIndex(callback(element[, index[, array]])[, thisArg])

**参数**

  `callback` 针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:

    `element` 当前元素。
    `index` 可选 当前元素的索引。
    `array` 可选 调用 `findIndex` 的数组。

  `thisArg` 可选 执行回调时用作 `this` 的对象。

**返回值**

  数组中满足提供的测试函数的第一个元素的**索引**。否则返回-1。
:::

## `flat`

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity);
// [1, 2, 3, 4, 5, 6]
```

:::
var newArray = arr.flat(depth)

**参数**

  `depth` 可选 指定要提取嵌套数组的结构深度，默认值为 1。

**返回值**

  一个包含将数组与子数组中所有元素的新数组。
:::

## `flatMap`

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 和 深度值1的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些。

```js
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]
```

:::
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
  // 返回新数组的元素
}[, thisArg])

**参数**

  `callback` 可以生成一个新数组中的元素的函数，可以传入三个参数：

    `currentValue` 当前正在数组中处理的元素。
    `index` 可选 数组中正在处理的当前元素的索引。
    `array` 可选 被调用的 `map` 数组。

  `thisArg` 可选 执行回调时用作 `this` 的对象。

**返回值**

  一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth` 值为1。
:::

## `forEach`

`forEach()` 方法对数组的每个元素执行一次提供的函数。

```js
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

:::
arr.forEach(callback(currentValue[, index[, array]])[, thisArg])

**参数**

  `callback` 为数组中每个元素执行的函数，该函数接收三个参数：

    `currentValue` 数组中正在处理的当前元素。
    `index` 可选 数组中正在处理的当前元素的索引。
    `array` 可选 `forEach()` 方法正在操作的数组。

  `thisArg` 可选 执行回调时用作 `this` 的对象。

**返回值**

  `undefined`
:::


## `includes`

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`。

::: waring 注意
对象数组不能使用 `includes` 方法来检测。
:::

```js
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

:::
arr.includes(valueToFind[, fromIndex])

**参数**

  `valueToFind` 需要查找的元素值。

  `fromIndex` 可选 从 `fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。

**返回值**

  返回一个布尔值 `Boolean` ，如果在数组中找到了（如果传入了 `fromIndex` ，表示在 `fromIndex` 指定的索引范围中找到了）则返回 `true` 。
:::

## indexOf

`indexOf()` 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```js
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

:::
arr.indexOf(searchElement[, fromIndex = 0])

**参数**

  `searchElement` 要查找的元素。

  `fromIndex` 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0。

**返回值**

  首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
:::

## join

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

```js
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

:::
arr.join([separator])

**参数**

  `separator` 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果separator是空字符串("")，则所有元素之间都没有任何字符。

**返回值**

  一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。
:::

## keys

`keys()` 方法返回一个包含数组中每个索引键的 `Array Iterator` 对象。

```js
var array1 = ['a', 'b', 'c'];
var iterator = array1.keys();

for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}
```

:::
arr.keys()

**返回值**

  一个新的 `Array` 迭代器对象。
:::

## lastIndexOf

`lastIndexOf()` 方法返回指定元素（也即有效的 `JavaScript` 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 `fromIndex` 处开始。

```js
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1
```

:::
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])

**参数**

  `searchElement` 被查找的元素。

  `fromIndex` 可选 从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

**返回值**

  数组中最后一个元素的索引，如未找到返回-1。
:::

## map

`map()` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

:::
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])

**参数**

  `callback` 生成新数组元素的函数，使用三个参数：

    `currentValue` `callback` 数组中正在处理的当前元素。
    `index` 可选 `callback` 数组中正在处理的当前元素的索引。
    `array` 可选 `callback`  `map` 方法被调用的数组。

  `thisArg` 可选 执行 callback 函数时使用的this 值。

**返回值**

  一个新数组，每个元素都是回调函数的结果。
:::

## pop

`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度。

```js
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

:::
arr.pop()

**返回值**

  从数组中删除的元素(当数组为空时返回undefined)。
:::

## push

`push()` 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```js
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
```

:::
arr.push(element1, ..., elementN)

**参数**

  `elementN` 被添加到数组末尾的元素。

**返回值**

  当调用该方法时，新的 `length` 属性值将被返回。
:::

## `reduce`

`reduce()` 方法对数组中的每个元素执行一个由您提供的 `reducer` 函数(升序执行)，将其结果汇总为单个返回值。

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

:::
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

**参数**

  `callback` 执行数组中每个值的函数，包含四个参数：

    `accumulator` 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 `initialValue`（见于下方）。
    `currentValue` 数组中正在处理的元素。
    `currentIndex` 可选 数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则为1
    `array` 可选 调用 `reduce()` 的数组。

  `initialValue` 可选 作为第一次调用 `callback` 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。

**返回值**

  函数累计处理的结果。
:::

## `reduceRight`

`reduceRight()` 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

```js
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (previousValue, currentValue) => previousValue.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

:::
arr.reduce(callback(previousValue, currentValue[, index[, array]])[, initialValue])

**参数**

  `callback` 执行数组中每个值的函数，包含四个参数：

    `previousValue` 累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或 `initialValue`（见于下方）。
    `currentValue` 数组中正在处理的元素。
    `currentIndex` 可选 数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则为1
    `array` 可选 调用 `reduce()` 的数组。

  `initialValue` 可选 作为第一次调用 `callback` 函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。

**返回值**

  函数累计处理的结果。
:::

## `reverse`

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组。

```js
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse();
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']
```

:::
arr.reverse()
:::

## `shift`

`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```js
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

:::
arr.shift()

**返回值**

  从数组中删除的元素; 如果数组为空则返回 `undefined` 。
:::

## `slice`

`slice()` 方法返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的**浅拷贝**（包括 `begin`，不包括 `end`）。原始数组不会被改变。

```js
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

:::
arr.slice([begin[, end]])

**参数**

  `begin` 可选

    提取起始处的索引，从该索引开始提取原数组元素，默认为 `0`。
    如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
    如果省略 `begin`，则 `slice` 从索引 `0` 开始。
    如果 `begin` 大于原数组的长度，则会返回空数组。

  `end` 可选

    提取终止处的索引，在该索引处结束提取原数组元素，默认为 `0`。`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）。
    `slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 1, 2, 3的元素）。
    如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
    如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。
    如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。

**返回值**

  一个含有被提取元素的新数组。
:::

## `some`

`some()` 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。

```js
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```

:::
arr.some(callback(element[, index[, array]])[, thisArg])

**参数**

  `callback` 用来测试每个元素的函数，接受三个参数：

    `element` 数组中正在处理的元素。
    `index` 可选 数组中正在处理的元素的索引值。
    `array` 可选 `some()` 被调用的数组。

  `thisArg` 可选

    执行 `callback` 时使用的 `this` 值。

**返回值**

  如果回调函数返回至少一个数组元素的 `truthy` 值，则返回 `true`；否则为 `false`。
:::

## `sort`

`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。

```js
var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

:::
arr.sort([compareFunction])

**参数**

  `compareFunction` 可选 用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。

    `firstEl` 第一个用于比较的元素。
    `secondEl` 第二个用于比较的元素。

**返回值**

  排序后的数组。请注意，数组已原地排序，并且不进行复制。
:::

## `splice`

`splice()` 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```js
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```

:::
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

**参数**

  `start` 指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

  `deleteCount ` 可选

    整数，表示要移除的数组元素的个数。
    如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 start 位）。
    如果 `deleteCount` 被省略了，或者它的值大于等于 `array.length - start` (也就是说，如果它大于或者等于 `start` 之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
    如果 `deleteCount` 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。

  `itemN` 可选

    要添加进数组的元素,从 `start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

**返回值**

  由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
:::

## `toLocaleString`

`toLocaleString()` 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

```js
var array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
var localeString = array1.toLocaleString('en', {timeZone: "UTC"});

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

:::
arr.toLocaleString([locales[, options]]);

**参数**

  `locales` 可选

    带有BCP 47语言标记的字符串或字符串数组，关于locales参数的形式与解释，请看Intl页面。

  `options ` 可选

    一个可配置属性的对象，对于数字 `Number.prototype.toLocaleString()`，对于日期`Date.prototype.toLocaleString()`。

**返回值**

  表示数组元素的字符串。
:::

## `toString`

`toString()` 返回一个字符串，表示指定的数组及其元素。

```js
var array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

:::
arr.toString()

**返回值**

  一个表示指定的数组及其元素的字符串。
:::

## `unshift`

`unshift()` 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**(该方法修改原有数组)。

```js
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```

:::
arr.unshift(element1, ..., elementN)

**参数**

  `elementN`

    要添加到数组开头的元素或多个元素。

**返回值**

  当一个对象调用该方法时，返回其 length 属性值。
:::

## `values`

`values()` 方法返回一个新的 `Array Iterator` 对象，该对象包含数组每个索引的值。

```js
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value); // expected output: "a" "b" "c"
}
```

:::
arr.values()
:::
