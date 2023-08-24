import dotenv from "dotenv";

dotenv.config();

export default {
    apiVersionUrl:"/api/v1",
    appPort:3001,
    numberOfProxies:process.env.NO_OF_PROXY,
    fileSizeLimit:'100mb',
    whitelistUrl:[/\localhost\$/,/\distinctcloud\.io$/,/\signettags\.com$/,'http://localhost:3000','https://sample-react-eta.vercel.app'],
    apiLevelJWTExpiry:'90d',
    userLevelJWTExpiry:'1h',
    db: {
        str:
          process.env.NODE_ENV === "production"
            ? process.env.MONGO_DB_STRING_PROD
            : process.env.MONGO_DB_STRING_DEV,
        options: {
          useNewUrlParser: true,
          readPreference: "primaryPreferred",
          useUnifiedTopology: true,
        },
      },
}