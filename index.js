module.exports = methods => async (method, params) => {
  try {
    const response = await methods[method](params);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};
