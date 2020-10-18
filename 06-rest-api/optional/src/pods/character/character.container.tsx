import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character, Quote, createEmptyQuote } from './character.vm';
import { mapCharacterFromVmToApi, mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

interface GetParams {
  id: string,
}

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [characterQuotes, setCharacterQuotes] = React.useState<Quote>(createEmptyQuote());
  const { id } = useParams<GetParams>();
  const history = useHistory();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(+id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleGetQuotes = (id: number) => {
    api.getQuotesById(id).then(result => setCharacterQuotes(result));
  }

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  React.useEffect(() => {
    console.log(character);
    handleGetQuotes(character.id);
  }, [character])

  const handleSave = async (quotes: Quote) => {
    const success = await api.saveCharacter(quotes);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent
    character={character}
    characterQuotes={characterQuotes}
    onSave={handleSave}
  />;
};
