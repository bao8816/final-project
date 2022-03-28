class SiteController {
    //GET "/"
    index(req, res) {
        res.render('customer-home', {layout: 'home-layout'})
    }

    //GET "/login"
    login(req, res) {
        res.render('login', {layout: 'iden-layout'})
    }

    //GET "/signup"
    signup(req, res) {
        res.render('signup', {layout: 'iden-layout'})
    }
}

module.exports = new SiteController;