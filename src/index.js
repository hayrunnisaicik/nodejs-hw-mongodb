console.log("INDEX CALISTI");

import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://KULLANICI:SIFRE@cluster0.nb68qey.mongodb.net/test"
  )
  .then(() => console.log("CONNECTED"))
  .catch((e) => console.log("ERROR:", e.message));
