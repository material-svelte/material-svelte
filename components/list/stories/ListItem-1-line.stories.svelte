<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem } from '@material-svelte/list';
  import { Icon } from '@material-svelte/icon';
  import {
    mdiFolder,
    mdiCheckboxBlankOutline,
    mdiAccountCircle,
  } from '@mdi/js';
  import thumbnail from '../../../branding/logo_512.png';

  const meta = {
    title: 'Components/ListItem',
    component: ListItem,
  };
</script>

<Meta {...meta} />

<Story name="One-line">
  <List>
    <ListItem>Primary Text</ListItem>
    <ListItem>Primary Text</ListItem>
    <ListItem>
      Primary text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ListItem>
  </List>
</Story>

<Story name="One-line with icon-visual">
  <List>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      Primary Text
    </ListItem>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      Primary Text
    </ListItem>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="One-line with avatar-visual">
  <List>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
    </ListItem>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
    </ListItem>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="One-line with thumbnail-visual">
  <style>
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  </style>
  <List>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="One-line with thumbnail-large-visual">
  <style>
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  </style>
  <List>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={thumbnail} alt="thumbnail" />
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="One-line with icon-meta">
  <List>
    <ListItem>
      Primary Text
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
    <ListItem>
      Primary Text
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
    <ListItem>
      Primary Text
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
  </List>
</Story>

<Story name="One-line with text-meta">
  <List>
    <ListItem metaVariant="text">
      Primary Text
      <span slot="meta">meta</span>
    </ListItem>
    <ListItem metaVariant="text">
      Primary Text
      <span slot="meta">meta</span>
    </ListItem>
    <ListItem metaVariant="text">
      Primary Text
      <span slot="meta">meta</span>
    </ListItem>
  </List>
</Story>
