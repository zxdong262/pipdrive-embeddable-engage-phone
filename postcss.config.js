const { replacer, presets } = require('postcss-rename-selector')

module.exports = {
  // parser: 'sugarss',
  plugins: [
    replacer(presets.antdReplacer),
    replacer({
      type: 'string',
      replacer: (raw) => {
        return raw
          .replace('*,', '*[class*="ant-"]*,')
          .replace('*::before', '*[class*="ant-"]*::before')
          .replace('*::after', '*[class*="ant-"]*::after')
      }
    })
  ]
}
