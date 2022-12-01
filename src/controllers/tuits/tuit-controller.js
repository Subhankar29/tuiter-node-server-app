import * as tuitsDao from'../tuits/tuits-dao.js';

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;

    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.topic = "Web development";
    newTuit.handle = "ReactJS";
    newTuit.title = "Loren Sum is just a sentence";
    newTuit.username = "Elon Musk";
    newTuit.comments = 0;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    newTuit.logoImage = "https://www.kindpng.com/picc/m/180-1801331_elon-musk-tesla-motors-chief-executive-spacex-neuralink.png";

    const insertedTuit = await tuitsDao.creatTuits(newTuit);

    res.json(insertedTuit);
}
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits)
}
const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;

    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);

    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params['tid']
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

    res.json(status);
}

