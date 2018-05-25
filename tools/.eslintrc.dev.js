const _ = require('lodash');
const config = require('../.eslintrc');

// 如果是对象，检查值是否为'error'，如果是数组，将 'error' 项替换成 warn
function replaceErrorWithWarning(origin) {
    _.forEach(origin, (value, key) => {
        if (_.isArray(value) || _.isObject(value)) {
            replaceErrorWithWarning(value);
        } else if (value === 'error') {
            origin[key] = 'warn';
        }
    })
}

const warningConfig = _.cloneDeep(config);
replaceErrorWithWarning(warningConfig);

module.exports = warningConfig;