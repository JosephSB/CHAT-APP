import config from "../config/index";
import mongoose,{ConnectOptions} from "mongoose";

mongoose
    .connect(`mongodb://${config.mongo.host}/${config.mongo.database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
    .then((db) =>
        console.log("Database connected successful in port:", db.connection.host)
    )
    .catch((err) => console.error("Database is not connected", err));
  
export default mongoose