import React from 'react';
import { Formik, Form } from 'formik';
import { formValidation } from './character.validations';
import { Character, Quote } from './character.vm';
import * as classes from './character.styles';
import { TextFieldComponent } from 'common/components';
import { Typography, Button, Avatar } from '@material-ui/core';

interface Props {
  character: Character;
  characterQuotes: Quote;
  onSave: (quote: Quote) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, characterQuotes , onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={characterQuotes}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <div className={classes.root}>
          <Avatar alt={character.name} src={character.image} className={classes.avatar} />
          <Form className={classes.details}>
            <Typography variant="subtitle1" gutterBottom>
              Name: {character.name}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {character.status}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Species: {character.species}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              First seen in: {character.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Last known location: {character.location}
            </Typography>
            <TextFieldComponent
              name="quote"
              defaultValue={characterQuotes.quote}
              label="Quotes"
              multiline={true}
              rows={5}
              rowsMax={15}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
