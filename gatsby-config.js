require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-starter-shopify",
    siteTitleDefault: "gatsby-starter-shopify by @GatsbyJS",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "3xdock",
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        accessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
        shopifyConnections: ["collections"],
        apiVersion: "2024-10",
        paginationSize: 100, // 减少分页大小以降低单次请求负载
        timeout: 1000,    // 增加超时时间到 2 分钟
        downloadImages: false, // 禁止下载图片以减少负载
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
