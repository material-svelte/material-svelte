<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { mdiHome, mdiCar, mdiBus, mdiAirplane } from '@mdi/js';
  import { Icon } from '@material-svelte/icon';

  const meta = {
    title: 'Components/Icon',
    component: Icon,
    // NOTE inferring of args from types is not supported yet thus we have to be more verbose
    argTypes: {
      path: {
        table: {
          type: { summary: 'string | null' },
        },
        control: {
          type: 'select',
          options: { mdiHome, mdiCar, mdiBus, mdiAirplane },
        },
      },
      size: {
        table: {
          type: { summary: 'string | null' },
        },
        control: 'text',
      },
      label: {
        table: { summary: 'string | null' },
        control: 'text',
      },
      color: {
        table: { summary: 'string | null' },
        control: 'color',
      },
    },
  };
</script>

<Meta {...meta} />

<Story
  name="Static size"
  let:size
  let:args
  args={{ size: '24px', path: mdiHome }}
>
  <Icon {size} {...args} />
</Story>

<Story name="Auto size" let:args args={{ path: mdiHome }}>
  <div style=" background: #ccc;height: 50px; width: 50px;">
    <Icon {...args} />
  </div>
</Story>

<Story
  name="Static Color"
  let:color
  let:args
  args={{ color: '#f00', size: '50px', path: mdiHome }}
>
  <Icon {color} {...args} />
</Story>

<Story name="Inherit Color" let:args args={{ size: '50px', path: mdiHome }}>
  <div style="background: #ccc; color: #f00;">
    <Icon {...args} />
    <span>text color</span>
  </div>
  <div style="background: #eee; color: #00f;">
    <Icon {...args} />
    <span>text color</span>
  </div>
</Story>
