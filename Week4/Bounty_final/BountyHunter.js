const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const PORT = 3000;

//middleware
app.use(express.json());

let bountyHunter = [
  {
    firstName: "Dirty",
    lastName: "Bubble",
    living: true,
    bountyAmount: 4000,
    type: "Bubble",
    _id: uuidv4(),
  },
  {
    firstName: "Man",
    lastName: "Ray",
    living: true,
    bountyAmount: 1000,
    type: "Humanoid",
    _id: uuidv4(),
  },
  {
    firstName: "Sinister",
    lastName: "Slug",
    living: true,
    bountyAmount: 500,
    type: "Slug",
    _id: uuidv4(),
  },
];

//GET Route
app.get("/bountyHunter", (req, res) => {
  res.send(bountyHunter);
});

//GET ONE
app.get('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const singleBounty = (bountyHunter => bountyHunter._id === bountyId);

    res.send(singleBounty);
})

//POST Route
app.post("/bountyHunter", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bountyHunter.push(newBounty);

  console.log(bountyHunter);
  res.send(`Successfully added ${newBounty.firstName} to the database`);
});
// DELETE ONE - code looks good, won't work in postman. I even asked on stackoverflow & no one knew why it wouldb
app.delete('/bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bountyHunter.findIndex(bountyHunter => bountyHunter._id === bountyId);
    bountyHunter.splice(bountyIndex, 1);
})

app.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bountyHunter.findIndex(bountyHunter => bountyHunter._id === bountyId);
    const updatedBountyResource = Object.assign(bountyHunter[bountyIndex], req.body);

    res.send(`Resource sucessfully updated to ${updatedBountyResource}`);

})
// server startup logic
app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});
