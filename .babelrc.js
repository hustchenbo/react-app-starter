// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-flow',
        '@babel/preset-react'
    ],
    plugins: ['@babel/plugin-transform-runtime', 'transform-class-properties'],
    ignore: ['node_modules', 'build']
};
