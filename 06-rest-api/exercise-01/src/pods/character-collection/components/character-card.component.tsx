import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onDetail: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onDetail } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.gender.slice(0, 1)}</Avatar>}
        title={character.name}
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.name} is {character.species.slice(0, 1) === 'A' ? 'an' : 'a'} {character.species.toLowerCase()}, original from {character.origin} and located in {character.location}.
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          endIcon={<DoubleArrowIcon />}
          onClick={() => onDetail(character.id)}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};
