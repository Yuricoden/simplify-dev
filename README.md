![alt text](logo.png)
# simplify.js
simplify.js is a powerfull functional JavaScript library.

[Link](https://www.npmjs.com/package/@yuricoden/simplifyjs)



It is a speed-fast library for working with objects and arrays.
Also included are methods for working with functions such as curry,memoize and etc...


[npm-url]: https://img.shields.io/npm/dw/simplifyjs.svg
[Wiki](https://github.com/Yuricoden/simplify-dev/wiki/Methods "review methods") |



Usage:

Connect the script in your browser:
```
<script src="library/simplify.min.js"></script>
```
or add to project 

```
import 'fy' from 'simplify';
```

Try code:
```javascript
        const product = [
          { product: 'bitcoin' },
          { product: 'liteoin'  },
          { product: 'goldcoin' }
        ];

        const coins = [
            {
            name: 'coin',
            value: '32133'
            },
            {
            name: 'coin',
            value: '133'
            },
            {
            name: 'coin',
            value: '767'
            }
        ];

        let result = fy.zip(coins, product, function(coin,product) {
          coin.products = product;
          return coin
        });
```
curry, memoize also is in the assembly

```javascript
      function multiplication(x,y) {
        return x * y
      }
      let fun = fy.curry(add)
      console.log(fun(2)(6))

```





