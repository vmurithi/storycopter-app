import React from 'react';
import { connect } from 'react-redux';
import { update } from '../../../reducers/data';

import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  cardMedia: {
    display: 'flex',
    flexDirection: 'row',
    jusitfyContent: 'center',
  },
  cardLabel: {
    display: 'block',
    margin: '0 !important',
    width: '100%',
  },
}));

const MetaInformation = props => {
  const { data, update } = props;
  const { currentProject } = data;
  const { basepath } = currentProject;

  const classes = useStyles();

  const handleChange = e => {
    update({
      currentProject: {
        ...currentProject,
        site: {
          ...currentProject.site,
          meta: {
            ...currentProject.site.meta,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  };

  const handleCheckbox = e => {
    update({
      currentProject: {
        ...currentProject,
        site: {
          ...currentProject.site,
          meta: {
            ...currentProject.site.meta,
            [e.target.name]: e.target.checked,
          },
        },
      },
    });
  };

  return (
    <form noValidate autoComplete="off" className={classes.root} onSubmit={e => e.preventDefault()}>
      <FormControl variant="filled" fullWidth margin="dense">
        <InputLabel htmlFor="title">Name</InputLabel>
        <FilledInput
          disableUnderline
          fullWidth
          id="title"
          name="title"
          onChange={handleChange}
          required
          type="text"
          value={currentProject.site.meta.title}
        />
      </FormControl>
      <FormControl variant="filled" fullWidth margin="dense">
        <InputLabel htmlFor="summary">Summary</InputLabel>
        <FilledInput
          disableUnderline
          fullWidth
          id="summary"
          multiline={true}
          name="summary"
          onChange={handleChange}
          required
          type="text"
          rowsMax={4}
          value={currentProject.site.meta.summary}
        />
      </FormControl>
      <FormControl variant="filled" fullWidth margin="dense">
        <InputLabel htmlFor="publisher">Publisher</InputLabel>
        <FilledInput
          disableUnderline
          fullWidth
          id="publisher"
          name="publisher"
          onChange={handleChange}
          required
          type="text"
          value={currentProject.site.meta.publisher}
        />
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={currentProject.site.meta.enableCover}
            color="primary"
            id="enableCover"
            name="enableCover"
            onChange={handleCheckbox}
            value="true"
          />
        }
        label={<Typography variant="overline">Enable cover</Typography>}
      />
      <FormControl variant="filled" fullWidth margin="dense">
        <Card elevation={0}>
          <CardMedia
            alt={`Cover`}
            component="img"
            className={classes.cardMedia}
            height="100"
            image={`${basepath}src/site/${currentProject.site.meta.cover.name}`}
            title={`Cover`}
          />
          <CardActions>
            <input
              accept="image/*"
              color="primary"
              disabled={!currentProject.site.meta.enableCover}
              id="cover"
              name="cover"
              onChange={handleChange}
              style={{ display: 'none' }}
              type="file"
            />
            <label htmlFor="cover" className={classes.cardLabel}>
              <Button
                color="primary"
                component="span"
                disabled={!currentProject.site.meta.enableCover}
                fullWidth
                size="small"
                startIcon={<PanoramaOutlinedIcon />}>
                Select…
              </Button>
            </label>
          </CardActions>
        </Card>
      </FormControl>
    </form>
  );
};

export default connect(({ data }) => ({ data }), { update })(MetaInformation);
