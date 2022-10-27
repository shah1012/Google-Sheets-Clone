const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.register(require("../controllers/signup"), {prefix: "/"})


// Run the server!
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

