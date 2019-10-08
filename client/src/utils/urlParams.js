import queryString from "query-string";

// Example of query
// ?category=shirt&price_min=0&price_max=50&order=desc

class UrlParams {
  static getParams(locationSearch) {
    const parsed = queryString.parse(locationSearch);
    return parsed;
  }

  static setParam(paramObject, locationSearch) {
    const existingParams = this.getParams(locationSearch);
    const updatedParams = { ...existingParams, ...paramObject };
    return updatedParams;
  }

  static buildURL(paramsObject) {
    const urlString = queryString.stringify(paramsObject);
    return urlString;
  }
}

export default UrlParams;
