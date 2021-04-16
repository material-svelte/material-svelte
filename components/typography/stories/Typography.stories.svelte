<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Typography } from '@material-svelte/typography';

  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ];

  const meta = {
    title: 'Components/Typography',
    component: Typography,
    parameters: {
      options: { showPanel: false },
      actions: { disabled: true },
      controls: { disabled: true },
    },
    argTypes: {
      variant: {
        table: {
          type: { summary: 'TypographyVariant' },
        },
        control: { type: 'select', options: variants },
      },
      component: {
        table: {
          type: { summary: 'TypographyVariant | null' },
          defaultValue: { summary: 'null' },
        },
        control: { type: 'select', options: variants.concat([null]) },
      },
    },
  };
</script>

<Meta {...meta} />

<Story name="All">
  <Typography variant="h1">H1</Typography>
  <Typography variant="h2">H2</Typography>
  <Typography variant="h3">H3</Typography>
  <Typography variant="h4">H4</Typography>
  <Typography variant="h5">H5</Typography>
  <Typography variant="h6">H7</Typography>
  <Typography variant="subtitle1">subtitle1</Typography>
  <Typography variant="subtitle2">subtitle2</Typography>
  <Typography variant="body1">body1</Typography>
  <Typography variant="body2">body2</Typography>
  <Typography variant="button">button</Typography>
  <Typography variant="caption">caption</Typography>
  <Typography variant="overline">overline</Typography>
</Story>
