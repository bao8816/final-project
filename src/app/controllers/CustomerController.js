class CustomerController {
    //GET "/customer"
    home(req, res) {
        res.render('customer-home', {layout: 'home-layout'})
    }

    //GET "/customer/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    }
}

module.exports = new CustomerController;