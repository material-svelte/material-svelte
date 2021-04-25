<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Checkbox } from '@material-svelte/checkbox';
  import { Icon } from '@material-svelte/icon';
  import { IconButton } from '@material-svelte/button';
  import {
    List,
    ListItem,
    ListDivider,
    ListSubheader,
  } from '@material-svelte/list';
  import { mdiAccountCircle, mdiCheck, mdiInformation } from '@mdi/js';
  import thumbnail from '../../../branding/logo_512.png';

  const meta = {
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
      options: { showPanel: false },
      controls: { disabled: true },
      actions: { disabled: true },
    },
    argTypes: {
      id: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      navigation: {
        table: {
          type: { summary: 'boolean | null' },
          defaultValue: { summary: 'null' },
        },
      },
      href: {
        table: {
          type: { summary: 'string | null' },
          defaultValue: { summary: 'null' },
        },
        control: {
          type: 'text',
        },
      },
      lines: {
        table: {
          type: { summary: 'number | null' },
          defaultValue: { summary: 'null' },
        },
      },
      visualVariant: {
        defaultValue: 'icon',
        table: {
          type: { summary: 'icon | avatar | thumbnail | thumbnail-large' },
          defaultValue: { summary: 'icon' },
        },
        control: {
          type: 'select',
          options: ['icon', 'avatar', 'thumbnail', 'thumbnail-large'],
        },
      },
      metaVariant: {
        defaultValue: 'icon',
        table: {
          type: { summary: 'icon | text' },
          defaultValue: { summary: 'icon' },
        },
        control: {
          type: 'select',
          options: ['icon', 'text'],
        },
      },
    },
  };
</script>

<Meta {...meta} />

<Story name="All">
  <style>
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  </style>
  <List>
    <ListSubheader>single-line item</ListSubheader>
    <ListItem>Primary Text</ListItem>

    <ListDivider />
    <ListSubheader>meta-slot</ListSubheader>

    <ListItem>
      Primary Text
      <Checkbox slot="meta" />
    </ListItem>

    <ListItem>
      Primary Text
      <IconButton slot="meta" path={mdiInformation} round />
    </ListItem>

    <ListItem>
      Primary Text
      <Icon slot="meta" path={mdiCheck} />
    </ListItem>

    <ListItem metaVariant="text">
      Primary Text
      <span slot="meta">meta</span>
    </ListItem>

    <ListDivider />
    <ListSubheader>visual-slot</ListSubheader>

    <ListItem>
      <Checkbox slot="visual" />
      Primary Text
    </ListItem>

    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
    </ListItem>

    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>

    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>

    <ListItem>
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem lines={2}>Primary Text</ListItem>

    <ListItem>
      Primary Text
      <span slot="secondary">Secondary text</span>
      <Checkbox slot="meta" />
    </ListItem>

    <ListItem metaVariant="text">
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="meta">meta</span>
    </ListItem>

    <ListItem>
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>

    <ListItem>
      <Checkbox slot="visual" />
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <Checkbox slot="meta" />
    </ListItem>

    <ListItem>
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
    </ListItem>

    <ListItem>
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
      <Checkbox slot="meta" />
    </ListItem>

    <ListItem metaVariant="text">
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
      <span slot="meta">meta</span>
    </ListItem>

    <ListItem lines={3}>
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem>
      <span slot="overline">overline</span>
      Primary Text
      <span slot="secondary">Secondary text</span>
    </ListItem>

    <ListItem>
      <Checkbox slot="visual" />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
    </ListItem>

    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
    </ListItem>

    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
      <span slot="secondary">Secondary text</span>
      <span slot="tertiary">Tertiary text</span>
      <Checkbox slot="meta" />
    </ListItem>
  </List>
</Story>
