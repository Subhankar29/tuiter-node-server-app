import mongoose from 'mongoose';
import tuitSchema from './tuits-schema.js';

const tuitsModel = mongoose.model('TuitModel', tuitSchema);

export default tuitsModel