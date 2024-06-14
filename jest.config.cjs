module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  // Add other Jest configurations here if necessary
};
