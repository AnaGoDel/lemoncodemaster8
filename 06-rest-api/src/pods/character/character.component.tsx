import React from 'react';
import { Formik, Form } from 'formik';
import Typography from '@material-ui/core/Typography'
import { formValidation } from './character.validations';
import { Character, Location } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';
import Avatar from '@material-ui/core/Avatar';

interface Props {
  character: Character;
  locations: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, locations, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
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
              Origin: {character.origin}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Location: {character.location}
            </Typography>
          </Form>
        </div>
      )}
    </Formik>
  );
};
