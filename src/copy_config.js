const keyWeatherStack = '';
const keyMapBox = '';

const config = {
    keyWeatherStack,
    keyMapBox,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicPath: process.env.PUBLIC_PATH || 'public',
    templatesPath: process.env.PUBLIC_TEMPLATES || 'templates',
    viewsPath: process.env.PUBLIC_VIEWS || 'views',
    partialsPath: process.env.PUBLIC_PARTIALS || 'partials'
};

module.exports = config