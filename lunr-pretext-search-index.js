var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "mod-introduction",
  "level": "1",
  "url": "mod-introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introducing Taxicab Geometry",
  "body": " Introducing Taxicab Geometry   Text before the first section.    Module Outline    Where does taxicab geometry fit into the overall idea of geometry?  What is taxicab geometry?   First explorations in taxicab geometry  The taxicab metric  Some shapes defined by distance     A simple application in urban geography    Note that the ideas and problems in this module are taken directly from the book by Eugene F. Krause, Taxicab Geometry: An Adventure in Non-Euclidean Geometry (Dover Books on Mathematics) Revised Edition 1986   "
},
{
  "id": "mod-conics",
  "level": "1",
  "url": "mod-conics.html",
  "type": "Chapter",
  "number": "2",
  "title": "Conics",
  "body": " Conics   Text before the first section.   "
},
{
  "id": "inv-conics",
  "level": "1",
  "url": "inv-conics.html",
  "type": "Chapter",
  "number": "3",
  "title": "Conics",
  "body": " Conics   Text before the first section.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
