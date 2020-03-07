const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Alamo Post 2 | American Legion',
    description: 'Non profit veteran organization',
    contact: {
      phone: '210 732 1891',
      email: 'info@alamopost2.org',
      facebook: 'https://www.facebook.com/alamopost2',     
    },
    menuLinks: [
      {
        name: 'Services',
        link: '/services',
      },
      {
        name: 'Officers',
        link: '/officers',
      },
      {
        name: 'Rentals',
        link: '/rentals',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    hoursOfOperation:[
        {
            day: 'Monday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false,
        },
        {
            day: 'Tuesday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
        {
            day: 'Wednesday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
        {
            day: 'Thursday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
        {
            day: 'Friday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
        {
            day: 'Saturday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
        {
            day: 'Sunday',
            opensAt: '8:30AM',
            closesAt: '5:00PM',
            isHoliday: false
        },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
