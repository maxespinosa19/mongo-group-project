import { MongoClient, ObjectId } from "mongodb";
import {mongoUri} from './secrets.js'

const dbName = 'group-project'
const collectionName = "bugs"

const mongoConnect = new MongoClient(mongoUri);
await mongoConnect.connect()
const db = mongoConnect.db(dbName)

const coll = db.collection('bugs')

export async function addBug(req,res){
    try{
       const addBug = await coll.insertOne(req.body)
       res.status(200).send(addBug)
    } catch (err) {
        res.status(500).send(err)
    }
}

export async function getAllBugs(req,res){
  try{
  const allBugs = await coll.find({}).toArray()
  res.status(200).send(allBugs)
  
} catch(err){
    res.status(500).send(err)
}
}

export async function updateBug(req,res){
    try{
        const updateBug = await coll.updateOne(
            {_id: new ObjectId(req.params.bugId)},
            {$set: req.body}
        )
        res.status(200).send(updateBug)
    } catch(err) {
        res.status(500).send(err)
        
    }
}

export async function deleteBug(req,res){
    try{
        const deleteBug = await coll.deleteOne(
        {_id: new ObjectId(req.params.bugId)})
        res.status(200).send(deleteBug)

    } catch{
        res.status(500).send(err)
    }

}