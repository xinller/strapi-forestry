module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '94d29d19ab615895731865ead66ac04f'),
        },
    },
    url: env('', 'http://localhost:1338'),
});