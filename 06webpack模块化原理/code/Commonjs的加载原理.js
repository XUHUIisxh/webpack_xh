
// 1、定义对象
var __webpack_modules__ = ({

  "./src/js/formate.js":

    ((module) => {

      const dataFormate = (data) => {
        return '2022-02-10'
      }

      module.exports = {
        dataFormate
      }

    })

});

// 2、定义缓存对象
var __webpack_module_cache__ = {};

// 3、加载函数
// moduleId = "./src/js/formate.js"
function __webpack_require__(moduleId) {

  // 加载 module 是否存在 如果不存在则创建
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }

  /**
   * 对象的连续赋值
   * 1、module = __webpack_module_cache__["./src/js/formate.js"] = { exports:{} }
   * 2、module = { exports:{} }
   * 3、__webpack_module_cache__["./src/js/formate.js"] = { exports:{} }
   * 4、实际上在内存里 让module和__webpack_module_cache__["./src/js/formate.js"]都指向{ exports:{} } 对象
  */
  // Create a new module (and put it into the cache)
  var module = __webpack_module_cache__[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {}
  };

  // 执行module中的函数
  /**
   * 将module传入__webpack_modules__对象中 并且执行函数最后返回module.exports
   * {
   *    "./src/js/formate.js": {
   *        exports:{}
   *    }
   * }
   */
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /**
   * 将module传入__webpack_modules__对象中 并且执行函数最后返回module.exports
   * {
   *    "./src/js/formate.js": {
   *        exports:{dataFormate}
   *    }
   * }
   */

  // 返回执行结果  module中的exports属性 {dataFormate}
  return module.exports;
}


var __webpack_exports__ = {};
// 4、执行函数
(() => {

  const { dataFormate } = __webpack_require__(/*! ./js/formate */ "./src/js/formate.js");

  console.log(dataFormate('abc'))

})();

