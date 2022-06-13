import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send({name: "Eduardo"});
});



export const registrarEvento = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send({name: "Eduardo"});
});


export const obterEvento = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send({name: "Eduardo"});
});


export const listarEventos = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});

  response.send({name: "Eduardo"});
});