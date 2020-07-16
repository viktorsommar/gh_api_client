## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

### .forEach

The **forEach()** methode executes a provided function once for each array elemeent

##### Syntax

```
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
```

forEach() calls a provided callback function once for each element in an array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized.

*Source*: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


## .map

The **map()** method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

**Note**: map() does not execute the function for array elements without values.

**Note**: this method does not change the original array.

#### Syntax
```
array.map(function(currentValue, index, arr), thisValue)
```

*Source*: https://www.w3schools.com/jsref/jsref_map.asp#:~:text=The%20map()%20method%20creates,function%20for%20every%20array%20element.&text=Note%3A%20map()%20does%20not,for%20array%20elements%20without%20values.

## .find

The **find()** method returns the value of the first element in the provided array that satisfies the provided testing function.

#### Syntax
```
arr.find(callback(element[, index[, array]])[, thisArg])
```

The find method executes the callback function once for each index of the array until the callback returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.

*Source*: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.
