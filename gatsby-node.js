/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === "/") {
    page.matchPath = "/*"
    createPage(page)
  } else if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}
