module.exports = (options = {}) => {
  return {
    elevation: require('./elevation')(options),
  };
};
