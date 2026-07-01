"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = function c(size) {
  return new Array(size).fill(Symbol.for("react.memo_cache_sentinel"));
};
