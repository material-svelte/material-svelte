<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Header from './Header.svelte';

  const meta = {
    title: 'Example/Header',
    component: Header,
    argTypes: {
      onLogin: { action: 'onLogin' },
      onLogout: { action: 'onLogout' },
      onCreateAccount: { action: 'onCreateAccount' },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Header
    {...args}
    on:login={args.onLogin}
    on:logout={args.onLogout}
    on:createAccount={args.onCreateAccount}
  />
</Template>

<Story name="LoggedIn" args={{ user: {} }} />

<Story name="LoggedOut" />
