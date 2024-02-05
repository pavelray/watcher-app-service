const { COMMON_CONSTANTS, CONFIG } = require("../common");

exports.populateRequestUrl = function (
  url,
  mediaType,
  version = COMMON_CONSTANTS.TMDB_CONFIG.DEFAULT_VERSION
) {
  if (!CONFIG.isAppendToResponse)
    return `${COMMON_CONSTANTS.TMDB_CONFIG.API_URL}${version}${url}`;

  return `${COMMON_CONSTANTS.TMDB_CONFIG.API_URL}${version}${url}?${COMMON_CONSTANTS.APPEND_TO_URL[mediaType]}`;
};
exports.getRequestOptions = function (options) {
  const newOptions = {
    ...options,
    accept: "application/json",
    Authorization: `Bearer ${COMMON_CONSTANTS.TMDB_CONFIG.ACCESS_TOKEN}`,
  };

  return {
    headers: {
      ...newOptions,
    },
  };
};
