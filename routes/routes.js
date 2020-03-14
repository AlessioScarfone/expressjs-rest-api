import express from 'express'
// import requestLogger from '../middleware/requestLogger';
import morgan from 'morgan'

let router = express.Router();

let db = [{
    id: 1,
    name: 'ok'
}];

// === use MIDDLEWARE ===
router.use(express.json());
// router.use(requestLogger({ label: 'Routes' }));

//create e new morgan token
morgan.token('body', (req, res) => JSON.stringify(req.body))
router.use(morgan(':date - :method :url - [:status] :response-time ms'));
router.use(morgan('Request Body: :body'));

/**
 * Get all data
 */
router.get('/', (req, res) => {
    res.json(db);
})

/**
 * Get object with a specific id
 */
router.get('/:id', (req, res) => {
    let { id } = req.params;

    let elem = db.find(e => e.id == id);
    if (elem)
        res.json(elem).end();

    res.status(404).send({ error: "Not found" }).end();
})

/**
 * Create an object
 */
router.post('/', (req, res) => {

    let body = req.body;
    if (!body || Object.entries(body).length === 0) {
        return res.status(400).json({
            error: 'Content missing'
        })
    }

    if (Array.isArray(body)) {
        // console.log("Multiple Objects");
        body.map((e, index) => {
            let id = generateID();
            e.id = id;
            // console.log("CREATE OBJ:", index, e);
            db.push(e);
        })

    } else {
        let id = generateID();
        body.id = id;
        // console.log("CREATE OBJ:", body);
        db.push(body);
    }

    res.json(body);
});

/**
 * Delete object
 */
router.delete('/:id', (req, res) => {

    let { id } = req.params;
    db.filter(e => e.id != id);

    res.status(204).end();
});

//=== utility functions ====

const generateID = () => {
    let max = -1;
    db.forEach(e => max = e.id > max ? e.id : max);
    // console.log("Computed Id:", max + 1);
    return max + 1;
}

export default router;