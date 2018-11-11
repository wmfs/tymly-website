module.exports = {
  base: '/tymly-website/',
  title: 'Tymly',
  description: 'Building better digital services',
  head: [
    ['link', {rel: 'icon', href: '/favicon.png'}]
  ],
  themeConfig: {
    repo: 'wmfs/tymly',
    logo: '/favicon.png',
    search: true,
    searchMaxSuggestions: 10,
    repoLabel: 'GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      {text: 'Guide', link: '/guide/'},
      {text: 'Reference', link: '/reference/'},
      {text: 'Community', link: '/community/'}
    ]
  }
}
