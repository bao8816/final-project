class AdminController {
    //GET "/admin"
    home(req, res) {
        res.render('admin-home', {layout: 'home-layout'})
    }

    //GET "/admin/upload"
    upload(req, res) {
        res.render('admin-upload', {layout: 'upload-layout'})
    }

    //GET "/admin/dashboard"
    dashboard(req, res) {
        res.render('admin-dashboard', {layout: 'adm-dash-layout'})
    }

    //GET "/admin/profile"
    profile(req, res) {
        res.render('profile', {layout: 'profile-layout'})
    }
}

module.exports = new AdminController;