const config = Object.freeze({
  SERVER_URL: import.meta.env.VITE_SERVER_URL,
});

const getEnv = (key) => {
  const value = config[key];
  console.log("key", key, "value", value);
  if (!value) throw new Error(`Config ${key} not found`);
  return value;
};

export default getEnv;
