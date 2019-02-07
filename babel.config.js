module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'v8.11.1'
                }
            }
        ],
        '@babel/preset-react'
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ]
};