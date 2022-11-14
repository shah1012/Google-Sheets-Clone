const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

// Declare a route
fastify.register(cors);
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

fastify.register(require("../controllers/login"), { prefix: "/" });
fastify.register(require("../controllers/signup"), { prefix: "/" });

// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
