<script>
  import { action } from '@storybook/addon-actions';
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { List, ListItem } from '@material-svelte/list';

  const meta = {
    title: 'Components/ListItem',
    component: ListItem,
  };
</script>

<Meta {...meta} />

<Story name="on:click">
  <List>
    <ListItem on:click={action('clicked')}>click me</ListItem>
  </List>
</Story>
