"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationLinks = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _gatsby = require("gatsby");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var linkOrText = function linkOrText(label, link, activeStyle, inactiveStyle) {
  return link ? React.createElement(
    _gatsby.Link,
    { to: link, style: activeStyle },
    label
  ) : React.createElement(
    "span",
    { style: inactiveStyle },
    label
  );
};

var PaginationLinks = exports.PaginationLinks = function PaginationLinks(_ref) {
  var _ref$previousLabel = _ref.previousLabel,
      previousLabel = _ref$previousLabel === undefined ? "← previous" : _ref$previousLabel,
      _ref$nextLabel = _ref.nextLabel,
      nextLabel = _ref$nextLabel === undefined ? "next →" : _ref$nextLabel,
      _ref$pageLabel = _ref.pageLabel,
      pageLabel = _ref$pageLabel === undefined ? "Page: %d" : _ref$pageLabel,
      _ref$separator = _ref.separator,
      separator = _ref$separator === undefined ? " - " : _ref$separator,
      _ref$activeStyle = _ref.activeStyle,
      activeStyle = _ref$activeStyle === undefined ? {} : _ref$activeStyle,
      _ref$inactiveStyle = _ref.inactiveStyle,
      inactiveStyle = _ref$inactiveStyle === undefined ? { textDecorationLine: "line-through", color: "grey" } : _ref$inactiveStyle,
      _ref$pageContext = _ref.pageContext,
      pageNumber = _ref$pageContext.pageNumber,
      humanPageNumber = _ref$pageContext.humanPageNumber,
      skip = _ref$pageContext.skip,
      limit = _ref$pageContext.limit,
      numberOfPages = _ref$pageContext.numberOfPages,
      previousPagePath = _ref$pageContext.previousPagePath,
      nextPagePath = _ref$pageContext.nextPagePath;

  return React.createElement(
    "div",
    { className: "has-text-centered" },
    linkOrText(previousLabel, previousPagePath, activeStyle, inactiveStyle),
    separator,
    pageLabel.replace("%d", humanPageNumber),
    separator,
    linkOrText(nextLabel, nextPagePath)
  );
};