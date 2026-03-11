const path = require('path');

module.exports = function override(config) {

    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    config.resolve.alias['@src'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@hooks'] = path.resolve(__dirname, 'src/hooks');
    config.resolve.alias['@contexts'] = path.resolve(__dirname, 'src/contexts');
    config.resolve.alias['@pages'] = path.resolve(__dirname, 'src/pages');
    config.resolve.alias['@public'] = path.resolve(__dirname, 'public');
    config.resolve.alias['@assets'] = path.resolve(__dirname, 'public/assets');
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'src/utils');
    config.resolve.alias['@api'] = path.resolve(__dirname, 'src/services/api');
    config.resolve.alias['@reducers'] = path.resolve(__dirname, 'src/services/reducer');
    config.resolve.alias['@routes'] = path.resolve(__dirname, 'src/routes');
    config.resolve.alias['@node_modules'] = path.resolve(__dirname, 'node_modules');

    return config;
  };
  