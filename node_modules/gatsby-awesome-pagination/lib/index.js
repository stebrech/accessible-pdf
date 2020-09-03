"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPagePerItem = exports.paginate = undefined;

var _isString = require("lodash/fp/isString");

var _isString2 = _interopRequireDefault(_isString);

var _get = require("lodash/fp/get");

var _get2 = _interopRequireDefault(_get);

var _times = require("lodash/fp/times");

var _times2 = _interopRequireDefault(_times);

var _cloneDeep = require("lodash/fp/cloneDeep");

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _isInteger = require("lodash/fp/isInteger");

var _isInteger2 = _interopRequireDefault(_isInteger);

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paginate = exports.paginate = function paginate(opts) {
  var createPage = opts.createPage,
      items = opts.items,
      itemsPerPage = opts.itemsPerPage,
      itemsPerFirstPage = opts.itemsPerFirstPage,
      pathPrefix = opts.pathPrefix,
      component = opts.component,
      context = opts.context;

  // How many items do we have in total? We use `items.length` here. In fact, we
  // could just accept an integer in the API as the actual contents of `items`
  // is never used.

  var totalItems = items.length;
  // If `itemsPerFirstPage` is specified, use that value for the first page,
  // otherwise use `itemsPerPage`.
  // $FlowExpectError
  var firstPageCount = (0, _isInteger2.default)(itemsPerFirstPage) ? itemsPerFirstPage : itemsPerPage;

  // How many page should we have?
  var numberOfPages =
  // If there are less than `firstPageCount` items, we'll only have 1 page
  totalItems <= firstPageCount ? 1 : Math.ceil((totalItems - firstPageCount) / itemsPerPage) + 1;

  // Iterate as many times as we need pages
  (0, _times2.default)(function (pageNumber) {
    // Create the path for this page
    var path = (0, _utils.paginatedPath)(pathPrefix, pageNumber, numberOfPages);

    // Calculate the path for the previous and next pages
    var previousPagePath = (0, _utils.paginatedPath)(pathPrefix, pageNumber - 1, numberOfPages);
    var nextPagePath = (0, _utils.paginatedPath)(pathPrefix, pageNumber + 1, numberOfPages);

    // Call `createPage()` for this paginated page
    createPage({
      path: path,
      component: component,
      // Clone the passed `context` and extend our new pagination context values
      // on top of it.
      context: Object.assign({}, (0, _cloneDeep2.default)(context), {
        pageNumber: pageNumber,
        humanPageNumber: pageNumber + 1,
        skip: (0, _utils.calculateSkip)(pageNumber, firstPageCount, itemsPerPage),
        limit: pageNumber === 0 ? firstPageCount : itemsPerPage,
        numberOfPages: numberOfPages,
        previousPagePath: previousPagePath,
        nextPagePath: nextPagePath
      })
    });
  })(numberOfPages);
};

var createPagePerItem = exports.createPagePerItem = function createPagePerItem(opts) {
  var createPage = opts.createPage,
      items = opts.items,
      itemToPath = opts.itemToPath,
      itemToId = opts.itemToId,
      component = opts.component;

  // $FlowExpectError

  var getPath = (0, _isString2.default)(itemToPath) ? (0, _get2.default)(itemToPath) : itemToPath;
  // $FlowExpectError
  var getId = (0, _isString2.default)(itemToId) ? (0, _get2.default)(itemToId) : itemToId;

  // We cannot use `forEach()` here because in the FP version of lodash, the
  // iteratee is capped to a single argument, the item itself. We cannot get the
  // item's index in the array. So instead we use `times()` and provide the
  // length of the array.
  (0, _times2.default)(function (index) {
    var item = items[index];
    var path = getPath(item);
    var id = getId(item);

    // NOTE: If there is no previous / next item, we set an empty string as the
    // value for the next and previous path and ID. Gatsby ignores context
    // values which are undefined, so we need these to exist.
    var previousItem = (0, _utils.getPreviousItem)(items, index);
    var previousPath = getPath(previousItem) || "";
    var nextItem = (0, _utils.getNextItem)(items, index);
    var nextPath = getPath(nextItem) || "";

    // Does the item have a `context` field?
    var itemContext = (0, _get2.default)("context")(item) || {};
    var context = Object.assign({}, itemContext, {
      pageId: id,
      previousPagePath: previousPath,
      previousItem: previousItem,
      previousPageId: getId(previousItem) || "",
      nextPagePath: nextPath,
      nextItem: nextItem,
      nextPageId: getId(nextItem) || ""
    });

    // Call `createPage()` for this item
    createPage({
      path: path,
      component: component,
      context: context
    });
  })(items.length);
};