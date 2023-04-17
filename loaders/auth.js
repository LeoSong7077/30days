const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const CustomStrategy = require("passport-custom").Strategy;
// const flash = require('connect-flash');

const User = require("../models/User");

module.exports = function () {};

// const locale = require('../locales/alert.json');

// const doAsync = require('../modules/function/doAsync');

// module.exports = function (app) {
//     app.use(passport.initialize());
//     app.use(passport.session());
//     app.use(flash());

//     const googleCredentials = {
//         "web": {
//             "client_id": "761003588734-pkbf7ggc4mjpeomff9h4r7vitn48499p.apps.googleusercontent.com",
//             "client_secret": "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",
//             "redirect_uris": [
//                 "http://localhost:9121/login/google/signin",
//                 // "https://seed.hillstone.finance/login/google/signin"
//             ]
//         }
//     }

//     passport.use(new LocalStrategy({
//             usernameField: 'userid',
//             passwordField: 'password',
//             session: true,
//             passReqToCallback: true,
//         },
//         async function(request, username, password, done) {
//             const { language } = request;
//             User.findOne({ userid: username, isGmailRegister:false }, async function (err, user) {
//                 if (err) { return done(err); }
//                 if (!user) { return done(null, false, {message:locale[language].ALERT_incorrect_phone_or_password}); }
//                 user.verifyPassword(password, function(err2, isMatch) {
//                     if (err2) return console.log('verifyPassword Error');
//                     if (!isMatch) return done(null, false, {message:locale[language].ALERT_incorrect_phone_or_password});
//                     done(null, user);
//                 });
//             });
//         }
//     ));

//     passport.use(new GoogleStrategy({
//             clientID: googleCredentials.web.client_id,
//             clientSecret: googleCredentials.web.client_secret,
//             callbackURL: googleCredentials.web.redirect_uris[0],
//             passReqToCallback: true
//         },
//         (async function(request, accessToken, refreshToken, profile, done) {
//             const { id, displayName, emails, photos } = profile;

//             if (!profile || !emails || emails.length === 0)  return done(null, false, {message:'googleAuthFail'}); // 구글계정 정보 가져오기 실패

//             let user = await User.findOne({ gmail:emails[0].value, isGmailRegister:true });
//             if (!user) return done(null, false, {message:`newRegister-${emails[0].value}`});
//             done(null, user);
//         })
//     ));

//     passport.use(new CustomStrategy(
//         function(request, done) {
//             const registerSession = request.session.register;
//             if (!registerSession) return done(null, false, {message:'googleAuthFail'});
//             User.findOne({ gmail:registerSession.gmail, isGmailRegister:true }, function (err, user) {
//                 if (err) { return done(err); }
//                 if (!user) { return done(null, false, {message:'googleAuthFail'}); }
//                 done(null, user);
//             });
//         }
//     ));

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function (err, user) {
//             done(err, user);
//         });
//         // done(null, user);
//     });
// }
