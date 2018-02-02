const Router = require('koa-router');
const router = new Router();
const db = require('../database/csIndex.js');

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
})


router.get('/requests/:areacode', async (ctx) => {
  // console.log(Number(ctx.req.url.split('/')[2]));
  let areaCode = Number(ctx.req.url.split('/')[2])
  try {
    var outcome = await db.getRequestsByAreaCode(areaCode);
    // console.log(outcome);
    ctx.body = outcome.rows;	
  }	catch (err) {
  	console.log(err);
  }
});

router.post('/history', async (ctx) => {
  try {
    console.log(ctx.request.body);
    var outcome = await db.insertRequest(ctx.request.body);
  	// console.log(outcome);
    ctx.status = 201;
  } catch (err) {
  	console.log(err);
  }
})

module.exports = router;