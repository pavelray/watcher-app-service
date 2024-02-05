const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};
const dotenv = require("dotenv");
dotenv.config();
const environment = process.env.ENVIRONMENT;

const fastify = require("fastify")({
  logger: envToLogger[environment] ?? true,
});
const PORT = process.env.PORT;

const appRoute = require("./app");

fastify.register(require("@fastify/routes"));
fastify.register(appRoute, { prefix: "/v1" });
const start = () => {
  fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`Server ready at: ${address}`);
  });
};

if (require.main === module) {
  // called directly i.e. "node app"
  start();
} else {
  // required as a module => executed on aws lambda
  module.exports = start;
}
