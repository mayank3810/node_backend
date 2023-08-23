import dotenv from "dotenv";

dotenv.config();

export default {
    apiVersionUrl:"/api/v1",
    appPort:3001,
    numberOfProxies:process.env.NO_OF_PROXY,
    fileSizeLimit:'100mb',
    whitelistUrl:[/\localhost\$/,/\distinctcloud\.io$/,/\signettags\.com$/,'http://localhost:3000','https://sample-react-eta.vercel.app'],
    apiLevelJWTExpiry:'90d',
    userLevelJWTExpiry:'1h'
}