// Babel configuration
// https://babeljs.io/docs/usage/api/
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        ['@babel/preset-stage-0', {decoratorsLegacy: true}],
        '@babel/preset-flow',
        '@babel/preset-react'
    ],
    ignore: ['node_modules', 'build']
};
