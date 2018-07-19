const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
    {
      title: "Trump Now Says He Accepts U.S. Intelligence Reports on Russian Election Meddling",
      url: "https://nyti.ms/2LsswqK",
      preview: "WASHINGTON — Under unrelenting pressure from congressional Republicans, his own advisers and his allies on Fox News, President Trump abruptly reversed course on Tuesday and claimed he had misspoken during a news conference with President Vladimir V. Putin about whether Russia tried to influence the 2016 presidential election.",
      date: new Date(Date.now())   
    },
    {
      title: "How WhatsApp Leads Mobs to Murder in India",
      url: "https://nyti.ms/2LpIJwQ",
      preview: "In India, false rumors about child kidnappers have gone viral on WhatsApp, prompting fearful mobs to kill two dozen innocent people since April. One of the first to be killed was a 65-year-old woman named Rukmani. She and four family members were driving to a temple in the southern state of Tamil Nadu in May. A mob on this road mistook them for “child lifters” and assaulted them.",
      date: new Date(Date.now())   
    },
    {
      title: "E.U. Fines Google $5.1 Billion in Android Antitrust Case",
      url: "https://nyti.ms/2NXlU5f",
      preview: "BRUSSELS — European authorities fined Google a record $5.1 billion on Wednesday for abusing its power in the mobile phone market and ordered the company to alter its practices, in one of the most aggressive regulatory actions against American technology giants and one that may force lasting changes to smartphones.",
      date: new Date(Date.now())   
    },
    {
      title: "Kawhi Leonard Traded to Raptors for DeMar DeRozan",
      url: "https://nyti.ms/2JyUiQs",
      preview: "The Toronto Raptors took the biggest gamble in franchise history by completing a trade with the San Antonio Spurs for the superstar forward Kawhi Leonard.",
      date: new Date(Date.now())   
    },
    {
      title: "The Spurs Finally Succumb to the Chaos of the N.B.A.",
      url: "https://nyti.ms/2JztuiQ",
      preview: "For the overwhelming part of two remarkable decades, the San Antonio Spurs operated inside an N.B.A. time capsule, a Texas-size vacuum, an orderly league of their own. They played with a one-for-all precision and went about their off-court business with a committed predictability.",
      date: new Date(Date.now())   
    },
    {
      title: "The Oakland A’s Are Crashing the Playoff Race Again",
      url: "https://nyti.ms/2JAeMbo",
      preview: "HOUSTON — The baseball schedule resumes in full on Friday, and the National League is a jumble, 10 teams within five games of a playoff spot. Yet the American League seems to offer just one hope for a pennant race: the plucky and powerful Oakland Athletics, the contender no one saw coming.",
      date: new Date(Date.now())   
    },
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });