import { fastify } from 'fastify'

const app = fastify()

app.listen({ port: 3000, host: '0.0.0.0' }, () => {
  console.log('🚀 Server is running on http://:3000/')
})
