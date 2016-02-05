"use strict";
import isArray from "lodash/isArray";
import isObject from "lodash/isObject";
import isString from "lodash/isString";
import isNumber from "lodash/isNumber";
import isBoolean from "lodash/isBoolean";

/**
 * Default responce transformens
 */
export default {
  array(data) {
    return !data ? [] : isArray(data) ? data : [data];
  },
  object(data) {
    if (!data) {
      return {};
    }
    if (isArray(data) || isString(data) || isNumber(data) || isBoolean(data) || !isObject(data)) {
      return { data };
    } else {
      return data;
    }
  }
};
