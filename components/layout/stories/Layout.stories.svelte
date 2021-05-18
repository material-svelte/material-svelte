<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';

  import { Layout } from '@material-svelte/layout';

  const meta = {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
      layout: 'fullscreen',
      options: { showPanel: true },
    },
  };

  const disableAddons = {
    options: { showPanel: false },
    controls: { disabled: true },
    actions: { disabled: true },
  };
</script>

<Meta {...meta} />

<Story name="Playground" let:args>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    header {
      background-color: #880;
      height: 50px;
    }
    nav {
      background-color: #088;
      height: 100%;
      width: 100px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
  </style>
  <div class="wrap">
    <Layout {...args}>
      <header slot="header" />
      <nav slot="navigation" />
      <main />
    </Layout>
  </div>
</Story>

<Story name="regular" parameters={disableAddons}>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    header {
      background-color: #880;
      height: 50px;
    }
    nav {
      background-color: #088;
      height: 100%;
      width: 100px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
  </style>
  <div class="wrap">
    <Layout>
      <header slot="header" />
      <nav slot="navigation" />
      <main />
    </Layout>
  </div>
</Story>

<Story name="clipped navigation" parameters={disableAddons}>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    header {
      background-color: #880;
      height: 50px;
    }
    nav {
      background-color: #088;
      height: 100%;
      width: 100px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
  </style>
  <div class="wrap">
    <Layout clippedNavigation>
      <header slot="header" />
      <nav slot="navigation" />
      <main />
    </Layout>
  </div>
</Story>

<Story name="no header" parameters={disableAddons}>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    nav {
      background-color: #088;
      height: 100%;
      width: 100px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
  </style>
  <div class="wrap">
    <Layout>
      <nav slot="navigation" />
      <main />
    </Layout>
  </div>
</Story>

<Story name="no navigation" parameters={disableAddons}>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    header {
      background-color: #880;
      height: 50px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
  </style>
  <div class="wrap">
    <Layout clippedNavigation>
      <header slot="header" />
      <main />
    </Layout>
  </div>
</Story>

<Story name="footer" parameters={disableAddons}>
  <style>
    .wrap {
      height: 500px;
      width: 400px;
    }
    header {
      background-color: #880;
      height: 50px;
    }
    nav {
      background-color: #088;
      height: 100%;
      width: 100px;
    }
    main {
      background-color: #808;
      height: 100%;
    }
    footer {
      background-color: #888;
      height: 50px;
    }
  </style>
  <div class="wrap">
    <Layout clippedNavigation>
      <header slot="header" />
      <nav slot="navigation" />
      <main />
      <footer slot="footer" />
    </Layout>
  </div>
</Story>
