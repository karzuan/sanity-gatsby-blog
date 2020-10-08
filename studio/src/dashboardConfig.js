export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7f65b3384ee7011185010c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sy34gpqg',
                  apiId: 'c43517e0-5daf-467b-b4fd-43c23fe89053'
                },
                {
                  buildHookId: '5f7f65b3951deb06412645aa',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9cs9dphe',
                  apiId: '80a00e1b-5952-4b2b-b532-1a59dee9289a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karzuan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9cs9dphe.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
