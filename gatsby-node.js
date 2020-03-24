const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allAirtable(limit: 1000) {
        edges {
          node {
            id
            table
            data {
              Rubrik
              Titel
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.error) {
      result.errors.forEach(e => console.log(e.toString()))
      return Promise.reject(result.errors)
    }
    const posts = result.data.allAirtable.edges

    posts.forEach(edge => {
      const id = edge.node.id
      if (edge.node.table === "Nyheter") {
        const slug = edge.node.data.Rubrik.replace(/([äå])+/g, "a")
          .replace(/([ö])+/g, "o")
          .replace(/\W+/g, "-")
          .toLowerCase()
        createPage({
          path: "/nyheter/" + slug,
          component: path.resolve(
            `src/templates/${edge.node.table}Template.js`
          ),
          context: {
            id,
          },
        })
      }
      if (edge.node.table === "Program") {
        const slug = edge.node.data.Titel.replace(/([äå])+/g, "a")
          .replace(/([ö])+/g, "o")
          .replace(/\W+/g, "-")
          .toLowerCase()
        createPage({
          path: "/program/" + slug,
          component: path.resolve(
            `src/templates/${edge.node.table}Template.js`
          ),
          context: {
            id,
          },
        })
      }
    })
  })
}
