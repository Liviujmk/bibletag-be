// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const configOptions = {
  isGlobal: true,
  envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
  MONGO_URI: process.env.MONGO_DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
