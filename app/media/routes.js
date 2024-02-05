const { getMediaByIdHandler } = require("./handler");
const { getMediaByIdSchema } = require("./schemas");

async function mediaRoutes(fastify) {
  fastify.route({
    method: "POST",
    url: "/:id",
    schema: getMediaByIdSchema,
    handler: getMediaByIdHandler,
  });
}

module.exports = mediaRoutes;
