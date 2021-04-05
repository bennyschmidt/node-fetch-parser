module.exports = methods => async (method, params) => {
  const response = await methods[method](params);
  const data = await response.json();

  return data;
};
