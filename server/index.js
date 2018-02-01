require('newrelic');
const Koa = require('koa');
const indexRoutes = require('./routes');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const PORT = process.env.PORT || 3000;


app.use(indexRoutes.routes());
app.use(bodyparser());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;



