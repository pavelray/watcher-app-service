const { COMMON_CONSTANTS } = require("../utils/common");
const Movie = require("./Movie");
const Person = require("./Person");
const TvSeries = require("./TvSeries");

const MEDIA_TYPE = {
    [COMMON_CONSTANTS.MEDIA_TYPE.MOVIE] : Movie,
    [COMMON_CONSTANTS.MEDIA_TYPE.TV] : TvSeries,
    [COMMON_CONSTANTS.MEDIA_TYPE.PERSON]: Person
}
// This is Media Factory Class
class MediaFactory {
  createMedia(type, media) {
    const mediaFactory = MEDIA_TYPE[type];
    const mediaObj = new mediaFactory(media);
    mediaObj.getAllImages(media.images);
    return mediaObj;
  }
}


module.exports = MediaFactory;