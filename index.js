
import cors from 'cors'
import express from "express"; // necessary for api

import {addBug, getAllBugs, updateBug, deleteBug} from './bugFunctions.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/', addBug)
app.get('/', getAllBugs)
app.patch('/:bugId', updateBug)
app.delete('/:bugId', deleteBug)

app.listen(3006)


