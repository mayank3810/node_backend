import dotenv from "dotenv";

dotenv.config();

export default {
    apiVersionUrl:"/api/v1",
    appPort:process.env.PORT
}