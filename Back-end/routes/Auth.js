import express from 'express';
import  { login, register } from '../controllers/AuthControllers.js';



export const router = express.Router();

// creation de la route pour le formulaire d'Inscription.
router.post('/register', register);

// creation de la route pour le formulaire de Connexion.
router.post('/login', login);
