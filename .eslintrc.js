module.exports = {
  "env": {
    "node": 1,
    jest: true
  },
  "rules": {
    "quotes": [2, "single", { "avoidEscape": true }]
  },
    extends: 'airbnb-base',
    rules: {
      'comma-dangle': 0,
      'no-underscore-dangle': 0,
      'no-param-reassign': 0,
      'no-return-assign': 0,
      camelcase: 0,
      "no-unused-vars": "off",
      "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
      }    
    },
  };
  