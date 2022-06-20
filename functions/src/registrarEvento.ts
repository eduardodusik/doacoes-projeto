// import * as admin from 'firebase-admin'
// import { Response } from 'express'
//
// const db = admin.firestore()
//
// export type Evento = {
//  id?: string;
//  description: string;
//  datahora: EpochTimeStamp;
// }
// type Request = {
//  body: Evento,
//  params: { eventoId: string}
// }
//
// const registrarEvento = async (req: Request, res: Response) => {
//  const { description, datahora } = req.body
//  try {
//    const evento = db.collection('eventos').doc()
//    const eventoObject = {
//      id: evento.id,
//      description,
//      datahora,
//    }
//
//    evento.set(eventoObject)
//
//    res.status(200).send({
//      status: 'success',
//      message: 'entry added successfully',
//      data: eventoObject
//    })
//  } catch(err) {
//      res.status(500).json(`Internal Server Error: ${err}`)
//  }
// }
//
// export { registrarEvento }
