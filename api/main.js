const app = require("express")();
const PORT = 3000;


const session = require('express-session');
app.use(session({
    secret: 'keyword cat',
    resave: false,
    saveUninitialized: true,
}));
const pass = require('passport');
const googlestratagy = require('passport-google-oauth').OAuth2Strategy;
pass.use(new googlestratagy({
        clientID: "701957145365-luda12eib70pv3elhurs36cn4ja4fb6a.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);
    }
));

pass.serializeUser(function(user, done) {
    done(null, done);
});
pass.deserializeUser(function(user, done) {
    done(null, user);
});

app.use(pass.initialize());
app.use(pass.session());

app.get('/auth/google', pass.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


app.get('/auth/google/callback', pass.authenticate("google", { failureRedirect: '/login' }),
    function(req, res) {
        //success if then
        res.redirect('/');
    }
);

app.get('/', (req, res) => {
    // res.redirect("./web/page3.html");
    res.redirect("http://127.0.0.1:5501/web/page3.html")

});
app.listen(PORT, () => {
    console.log('server is running $(PORT)');
});