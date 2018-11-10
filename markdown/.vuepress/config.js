module.exports = {
  base: '/tymly-website/',
  title: 'Tymly',
  dest: 'docs',
  description: 'An open framework for building digital services',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    repo: 'wmfs/tymly',
    repoLabel: 'GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Community', link: '/community/' }
    ]
  }
}
