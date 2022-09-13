module.exports = (fastify, opts, next) => {
    fastify.post("/login", (req, res) => {
        res.send(req.body)
    })
    next()
}