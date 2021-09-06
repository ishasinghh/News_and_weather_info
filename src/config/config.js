require("dotenv").config();

const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI,
  },
  default: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.DATABASE,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
