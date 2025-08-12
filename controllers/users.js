const User = require("../models/users.js");

//Render signup form
module.exports.renderSignupForm = (req, res) => {
    res.render("./users/signup.ejs");
};

//Signup
module.exports.signUp = async (req, res) => {
    try{
        let{username, email, password} = req.body;
        const newUser = new User({email, username});
        const userRegistered = await User.register(newUser, password);
        console.log(userRegistered);
        req.login(userRegistered, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to BookHaven!");
            res.redirect("/listings")
        });
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

//Render login form
module.exports.renderLoginForm = (req, res) => {
    res.render("./users/login.ejs");
};

//Login
module.exports.login = async(req, res) => {
    req.flash("success", "Welcome back to BookHaven!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

//Logout
module.exports.logout = (req, res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out");
        res.redirect("/listings");
    })
};