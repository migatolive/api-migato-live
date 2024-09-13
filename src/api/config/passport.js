import {ExtractJwt, Strategy as JwtStrategy} from 'passport-jwt';
import {jwtSecret} from './vars.js';
import {User} from '../db/models/User.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret,
};

const jwt = new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findByPk(jwt_payload.id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        return done(error, false);
    }
});

export default {
    jwt,
};