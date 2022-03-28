const customerRouter = require('./customer')
const adminRouter = require('./admin')
const siteRouter = require('./sites')



function route(app) {
    app.use('/customer', customerRouter)
    app.use('/admin', adminRouter)
    app.use('/', siteRouter)
}

module.exports = route;
