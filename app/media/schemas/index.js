const { COMMON_CONSTANTS } = require("../../../utils/common");

exports.getMediaByIdSchema = {
  querystring: {
    type: "object",
    properties: {},
    additionalProperties: false,
  },
  body: {
    type: "object",
    required: ["mediaType"],
    properties: {
      mediaType: {
        enum: Object.values(COMMON_CONSTANTS.MEDIA_TYPE),
        description: "Media Type can be either Person, Tv or Movie",
      },
    },
  },
};
