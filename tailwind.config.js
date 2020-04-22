const plugin = require('tailwindcss/plugin')

module.exports = {
    plugins:[
        plugin(function({ addUtilities }) {
            const newUtilities = {
                '.bg-semiblack': {
                    'background': '#00000080'
                },
                '.backdrop-filter':{
                    'backdrop-filter':'blur(4px)'
                }
            }
            addUtilities(newUtilities);
        })
    ],
}