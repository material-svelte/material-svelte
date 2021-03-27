module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    { name: 'main', channel: 'latest' },
    { name: 'next', channel: 'next', prerelease: 'pre' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        successComment: false,
        failComment: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        message:
          'release(<%= _.replace(nextRelease.gitTag, /@[^@]*$/g, "") %>): <%= nextRelease.version %> [skip ci]',
      },
    ],
  ],
};
