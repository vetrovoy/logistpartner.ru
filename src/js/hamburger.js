/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
const forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

const hamburgers = document.querySelectorAll(".navbar-toggler");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.querySelector(".hamburger").classList.toggle("is-active");
      },
      false
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const headerCollapse = document.getElementById("header-collapse");
  if (window.innerWidth < 1250) {
    headerCollapse.classList.remove("show");
  }
});