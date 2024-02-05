const firstRoute = require("./first/routes");
const mediaRoutes = require("./media/routes");
module.exports = async (fastify) => {
  fastify.register(firstRoute, { prefix: "/first" });
  fastify.register(mediaRoutes, { prefix: "/media" });
};
