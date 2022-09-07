export interface MenuPath {
    name: string;
    path: string;
    nestedPaths?: { name: string, path: string }[]
}

export const menuPaths : MenuPath[] = [
    
    {
      name: 'Home',
      path: 'home',
      nestedPaths: [
        {
          name: 'News',
          path: 'news'
        }
      ]
    },

    {
      name: 'Books',
      path: 'books',
      nestedPaths: [
        {
          name: 'Quick Search',
          path: 'quick-search'
        },
        {
          name: 'Advanced Search',
          path: 'advanced-search'
        },
        {
          name: 'Authors and Illustrators',
          path: 'authors-and-illustrators'
        }
      ]
    },

    {
      name: 'About',
      path: 'about',
      nestedPaths: [
        {
          name: 'Cataloging Process',
          path: 'cataloging-process'
        },
        {
          name: 'SMART Reading',
          path: 'smart-reading'
        }
      ]
    },

    {
      name: 'Accessibility',
      path: 'accessibility',
      nestedPaths: [
        {
          name: 'Features',
          path: 'features'
        },
        {
          name: 'Feedback',
          path: 'feedback'
        }
      ]
    },

    {
      name: 'User',
      path: 'user',
      nestedPaths: [
        {
          name: 'Profile',
          path: 'profile'
        },
        {
          name: 'My Collections',
          path: 'my-collections'
        },
        {
          name: 'Settings',
          path: 'settings'
        }
      ]
    }

]