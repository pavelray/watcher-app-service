const { getMediaByIdService } = require("./services");

exports.getMediaByIdHandler = async function (request, reply) {
  request.log.info("Inside Get Media Handler");
  const response = await getMediaByIdService(request);

  reply.send({
    status: "OK",
    data: {
      ...response,
    },
  });
};
