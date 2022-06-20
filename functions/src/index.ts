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
const eventoCollection = "eventos";

// define google cloud function name
export const api = functions.https.onRequest(main);

interface Evento {
  name: string,
  typeEvent: string,
  location: string,
  initDate: Date,
  endDate: Date,
}

// Cria um novo evento
app.post("/eventos", async (req, res) => {
  try {
    const evento: Evento = {
      name: req.body["name"],
      typeEvent: req.body["typeEvent"],
      location: req.body["location"],
      initDate: req.body["initDate"],
      endDate: req.body["endDate"],
    };

    const newDoc = await db.collection(eventoCollection).add(evento);
    res.status(201).send(`Criado um novo evento: ${newDoc.id}`);
  } catch (error) {
    // eslint-disable-next-line max-len
    res.status(400).send("Deveria conter um name, typeEvent, location, initDate, endDate !!!");
  }
});

// Consulta um evento
app.get("/eventos/:eventoId", (req, res) => {
  const eventoId = req.params.eventoId;
  db.collection(eventoCollection).doc(eventoId).get()
      .then((evento) => {
        if (!evento.exists) throw new Error("evento not found");
        res.status(200).json({id: evento.id, data: evento.data()});
      })
      .catch((error) => res.status(500).send(error));
});


// Deleta um evento
app.delete("/eventos/:eventoId", (req, res) => {
  db.collection(eventoCollection).doc(req.params.eventoId).delete()
      .then(()=>res.status(204).send("Document successfully deleted!"))
      .catch(function(error) {
        res.status(500).send(error);
      });
});

// Lista todos os eventos
app.get("/eventos", async (req, res) => {
  try {
    const eventoQuerySnapshot = await db.collection(eventoCollection).get();
    const eventos: unknown[] = [];
    eventoQuerySnapshot.forEach(
        (doc)=>{
          eventos.push({
            id: doc.id,
            data: doc.data(),
          });
        }
    );
    res.status(200).json(eventos);
  } catch (error) {
    res.status(500).send(error);
  }
});
