/* Customization Guide available on:
  https://gatsby-blog-mdx.now.sh/2020/05/4-customize/
  ======================================== */
const config = {
  /* Site
  ========================================= */
  title: `Gatsby Starter Personal Blog`, // Displayed in header
  description: `A starter personal blog with styled components, dark mode, and Netlify CMS.`, // Site description
  maxWidth: "768", // Max width of website
  enableAbout: true, // Enables about page
  siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`, // For sitemap & RSS feed
  useScrollIndicator: true, // Use scroll indicator on top of screen in posts

  /* Profile
  ========================================= */
  author: `Author Name`, // Name shows on profile
  profileDescription: "{Edit me in customize.js}", // Shows under author name
  profileImageName: `profile.jpeg`, // Place profile.jpg/.jpeg/.png in _assets folder
  location: "", // Location under profileDescription. "" --> disabled
  footerLink: "", // Link to page when you click footer name

  /* Social Media Links
      accountName & emailAddress: leave blank ("") to disable
      showHeaderIcon: shows social media icon in header. When true, must have account name set
  ========================================= */
  social: {
    twitter: `gatsbyjs`,
  },
  //socialMediaLinks: {
  //  email: { emailAddress: "", showHeaderIcon: true },
  //  github: { accountName: "", showHeaderIcon: true },
  //  facebook: { accountName: "", showHeaderIcon: true },
  //  instagram: { accountName: "", showHeaderIcon: true },
  //  twitter: { accountName: "", showHeaderIcon: true },
  //  linkedIn: { accountName: "", showHeaderIcon: true }, // Use URL after "linkedin.com/"
  //  medium: { accountName: "", showHeaderIcon: true }, // Use URL after "medium.com/@"
  //},

  /* Navbar Link
  ========================================= */
  menuLinks: [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Blog",
      link: "/blog/",
    },
    {
      name: "Test",
      link: "/test",
    },
    {
      name: "Link",
      link: "/bookmarks",
    },
  ],
  /* Social Media Share Buttons--available below every post
  ========================================= */
  shareButtons: {
    email: false,
    facebook: true,
    twitter: true,
    reddit: false,
    linkedIn: false,
  },

  /* Comments
  ========================================= */
  comments: {
    facebook: { enabled: true, appId: "" }, // appId: optional, but used to moderate fb comments
    disqus: { enabled: false, shortName: "" }, // Check your shortName on https://disqus.com
    utterances: { enabled: false, repoUrl: "" }, // i.e. 'ellismin/gatsby-blog-mdx'
  },

  /* More Custom Settings
  ========================================= */
  defaultTheme: "light", // Options: dark / light -- applied to first visitors
  showTimeToRead: false, // Shows time to read for each post in main page
  breakCodeLines: false, // Breaks long code lines instead of having horizontal scroll
  faviconSrc: `_assets/icon-code.png`, // Favicon
  gaTrackingId: ``, // Your google analytics tracking id--i.e. UA-*****
  googleAdSenseId: ``, // Your google AdSense client id--i.e. ca-pub-****
}

module.exports = config
