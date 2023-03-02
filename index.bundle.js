/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var shimmer = function shimmer() {
  // I want to switch classes on .contact-details>div
  // this returns an array of the 2nd, and third div children
  var contactDivs = document.querySelectorAll('.contact-details > div:nth-child(n+2):nth-child(-n+3)');
  // console.log(contactDivs, "contactDivs")
  contactDivs.forEach(function (div) {
    // toggle switches back and forth between classes
    div.classList.toggle('non-shimmer');
    div.classList.toggle('shimmer');
  });
};

// ON PAGE LOAD - FADE IN
window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});

// SHIMMER BUTTONS - IMPROVEMENT, HAVE IT WAIT FIVE SECONDS AND THEN SHIMMER EVERY 2 SECONDS - will need to expand code
setInterval(shimmer, 2000); // Run the function every 2 seconds (2000 milliseconds)

var getMonthYear = function getMonthYear() {
  var date = new Date();
  var month = date.getMonth();
  var year = date.getFullYear();
  // return [month, year];
  return [month, year];
};
var returnExperienceString = function returnExperienceString(month, years) {
  var message;
  switch (true) {
    case month >= 12:
      month = month - 12;
      if (month === 0) {
        years++;
        message = "".concat(years, " years experience built so far!");
      } else {
        years++;
        message = "".concat(years, " years and ").concat(month, " months experience built so far!");
      }
      break;
    default:
      message = "".concat(years, " years and ").concat(month, " months experience built so far!");
      break;
  }
  return message;
};
var Language = /*#__PURE__*/function () {
  function Language(name, startMonth, startYear) {
    _classCallCheck(this, Language);
    this.name = name;
    this.startMonth = startMonth;
    this.startYear = startYear;
    this.currentYear = getMonthYear();
    this.gitLink = "<p><a href=\"https://jpatterson933.github.io/Stats-On-Github/\" target=\"_blank\" title=\"My Github Language Stats page created with Javascript - Donut Graphs\"  id=\"gls\" class=\"github-language-stats\" >Github Language Stats</a></p>";
  }

  // function to calculate total experience for years if years are the same experience will return as 0
  _createClass(Language, [{
    key: "calculateExperience",
    value: function calculateExperience() {
      if (this.currentYear[1] === this.startYear) {
        return 0;
      }
      // just assume the start month is 1 so january so anything 12 - 1) - currentMonth
      // no, we would just say x amount of months from experience
      var totalYrExp = this.currentYear[1] - this.startYear;
      var month = this.currentYear[0] + 1 + (12 - this.startMonth);
      return returnExperienceString(month, totalYrExp);
    }
  }, {
    key: "shouldDisplay",
    value: function shouldDisplay(language) {
      var languageCard = $("#languages");

      // we want to append this to a new html element
      var card = "<div id=\"language-card-wrapper\" class=\"fade-in\">\n        ".concat(language.gitLink, "\n        <h1>").concat(language.name, "</h1>\n        <p>").concat(language.calculateExperience(), "</p>\n        <p>\"I love to code\"</p>\n    </div>\n    ");
      languageCard.empty().append(card);

      // Wait a short time for the content to be inserted before triggering the fade-in animation
      setTimeout(function () {
        console.log("test");
        var languageCardWrapper = $("#language-card-wrapper");
        languageCardWrapper.removeClass("fade-in");
        languageCardWrapper.addClass("fade-out");
      }, 1000); // 10 seconds (adjust as needed)
    }
  }]);
  return Language;
}();
;
var createLangHeader = function createLangHeader() {
  var educationPanel = document.querySelector("header > nav"); // grab our nav bar from our html
  var languagesDiv = document.createElement('div'); // Create the div element
  languagesDiv.setAttribute('id', 'languages'); // Set the id attribute of the div element
  var githubStatsLink = document.createElement('a'); // Create the anchor element

  // Set the href, target, title and text content attributes of the anchor element
  githubStatsLink.setAttribute('href', 'https://jpatterson933.github.io/Stats-On-Github/');
  githubStatsLink.setAttribute('target', '_blank');
  githubStatsLink.setAttribute('title', 'My Github Language Stats page created with Javascript');
  githubStatsLink.setAttribute('class', 'initial-github-stats');
  githubStatsLink.textContent = 'Github Language Stats';
  // end creation of anchor element

  setTimeout(function () {
    languagesDiv.classList.add("fade-in");
  }, 10); // fade in text before appending

  languagesDiv.appendChild(githubStatsLink); // Add the anchor element as a child to the div element
  educationPanel.append(languagesDiv); //append to our header > nav
};

// Language classes
var python = new Language('Python', 11, 2022);
var react = new Language('React', 3, 2021);
var html = new Language('HTML5', 1, 2020);
var css = new Language('CSS', 1, 2021);
var javascript = new Language('Javascript', 2, 2021);
var jQuery = new Language('jQuery', 2, 2021);
var bash = new Language('bash Scripting', 10, 2022);
var powershell = new Language('PowerShell', 9, 2022);
var slideShow = function slideShow() {
  var count = false;
  // empty array where we push our languages into
  var languageArray = [];
  // we set our index to -1 so it starts at the first one which is 0
  var languageArrayIndex = -1;
  // push language classes into our array
  languageArray.push(html, css, javascript, jQuery, bash, powershell);
  // interval slide show function
  var slideInterval = setInterval(function () {
    if (count === false) {
      createLangHeader();
      count = true;
    }
    // increase our index (much like increasing i in a for loop)
    ++languageArrayIndex;
    // this says once we get our index to be greater to or equal the length of the array, we'll start back from first number in index [0]
    if (languageArrayIndex >= languageArray.length) {
      languageArrayIndex = 0;
    }
    ;
    // here we are basically reversing the push that was done earlier and assigning each class
    var language = languageArray[languageArrayIndex];

    // the we run the shouldDisplay that is inside the language classes
    language.shouldDisplay(language);
    // set interval time below
  }, 2500);
  return slideInterval;
};
slideShow();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOztJQUVoRDtJQUNBaEMsUUFBUSxDQUFDRCxhQUFhLENBQUNDLFFBQVEsQ0FBQztJQUNoQztFQUNKLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDUixPQUFPa0MsYUFBYTtBQUN4QixDQUFDO0FBRURMLFNBQVMsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2Nzcy9yZXNldC5jc3M/NTkzNiIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvY3NzL3N0eWxlLmNzcz82YjdiIiwid2VicGFjazovL3Jlc3VtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN1bWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vY3NzL3Jlc2V0LmNzcydcclxuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IHNoaW1tZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBJIHdhbnQgdG8gc3dpdGNoIGNsYXNzZXMgb24gLmNvbnRhY3QtZGV0YWlscz5kaXZcclxuICAgIC8vIHRoaXMgcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgMm5kLCBhbmQgdGhpcmQgZGl2IGNoaWxkcmVuXHJcbiAgICBsZXQgY29udGFjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFjdC1kZXRhaWxzID4gZGl2Om50aC1jaGlsZChuKzIpOm50aC1jaGlsZCgtbiszKScpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb250YWN0RGl2cywgXCJjb250YWN0RGl2c1wiKVxyXG4gICAgY29udGFjdERpdnMuZm9yRWFjaChkaXYgPT4ge1xyXG4gICAgICAgIC8vIHRvZ2dsZSBzd2l0Y2hlcyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIGNsYXNzZXNcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uLXNoaW1tZXInKTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LnRvZ2dsZSgnc2hpbW1lcicpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4vLyBPTiBQQUdFIExPQUQgLSBGQURFIElOXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xyXG59KTtcclxuXHJcbi8vIFNISU1NRVIgQlVUVE9OUyAtIElNUFJPVkVNRU5ULCBIQVZFIElUIFdBSVQgRklWRSBTRUNPTkRTIEFORCBUSEVOIFNISU1NRVIgRVZFUlkgMiBTRUNPTkRTIC0gd2lsbCBuZWVkIHRvIGV4cGFuZCBjb2RlXHJcbnNldEludGVydmFsKHNoaW1tZXIsIDIwMDApOyAvLyBSdW4gdGhlIGZ1bmN0aW9uIGV2ZXJ5IDIgc2Vjb25kcyAoMjAwMCBtaWxsaXNlY29uZHMpXHJcblxyXG5jb25zdCBnZXRNb250aFllYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIC8vIHJldHVybiBbbW9udGgsIHllYXJdO1xyXG4gICAgcmV0dXJuIFttb250aCwgeWVhcl1cclxufVxyXG5jb25zdCByZXR1cm5FeHBlcmllbmNlU3RyaW5nID0gKG1vbnRoLCB5ZWFycykgPT4ge1xyXG4gICAgbGV0IG1lc3NhZ2U7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIG1vbnRoID49IDEyOlxyXG4gICAgICAgICAgICBtb250aCA9IG1vbnRoIC0gMTI7XHJcbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgeWVhcnMrKztcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgJHt5ZWFyc30geWVhcnMgZXhwZXJpZW5jZSBidWlsdCBzbyBmYXIhYDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHllYXJzKys7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gYCR7eWVhcnN9IHllYXJzIGFuZCAke21vbnRofSBtb250aHMgZXhwZXJpZW5jZSBidWlsdCBzbyBmYXIhYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBtZXNzYWdlID0gYCR7eWVhcnN9IHllYXJzIGFuZCAke21vbnRofSBtb250aHMgZXhwZXJpZW5jZSBidWlsdCBzbyBmYXIhYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVzc2FnZTtcclxufTtcclxuXHJcblxyXG5jbGFzcyBMYW5ndWFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBzdGFydE1vbnRoLCBzdGFydFllYXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhcnRNb250aCA9IHN0YXJ0TW9udGg7XHJcbiAgICAgICAgdGhpcy5zdGFydFllYXIgPSBzdGFydFllYXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50WWVhciA9IGdldE1vbnRoWWVhcigpO1xyXG4gICAgICAgIHRoaXMuZ2l0TGluayA9IGA8cD48YSBocmVmPVwiaHR0cHM6Ly9qcGF0dGVyc29uOTMzLmdpdGh1Yi5pby9TdGF0cy1Pbi1HaXRodWIvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJNeSBHaXRodWIgTGFuZ3VhZ2UgU3RhdHMgcGFnZSBjcmVhdGVkIHdpdGggSmF2YXNjcmlwdCAtIERvbnV0IEdyYXBoc1wiICBpZD1cImdsc1wiIGNsYXNzPVwiZ2l0aHViLWxhbmd1YWdlLXN0YXRzXCIgPkdpdGh1YiBMYW5ndWFnZSBTdGF0czwvYT48L3A+YFxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0b3RhbCBleHBlcmllbmNlIGZvciB5ZWFycyBpZiB5ZWFycyBhcmUgdGhlIHNhbWUgZXhwZXJpZW5jZSB3aWxsIHJldHVybiBhcyAwXHJcbiAgICBjYWxjdWxhdGVFeHBlcmllbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRZZWFyWzFdID09PSB0aGlzLnN0YXJ0WWVhcikgeyByZXR1cm4gMCB9XHJcbiAgICAgICAgLy8ganVzdCBhc3N1bWUgdGhlIHN0YXJ0IG1vbnRoIGlzIDEgc28gamFudWFyeSBzbyBhbnl0aGluZyAxMiAtIDEpIC0gY3VycmVudE1vbnRoXHJcbiAgICAgICAgLy8gbm8sIHdlIHdvdWxkIGp1c3Qgc2F5IHggYW1vdW50IG9mIG1vbnRocyBmcm9tIGV4cGVyaWVuY2VcclxuICAgICAgICBsZXQgdG90YWxZckV4cCA9IHRoaXMuY3VycmVudFllYXJbMV0gLSB0aGlzLnN0YXJ0WWVhcjtcclxuICAgICAgICBsZXQgbW9udGggPSB0aGlzLmN1cnJlbnRZZWFyWzBdICsgMSArICgxMiAtIHRoaXMuc3RhcnRNb250aClcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldHVybkV4cGVyaWVuY2VTdHJpbmcobW9udGgsIHRvdGFsWXJFeHApXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkRGlzcGxheShsYW5ndWFnZSkge1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlQ2FyZCA9ICQoXCIjbGFuZ3VhZ2VzXCIpO1xyXG5cclxuICAgICAgICAvLyB3ZSB3YW50IHRvIGFwcGVuZCB0aGlzIHRvIGEgbmV3IGh0bWwgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBgPGRpdiBpZD1cImxhbmd1YWdlLWNhcmQtd3JhcHBlclwiIGNsYXNzPVwiZmFkZS1pblwiPlxyXG4gICAgICAgICR7bGFuZ3VhZ2UuZ2l0TGlua31cclxuICAgICAgICA8aDE+JHtsYW5ndWFnZS5uYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+JHtsYW5ndWFnZS5jYWxjdWxhdGVFeHBlcmllbmNlKCl9PC9wPlxyXG4gICAgICAgIDxwPlwiSSBsb3ZlIHRvIGNvZGVcIjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgICAgICBsYW5ndWFnZUNhcmQuZW1wdHkoKS5hcHBlbmQoY2FyZCk7XHJcblxyXG4gICAgICAgIC8vIFdhaXQgYSBzaG9ydCB0aW1lIGZvciB0aGUgY29udGVudCB0byBiZSBpbnNlcnRlZCBiZWZvcmUgdHJpZ2dlcmluZyB0aGUgZmFkZS1pbiBhbmltYXRpb25cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlQ2FyZFdyYXBwZXIgPSAkKFwiI2xhbmd1YWdlLWNhcmQtd3JhcHBlclwiKTtcclxuICAgICAgICAgICAgbGFuZ3VhZ2VDYXJkV3JhcHBlci5yZW1vdmVDbGFzcyhcImZhZGUtaW5cIik7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlQ2FyZFdyYXBwZXIuYWRkQ2xhc3MoXCJmYWRlLW91dFwiKTtcclxuICAgICAgICB9LCAxMDAwKTsgLy8gMTAgc2Vjb25kcyAoYWRqdXN0IGFzIG5lZWRlZClcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZUxhbmdIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlZHVjYXRpb25QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgPiBuYXZcIikgICAvLyBncmFiIG91ciBuYXYgYmFyIGZyb20gb3VyIGh0bWxcclxuICAgIGNvbnN0IGxhbmd1YWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRpdiBlbGVtZW50XHJcbiAgICBsYW5ndWFnZXNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdsYW5ndWFnZXMnKTsgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIGRpdiBlbGVtZW50XHJcbiAgICBjb25zdCBnaXRodWJTdGF0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7ICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBhbmNob3IgZWxlbWVudFxyXG5cclxuICAgIC8vIFNldCB0aGUgaHJlZiwgdGFyZ2V0LCB0aXRsZSBhbmQgdGV4dCBjb250ZW50IGF0dHJpYnV0ZXMgb2YgdGhlIGFuY2hvciBlbGVtZW50XHJcbiAgICBnaXRodWJTdGF0c0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vanBhdHRlcnNvbjkzMy5naXRodWIuaW8vU3RhdHMtT24tR2l0aHViLycpO1xyXG4gICAgZ2l0aHViU3RhdHNMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xyXG4gICAgZ2l0aHViU3RhdHNMaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnTXkgR2l0aHViIExhbmd1YWdlIFN0YXRzIHBhZ2UgY3JlYXRlZCB3aXRoIEphdmFzY3JpcHQnKTtcclxuICAgIGdpdGh1YlN0YXRzTGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luaXRpYWwtZ2l0aHViLXN0YXRzJyk7XHJcbiAgICBnaXRodWJTdGF0c0xpbmsudGV4dENvbnRlbnQgPSAnR2l0aHViIExhbmd1YWdlIFN0YXRzJztcclxuICAgIC8vIGVuZCBjcmVhdGlvbiBvZiBhbmNob3IgZWxlbWVudFxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBsYW5ndWFnZXNEaXYuY2xhc3NMaXN0LmFkZChcImZhZGUtaW5cIik7fSwgMTApOyAvLyBmYWRlIGluIHRleHQgYmVmb3JlIGFwcGVuZGluZ1xyXG4gICAgXHJcbiAgICBsYW5ndWFnZXNEaXYuYXBwZW5kQ2hpbGQoZ2l0aHViU3RhdHNMaW5rKTsgIC8vIEFkZCB0aGUgYW5jaG9yIGVsZW1lbnQgYXMgYSBjaGlsZCB0byB0aGUgZGl2IGVsZW1lbnRcclxuICAgIGVkdWNhdGlvblBhbmVsLmFwcGVuZChsYW5ndWFnZXNEaXYpICAgICAgICAgLy9hcHBlbmQgdG8gb3VyIGhlYWRlciA+IG5hdlxyXG59XHJcblxyXG4vLyBMYW5ndWFnZSBjbGFzc2VzXHJcbmNvbnN0IHB5dGhvbiA9IG5ldyBMYW5ndWFnZSgnUHl0aG9uJywgMTEsIDIwMjIpXHJcbmNvbnN0IHJlYWN0ID0gbmV3IExhbmd1YWdlKCdSZWFjdCcsIDMsIDIwMjEpXHJcbmNvbnN0IGh0bWwgPSBuZXcgTGFuZ3VhZ2UoJ0hUTUw1JywgMSwgMjAyMCk7XHJcbmNvbnN0IGNzcyA9IG5ldyBMYW5ndWFnZSgnQ1NTJywgMSwgMjAyMSk7XHJcbmNvbnN0IGphdmFzY3JpcHQgPSBuZXcgTGFuZ3VhZ2UoJ0phdmFzY3JpcHQnLCAyLCAyMDIxKTtcclxuY29uc3QgalF1ZXJ5ID0gbmV3IExhbmd1YWdlKCdqUXVlcnknLCAyLCAyMDIxKTtcclxuY29uc3QgYmFzaCA9IG5ldyBMYW5ndWFnZSgnYmFzaCBTY3JpcHRpbmcnLCAxMCwgMjAyMik7XHJcbmNvbnN0IHBvd2Vyc2hlbGwgPSBuZXcgTGFuZ3VhZ2UoJ1Bvd2VyU2hlbGwnLCA5LCAyMDIyKTtcclxuXHJcbmNvbnN0IHNsaWRlU2hvdyA9ICgpID0+IHtcclxuICAgIGxldCBjb3VudCA9IGZhbHNlO1xyXG4gICAgLy8gZW1wdHkgYXJyYXkgd2hlcmUgd2UgcHVzaCBvdXIgbGFuZ3VhZ2VzIGludG9cclxuICAgIGNvbnN0IGxhbmd1YWdlQXJyYXkgPSBbXTtcclxuICAgIC8vIHdlIHNldCBvdXIgaW5kZXggdG8gLTEgc28gaXQgc3RhcnRzIGF0IHRoZSBmaXJzdCBvbmUgd2hpY2ggaXMgMFxyXG4gICAgbGV0IGxhbmd1YWdlQXJyYXlJbmRleCA9IC0xO1xyXG4gICAgLy8gcHVzaCBsYW5ndWFnZSBjbGFzc2VzIGludG8gb3VyIGFycmF5XHJcbiAgICBsYW5ndWFnZUFycmF5LnB1c2goaHRtbCwgY3NzLCBqYXZhc2NyaXB0LCBqUXVlcnksIGJhc2gsIHBvd2Vyc2hlbGwpO1xyXG4gICAgLy8gaW50ZXJ2YWwgc2xpZGUgc2hvdyBmdW5jdGlvblxyXG4gICAgY29uc3Qgc2xpZGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAoY291bnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUxhbmdIZWFkZXIoKVxyXG4gICAgICAgICAgICBjb3VudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluY3JlYXNlIG91ciBpbmRleCAobXVjaCBsaWtlIGluY3JlYXNpbmcgaSBpbiBhIGZvciBsb29wKVxyXG4gICAgICAgICsrbGFuZ3VhZ2VBcnJheUluZGV4O1xyXG4gICAgICAgIC8vIHRoaXMgc2F5cyBvbmNlIHdlIGdldCBvdXIgaW5kZXggdG8gYmUgZ3JlYXRlciB0byBvciBlcXVhbCB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSwgd2UnbGwgc3RhcnQgYmFjayBmcm9tIGZpcnN0IG51bWJlciBpbiBpbmRleCBbMF1cclxuICAgICAgICBpZiAobGFuZ3VhZ2VBcnJheUluZGV4ID49IGxhbmd1YWdlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlQXJyYXlJbmRleCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBoZXJlIHdlIGFyZSBiYXNpY2FsbHkgcmV2ZXJzaW5nIHRoZSBwdXNoIHRoYXQgd2FzIGRvbmUgZWFybGllciBhbmQgYXNzaWduaW5nIGVhY2ggY2xhc3NcclxuICAgICAgICBsZXQgbGFuZ3VhZ2UgPSBsYW5ndWFnZUFycmF5W2xhbmd1YWdlQXJyYXlJbmRleF07XHJcblxyXG4gICAgICAgIC8vIHRoZSB3ZSBydW4gdGhlIHNob3VsZERpc3BsYXkgdGhhdCBpcyBpbnNpZGUgdGhlIGxhbmd1YWdlIGNsYXNzZXNcclxuICAgICAgICBsYW5ndWFnZS5zaG91bGREaXNwbGF5KGxhbmd1YWdlKTtcclxuICAgICAgICAvLyBzZXQgaW50ZXJ2YWwgdGltZSBiZWxvd1xyXG4gICAgfSwgMjUwMCk7XHJcbiAgICByZXR1cm4gc2xpZGVJbnRlcnZhbFxyXG59XHJcblxyXG5zbGlkZVNob3coKSJdLCJuYW1lcyI6WyJzaGltbWVyIiwiY29udGFjdERpdnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZGl2IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJhZGQiLCJzZXRJbnRlcnZhbCIsImdldE1vbnRoWWVhciIsImRhdGUiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInJldHVybkV4cGVyaWVuY2VTdHJpbmciLCJ5ZWFycyIsIm1lc3NhZ2UiLCJjb25jYXQiLCJMYW5ndWFnZSIsIm5hbWUiLCJzdGFydE1vbnRoIiwic3RhcnRZZWFyIiwiX2NsYXNzQ2FsbENoZWNrIiwiY3VycmVudFllYXIiLCJnaXRMaW5rIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjYWxjdWxhdGVFeHBlcmllbmNlIiwidG90YWxZckV4cCIsInNob3VsZERpc3BsYXkiLCJsYW5ndWFnZSIsImxhbmd1YWdlQ2FyZCIsIiQiLCJjYXJkIiwiZW1wdHkiLCJhcHBlbmQiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImxhbmd1YWdlQ2FyZFdyYXBwZXIiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY3JlYXRlTGFuZ0hlYWRlciIsImVkdWNhdGlvblBhbmVsIiwicXVlcnlTZWxlY3RvciIsImxhbmd1YWdlc0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJnaXRodWJTdGF0c0xpbmsiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicHl0aG9uIiwicmVhY3QiLCJodG1sIiwiY3NzIiwiamF2YXNjcmlwdCIsImpRdWVyeSIsImJhc2giLCJwb3dlcnNoZWxsIiwic2xpZGVTaG93IiwiY291bnQiLCJsYW5ndWFnZUFycmF5IiwibGFuZ3VhZ2VBcnJheUluZGV4IiwicHVzaCIsInNsaWRlSW50ZXJ2YWwiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9