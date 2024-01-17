const express = require("express");
const app = express();
const port = 8383;

app.use(express.static("public"));
app.use(express.json());

app.get("/info/:dynamic", (req, res) => {
  const { dynamic } = req.params;
  const { key } = req.query;
  console.log(dynamic, key);
  res.status(200).json({ info: "preset text: <3" });

  //this is backend sending info to frontend
});

app.post("/", (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  if (!parcel) {
    return res.status(400).send({ status: "failed" });
  }
  res.status(200).send({ status: "recieved" });
});

app.listen(port, () => console.log(`Server has started on port : ${port}`));

//conceptualize your website
