<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import Typography from '@material-svelte/typography';

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

<Story name="Example" let:variant args={{ variant: 'h1' }}>
  <Typography {variant}>{variant}</Typography>
</Story>
