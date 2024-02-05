const fetch = require("node-fetch");
const { populateRequestUrl, getRequestOptions } = require("../../../utils/api");

exports.getMediaByIdRepository = async function (request) {
  const { mediaType } = request.body;
  const { id } = request.params;
  const url = `/${mediaType}/${id}`;
  const fullUrl = populateRequestUrl(url, mediaType);
  const options = getRequestOptions();
  request.log.info(`Calling URL: ${fullUrl}`);
  const response = await fetch(fullUrl, options);
  const data = await response.json();
  return data;
};
