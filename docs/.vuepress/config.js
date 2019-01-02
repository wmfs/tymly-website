module.exports = {
  base: '/tymly-website/',
  title: 'Tymly',
  description: 'Ethically sourced software.',
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'}]
  ],
  themeConfig: {
    repo: 'wmfs/tymly',
    // logo: '/tymly-motif.svg',
    search: true,
    searchMaxSuggestions: 10,
    repoLabel: 'GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {text: 'Guide', link: '/guide/'},
      {text: 'Reference', link: '/reference/'},
      {text: 'Community', link: '/community/'}
    ],
    themeConfig: {
      sidebar: [
        '/',
        '/Page 1',
        '/Page 2'
      ]
    }
  }
}
