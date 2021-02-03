const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/:promoId')
.get((req,res,next) => {
    // processed after app.all
    res.end('Will send details of the promotion: '
    + req.params.promoId + ' to you!');
})
.post((req,res,next) => {
    // processed after app.all
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+req.params.promoId);
})
.put((req,res,next) => {
    // processed after app.all
    res.write('Updating the promo: ' 
    + req.params.promoId + '\n');
    res.end('Will update the promotion: '+req.body.name 
    + ' with details: ' + req.body.description);
})
.delete((req,res,next) => {
    // processed after app.all
    res.end('Deleting promotion: '+req.params.promoId);
});

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next) => {
    // processed after app.all
    res.end('Will send all the promotions to you!');
})
.post((req,res,next) => {
    // processed after app.all
    res.end('Will add the promotion: '+req.body.name+' with details: '+req.body.description);
})
.put((req,res,next) => {
    // processed after app.all
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next) => {
    // processed after app.all
    res.end('Deleting all the promotions!');
});

module.exports = promoRouter;
