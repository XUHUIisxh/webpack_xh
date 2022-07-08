//定义了一个对象
var __webpack_modules__ = ({

  "./src/js/formate.js":

    ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        "dataFormate": () => (/* binding */ dataFormate)
      });
      const dataFormate = (data) => {
        return '2022-02-10'
      }

    })

});

// 定义了一个对象作为加载模块的缓存
var __webpack_module_cache__ = {};

// 是一个函数，当我们加载一个函数的时候，都会通过这个函数来加载
function __webpack_require__(moduleId) {
  // 1、判断缓存中是否加载过了
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;

  }
  /**
   * module = __webpack_module_cache__['./src/js/formate.js'] =  { export: {}}
   */
  // 2、对象的连续赋值 给module变量 和__webpack_module_cache__['./src/js/formate.js']赋值同一个变量
  var module = __webpack_module_cache__[moduleId] = { exports: {} };

  // 3、开始执行这个模块 传递这三个参数
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // 导出函数
  return module.exports;

}


(() => {
  // 定义导出函数
  __webpack_require__.d = (exports, definition) => {
    // 遍历定义的对象
    for (var key in definition) {
      // 判断当前的值是否在definition中  同时没有在exports中
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        // 通过的话则在 exports对象将该参赋值
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();


(() => {
  // 判断对象obj中是否拥有prop属性
  __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();


(() => {
  __webpack_require__.r = (exports) => {
    /**
     * Symbol.toStringTag 是一个内置 symbol
     * 它通常作为对象的属性键使用，对应的属性值应该为字符串类型
     * 这个字符串用来表示该对象的自定义类型标签，通常只有内置的 Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值里。
     */
    // 1、如果 Symbol 属性存在则试用 Symbol 属性
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

    }
    // 2、不存在则试用 defineProperty 属性
    Object.defineProperty(exports, '__esModule', { value: true });
  };
})();


var __webpack_exports__ = {};

// 具体执行代码函数的位置
(() => {


  const { dataFormate } = __webpack_require__(/*! ./js/formate */ "./src/js/formate.js");

  console.log(dataFormate('abc'))

})();
