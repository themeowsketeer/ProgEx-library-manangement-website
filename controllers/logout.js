module.exports = (req, res) => {
    req.session.destroy(() => {
        loggedIn = null
        loggedInAdmin = null
        res.redirect('/')
    })
} 