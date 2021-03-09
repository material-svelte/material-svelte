<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Page from './Page.svelte';
  import * as HeaderStories from './Header.stories.svelte';

  const meta = {
    title: 'Example/Page',
    component: Page,
    argTypes: {
      onLogin: { action: 'onLogin' },
      onLogout: { action: 'onLogout' },
      onCreateAccount: { action: 'onCreateAccount' },
    },
  };
</script>

<Meta {...meta} />

<Template let:args>
  <Page
    {...args}
    on:login={args.onLogin}
    on:logout={args.onLogout}
    on:createAccount={args.onCreateAccount}
  />
</Template>

<Story name="LoggedIn" args={{ ...HeaderStories.LoggedIn.args }} />

<Story name="LoggedOut" args={{ ...HeaderStories.LoggedOut.args }} />
