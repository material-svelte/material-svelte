<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem } from '@material-svelte/list';
  import { Icon } from '@material-svelte/icon';
  import {
    mdiFolder,
    mdiCheckboxBlankOutline,
    mdiAccountCircle,
  } from '@mdi/js';

  const meta = {
    title: 'Components/ListItem',
    component: ListItem,
  };

  const stockPhoto =
    'https://images.unsplash.com/photo-1601703149866-a33416ff836f?fit=crop&w=200';
</script>

<Meta {...meta} />

<Story name="Two-lines">
  <List>
    <ListItem>
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem>
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem>
      <span slot="primary">Primary Text</span>
      <span slot="secondary">
        Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </span>
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with overline">
  <List>
    <ListItem>
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
    <ListItem>
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
    <ListItem>
      <span slot="overline">overline</span>
      <span slot="primary">Primary Text</span>
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with icon-visual">
  <List>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      <span slot="primary">Primary Text</span>
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem>
      <Icon slot="visual" path={mdiFolder} />
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with avatar-visual">
  <List>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="avatar">
      <Icon slot="visual" path={mdiAccountCircle} />
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with thumbnail-visual">
  <style>
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  </style>
  <List>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="thumbnail">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with thumbnail-large-visual">
  <style>
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  </style>
  <List>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      Primary Text
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      <span slot="primary">Primary Text</span>
      <span slot="secondary">Secondary Text</span>
    </ListItem>
    <ListItem visualVariant="thumbnail-large">
      <img slot="visual" src={stockPhoto} alt="stockphoto" />
      <span slot="overline">overline</span>
      Primary Text
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with icon-meta">
  <List>
    <ListItem>
      Primary Text
      <span slot="secondary">Secondary Text</span>
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
    <ListItem>
      <span slot="primary">Primary Text</span>
      <span slot="secondary">Secondary Text</span>
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
    <ListItem>
      <span slot="overline">overline</span>
      Primary Text
      <Icon slot="meta" path={mdiCheckboxBlankOutline} />
    </ListItem>
  </List>
</Story>

<Story name="Two-lines with text-meta">
  <List>
    <ListItem metaVariant="text">
      Primary Text
      <span slot="secondary">Secondary Text</span>
      <span slot="meta">meta</span>
    </ListItem>
    <ListItem metaVariant="text">
      Primary Text
      <span slot="secondary">Secondary Text</span>
      <span slot="meta">meta</span>
    </ListItem>
    <ListItem metaVariant="text">
      <span slot="overline">overline</span>
      Primary Text
      <span slot="meta">meta</span>
    </ListItem>
  </List>
</Story>
