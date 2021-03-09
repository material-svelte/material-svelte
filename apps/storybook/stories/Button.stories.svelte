<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const meta = {
    title: 'Example/Button',
    component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: {
          type: 'inline-radio',
          options: ['small', 'medium', 'large'],
        },
      },
      onClick: { action: 'onClick' },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<Story name="Primary" args={{ label: 'Button', primary: true }} />

<Story name="Secondary" args={{ label: 'Button' }} />

<Story name="Large" args={{ label: 'Button', size: 'large' }} />

<Story name="Small" args={{ label: 'Button', size: 'small' }} />
