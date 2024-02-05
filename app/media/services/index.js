const { getMediaByIdRepository } = require("../repository");
const MediaFactory = require("../../../classes/MediaFactory");

exports.getMediaByIdService = async function (request) {
  const { mediaType } = request.body;
  const data = await getMediaByIdRepository(request);
  // Format the Data to Media Object and return media object;
  const response =  new MediaFactory().createMedia(mediaType, data);
  return response;
};
