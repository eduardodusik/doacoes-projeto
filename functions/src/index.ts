import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as bodyParser from "body-parser";

admin.initializeApp();

const db = admin.firestore();
const app = express();
const main = express();

main.use("/v1", app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({extended: false}));

// initialize the database and the collection
const eventsCollection = "events";

// define google cloud function name
export const api = functions.https.onRequest(main);

interface IEvent {
  id?: string
  name: string
  description: string
  address: string
  city: string
  dueDate: string
  responsibleName: string
  phoneNumber: string
  createdAt: string
}


// Cria um novo evento.
app.post("/events", async (req, res) => {
  try {
    const eventData: IEvent = {
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      city: req.body.city,
      dueDate: req.body.dueDate,
      responsibleName: req.body.responsibleName,
      phoneNumber: req.body.phoneNumber,
      createdAt: new Date().toISOString(),
    };

    const newDoc = await db.collection(eventsCollection).add(eventData);
    res.status(201).send(`Criado um novo evento: ${newDoc.id}`);
    functions.logger.info(`POST evento: ${newDoc.id}`);
  } catch (error) {
    // eslint-disable-next-line max-len
    res.status(400).send("Deveria conter um name, typeEvent, location, initDate, endDate !!!");
  }
});

// Consulta um evento
app.get("/events/:id", (req, res) => {
  const eventId = req.params.id;
  db.collection(eventsCollection).doc(eventId).get()
      .then((event) => {
        if (!event.exists) throw new Error("Event not found");
        res.status(200).json({id: event.id, ...event.data()});
      })
      .catch((error) => res.status(500).send(error));
});


// Lista todos os eventos
app.get("/events", async (req, res) => {
  try {
    const eventQuerySnapshot = await db.collection(eventsCollection).get();
    const eventList: IEvent[] = [];

    eventQuerySnapshot.forEach(
        (doc)=>{
          eventList.push({
            id: doc.id,
            ...doc.data() as IEvent,
          });
        }
    );
    res.status(200).json(eventList);
  } catch (error) {
    res.status(500).send(error);
  }
});
