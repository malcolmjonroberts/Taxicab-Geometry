var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "front-preface-1",
  "level": "1",
  "url": "front-preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "To The Reader",
  "body": " To The Reader  I actually wrote this book just for me as a way of collecting together and organising the ideas from taxicab geometry that I used over a number of years of being involved with mathematics enrichment programs at the The University of Newcastle, NSW, Australia. As such this book is not aimed at anyone in particular! However, I can imagine that it might be useful for a teacher thinking about conducting mathematics enrichment activities or for a student wanting to pursue, out of curiosity, some mathematics on their own.  The mathematics enrichment activities outlined in this book were aimed at senior high school mathematicians but there is much that not so experienced mathematicians can tackle and also plenty to keep those who have progressed further busy as well.  I found taxicab geometry to be an excellent topic for a mathematics enrichment series for a number of reasons.   Over many years of running extension activities for high school mathematics students, (and professional development activities for high school mathematics teachers), I noticed that a number of the ideas in the high school mathematics syllabus (at least for NSW, Australia) could be revisited, in an accessible way, from the perspective of taxicab geometry. My hope was that revisiting ideas in the curriculum might make the extension activities a bit more of a direct benefit (in terms or their school mathematics) to those attending while looking at those ideas from a different perspective might also get the participants thinking a little more about the nature of mathematics.    As a topic, taxicab geometry has a \"low enough floor\" for most students to make progress from the very beginning while also having a \"high enough ceiling\" that every student will find something that is interesting and challenging.    Taxicab geometry seems to naturally encourage students to use many of the 21st century mathematical tools, such as dynamic geometry and computer algebra systems. I hasten to add that I would include pen and paper, or their digital equivalent, in the list of 21st century mathematical tools.    Finally, because there didn't seem (at the time at least), to be an extensive amount written about taxicab geometry (beyond basic overviews) that can be easily found on the Internet the topic also steers students toward posing, and then pursuing to some extent, their own questions.     "
},
{
  "id": "front-preface-2",
  "level": "1",
  "url": "front-preface-2.html",
  "type": "Preface",
  "number": "",
  "title": "The Structure Of The Book",
  "body": " The Structure Of The Book  The book is divided into two parts, Enrichment Modules and Investigations. In the Enrichment Modules part each chapter is meant to correspond to one, (two hour say), mathematics outreach, or even a professional development, session. Each chapter is divided into the following sections.   Module Outline: A brief overview of the module.    Preliminary Ideas: A brief discussion of the mathematical ideas that the module is going to explore. Usually this review will cover the ideas from a Euclidean geometry perspective. The discussion might be a review for some students but it might be an introduction to the ideas for other students. Hopefully, both types of students will still find areas of the module where they can make progress.    Investigations: A series of questions is given that, hopefully, act as prompts for students to begin to investigate the mathematical ideas from a taxicab geometry perspective.    Answers or Hints: These are provided so that students can get some external confirmation of whether what they are doing is legitimate.   Sources and Further Reading: These are provided for those students and\/or teachers who may be interested.    The Investigations part is less structured in that each chapter describes in some detail one (or more) investigation(s) that my students and I worked on in those mathematics enrichment classes. Sometimes the work continued on outside the classes. Really, I put this part of the book together just for a sense of completion on my part but it should give the reader an idea of the scope of the mathematics that could come out of any active engagement with the first part of the book.  "
},
{
  "id": "front-preface-3",
  "level": "1",
  "url": "front-preface-3.html",
  "type": "Preface",
  "number": "",
  "title": "My Approach To Mathematics Enrichment",
  "body": " My Approach To Mathematics Enrichment  What is mathematics enrichment, who is it for, what does it aim to achieve, is it successful and worthwhile? Such questions, I think, are worth thinking about for anyone involved in putting together a mathematics enrichment program. Indeed, there is a growing academic research literature devoted to probing such questions. See for example \"references\". What this literature shows, I feel, is that these questions, like any questions concerning human activity and motivation, are subtly nuanced, multi-faceted and surprisingly complex. So, in the following paragraphs I will briefly outline the mathematical enrichment sessions that I was involved in and how the structure and operation of those sessions was informed by my views on the above questions. Hopefully this will give some context and insight into to the contents of this book.  "
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
  "type": "Appendix",
  "number": "A",
  "title": "Some GeoGebra Tools",
  "body": " Some GeoGebra Tools   Some GeoGebra Tools   Text before the first section.    "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
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
