import { Router } from 'express';
import {
  Character,
  getCharacter,
  getCharactersList
} from '../db';

export const characterApi = Router();

characterApi
  .get('/', async (req, res) => {
    const characters = await getCharactersList();
    res.send(characters);
  })
  .get('/:id', async (req, res) => {
    const id = +req.params.id;
    const character = await getCharacter(id);
    res.send(character);
  });
