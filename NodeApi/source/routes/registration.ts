import express from 'express';
import controller from '../controllers/registration';

const router = express.Router();

router.get('/list', controller.listAccounts);

router.post('/create', controller.createAccount);

export = router;
