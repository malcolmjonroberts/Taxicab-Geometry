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
  "body": " To The Reader  I actually put this book together just for me as a way of collecting together and organising the ideas from taxicab geometry that I used over a number of years of being involved with mathematics enrichment programs at the The University of Newcastle, NSW, Australia. As such this book is not aimed at anyone in particular and, in this first draft at least, I haven't even bothered to try to make the writing particularly coherent, preferring instead just to get the ideas down! It is possible, however, that some of this material might be useful for a teacher thinking about conducting mathematics enrichment activities and hence the decision to make my thoughts public.  The mathematics enrichment activities outlined in this book were aimed at senior high school mathematicians but there is much that not so experienced mathematicians can tackle and also plenty to keep those who have progressed further busy as well.  I found taxicab geometry to be an excellent topic for a mathematics enrichment series for a number of reasons.   Over many years of running extension activities for high school mathematics students, (and professional development activities for high school mathematics teachers), I noticed that a number of the ideas in the high school mathematics syllabus (at least for NSW, Australia) could be revisited, in an accessible way, from the perspective of taxicab geometry. My hope was that revisiting ideas in the curriculum might make the extension activities a bit more of a direct benefit (in terms or their school mathematics) to those attending while looking at those ideas from a different perspective might also get the participants thinking a little more about the nature of mathematics.    As a topic, taxicab geometry has a \"low enough floor\" for most students to make progress from the very beginning while also having a \"high enough ceiling\" that every student will find something that is interesting and challenging.    Taxicab geometry seems to naturally encourage students to use many of the 21st century mathematical tools, such as dynamic geometry and computer algebra systems. I hasten to add that I would include pen and paper, or their digital equivalent, in the list of 21st century mathematical tools.    Finally, because there didn't seem (at the time at least), to be an extensive amount written about taxicab geometry (beyond basic overviews) that can be easily found on the Internet the topic also steers students toward posing, and then pursuing to some extent, their own questions.     The book is divided into two parts, Enrichment Modules and Investigations. In the Enrichment Modules part each chapter is meant to correspond to one, (two hour say), mathematics outreach, or even a professional development, session. Each chapter is divided into the following sections.   Module Outline: A brief overview of the module.    Preliminary Ideas: A brief discussion of the mathematical ideas that the module is going to explore. Usually this review will cover the ideas from a Euclidean geometry perspective. The discussion might be a review for some students but it might be an introduction to the ideas for other students. Hopefully, both types of students will still find areas of the module where they can make progress.    Investigations: A series of questions is given that, hopefully, act as prompts for students to begin to investigate the mathematical ideas from a taxicab geometry perspective.    Answers or Hints: These are provided so that students can get some external confirmation of whether what they are doing is legitimate.    Sources and Further Reading: These are provided for those students and\/or teachers who may be interested.     The Investigations part is less structured in that each chapter describes in some detail one (or more) investigation(s) that my students and I worked on in those mathematics enrichment classes. Sometimes the work continued on outside the classes. Really, I put this part of the book together just for a sense of completion on my part but it should give the reader an idea of the scope of the mathematics that could come out of any active engagement with the first part of the book.  In the appendix I briefly describe the format of the mathematical enrichment sessions for senior mathematics students in which taxicab geometry was the topic explored. I also briefy discuss how the structure and operation of those sessions was informed by my views about mathematics enrichment. Hopefully this will give some context and insight into to the contents of this book.  "
},
{
  "id": "mod-introduction",
  "level": "1",
  "url": "mod-introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introducing Taxicab Geometry",
  "body": " Introducing Taxicab Geometry   Module Outline    Where does taxicab geometry fit into the overall idea of geometry?  What is taxicab geometry?   First explorations in taxicab geometry  The taxicab metric  Some shapes defined by distance     A simple application in urban geography    Note that the ideas and problems in this module are taken directly from the book by Eugene F. Krause, Taxicab Geometry: An Adventure in Non-Euclidean Geometry (Dover Books on Mathematics) Revised Edition 1986    Preliminary Ideas   Euclidean Geometry  In most schools the geometry topics that are taught come from a branch of geometry called Euclidean Geometry. In simple terms, Plane Euclidean Geometry is the study of the properties of figures that can be drawn on piece of paper (i.e. can be drawn in the plane). Lines, triangles, circles and so on are examples of the kind of figures typically investigated in school geometry courses. Here are a couple of examples of the kind of properties of these figures that are considered to be results from Euclidean geometry.    The area of a triangle whose base has length and whose perpendicular height is is .      The perpendicular bisector of a chord of a circle passes through the centre of the circle.     is illustrated in . In this figure you can drag points and to move the chord of the circle around or you can drag points and to change the circle. As you can see, the perpendicular bisector of the chord, the line that passes through the mid-point of and and is at right angles to the chord , always passes through the centre of the circle.       It is called Euclidean geometry because of the enormous contribution that the ancient Greek mathematician Euclid of Alexandria (who lived around 300BC) made to this field of study. If you would like to know more about Euclid and his contribution to geometry you could start with the Encyclopedia Britannica article Euclid (Greek Mathematician) or the Wikipedia article Euclid .    Geometric figures defined by locus  Some geometric figures are readily described as the locus of points that obey some rule.    Coordinate Geometry  The idea of using coordinates (set up by placing a set of coordinate axes on the plane) to study geometric objects can be traced back to the work La Geometrie by Rene Descartes published in 1637. This way of studying geometry is called coordinate geometry .  In this module it would definitely be an advantage if you were already familiar with a some (Euclidean) coordinate geometry in the plane. In particular, given two points and could you:  Determine the coordinates of the point half-way between and , the mid-point of and ?  Determine the distance between and ?  Find the equation of the line that passes through and ?  Find the equation of the circle with centre and passing through ?     Some Coordinate Geometry   Consider the points and . For these points find:  The mid-point of and .  The distance between and .  The equation of the line that passes through and .  The equation of the circle with centre and passing through .      There are many ways in which we could go about finding the results asked for. One way might be to use the formulas that are listed at the end of this section. The methods outlined below, however, are ones that try to give some small insight into where those general formulas might come from.   show points and plotted in the plane. In this figure we have also constructed a right angled triangle with the interval as the hypotenuse. Note that, while it is not directly relevant to the example, in this figure you can drag the points and to different locations in the plane. This would be useful if you were looking for results that might be more generally applicable than just for the points and .          The -coordinate of the midpoint, , of and will be halfway between the -coordinate and the -coordinate , the average of -coordinate and the -coordinate . Similarly for the -coordinate of the midpoint. So, .    The distance, , between and is the length of the hypotenuse in the triangle . In this triangle, side has length 5 and side has length 3. Thus, using Pythagoras' Theorem .    If is some unspecified point on the line passing through and then triangles and will be similar. In similar triangles the ratio of corresponding sides are equal. So , which on rearranging gives . Note here that this argument isn't really complete. Does the argument hold if the point is between the points and ? This should be checked, as well as other placements of .    If is some unspecified point on the circle with centre and passing through then the distance of from will be equal to the distance of from . Thus , which on squaring both sides becomes        Even if you haven't come across much coordinate geometry before I would still encourage you to have a go at least at the early taxicab geometry activities since you can make progress in these activities just using common sense. Of course, the activities may take you a little longer and\/or you may approach them in different ways but that is nothing to worry about.  To finish off this very brief discussion of coordinate geometry I have listed a few basic results from coordinate geometry. Use this list as you see fit, maybe just as a reminder of these results or maybe as a reference for later on or even as a list of material that you might want to investigate further yourself. It would be good if you could explain why these results hold.  The Mid Point Formula  The mid-point, , of and has the coordinates .   The Distance Formula  The distance, between the points and is .   The Equation of the Line  The equation of the line that passes through the points and is .   The Equation of the Circle  The equation of the circle with centre and passing through is .     Taxicab Geometry  Taxicab Geometry is the same as plane (Euclidean) Coordinate Geometry except that in taxicab geometry distances are calculated, not as the crow flies, but as the (honest) taxicab driver would drive, i.e. taking the shortest path while staying on the \"streets\".  Given two points, and , in the plane we are going to use the notation to denote the Euclidean distance between the points and to denote the taxicab distance Taxicab distance between the points.   Calculating a Taxicab Distance  Consider the points and .  For these points we can see (for example by using the formula given in ) that .  Now look at . As you can see, there are many possible paths that the honest taxicab driver could take from to , (the figure shows just two of these). However all of these paths have the same length, i.e. 8. Thus .    Two possible Taxicab Paths from to       "
},
{
  "id": "mod-introduction-3-2-3",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-2-3",
  "type": "Theorem",
  "number": "1.1",
  "title": "",
  "body": "  The area of a triangle whose base has length and whose perpendicular height is is .   "
},
{
  "id": "thm_cpbt",
  "level": "2",
  "url": "mod-introduction.html#thm_cpbt",
  "type": "Theorem",
  "number": "1.2",
  "title": "",
  "body": "  The perpendicular bisector of a chord of a circle passes through the centre of the circle.   "
},
{
  "id": "fig_cpbt",
  "level": "2",
  "url": "mod-introduction.html#fig_cpbt",
  "type": "Figure",
  "number": "1.3",
  "title": "",
  "body": "    "
},
{
  "id": "mod-introduction-3-4-2",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate geometry "
},
{
  "id": "mod-introduction-3-4-4",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-4",
  "type": "Example",
  "number": "1.4",
  "title": "Some Coordinate Geometry.",
  "body": " Some Coordinate Geometry   Consider the points and . For these points find:  The mid-point of and .  The distance between and .  The equation of the line that passes through and .  The equation of the circle with centre and passing through .      There are many ways in which we could go about finding the results asked for. One way might be to use the formulas that are listed at the end of this section. The methods outlined below, however, are ones that try to give some small insight into where those general formulas might come from.   show points and plotted in the plane. In this figure we have also constructed a right angled triangle with the interval as the hypotenuse. Note that, while it is not directly relevant to the example, in this figure you can drag the points and to different locations in the plane. This would be useful if you were looking for results that might be more generally applicable than just for the points and .          The -coordinate of the midpoint, , of and will be halfway between the -coordinate and the -coordinate , the average of -coordinate and the -coordinate . Similarly for the -coordinate of the midpoint. So, .    The distance, , between and is the length of the hypotenuse in the triangle . In this triangle, side has length 5 and side has length 3. Thus, using Pythagoras' Theorem .    If is some unspecified point on the line passing through and then triangles and will be similar. In similar triangles the ratio of corresponding sides are equal. So , which on rearranging gives . Note here that this argument isn't really complete. Does the argument hold if the point is between the points and ? This should be checked, as well as other placements of .    If is some unspecified point on the circle with centre and passing through then the distance of from will be equal to the distance of from . Thus , which on squaring both sides becomes       "
},
{
  "id": "mod-introduction-3-4-7",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-7",
  "type": "Checkpoint",
  "number": "1.6",
  "title": "The Mid Point Formula.",
  "body": "The Mid Point Formula  The mid-point, , of and has the coordinates .  "
},
{
  "id": "exe_dist_form",
  "level": "2",
  "url": "mod-introduction.html#exe_dist_form",
  "type": "Checkpoint",
  "number": "1.7",
  "title": "The Distance Formula.",
  "body": "The Distance Formula  The distance, between the points and is .  "
},
{
  "id": "mod-introduction-3-4-9",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-9",
  "type": "Checkpoint",
  "number": "1.8",
  "title": "The Equation of the Line.",
  "body": "The Equation of the Line  The equation of the line that passes through the points and is .  "
},
{
  "id": "mod-introduction-3-4-10",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-10",
  "type": "Checkpoint",
  "number": "1.9",
  "title": "The Equation of the Circle.",
  "body": "The Equation of the Circle  The equation of the circle with centre and passing through is .  "
},
{
  "id": "mod-introduction-3-5-4",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-5-4",
  "type": "Example",
  "number": "1.10",
  "title": "Calculating a Taxicab Distance.",
  "body": " Calculating a Taxicab Distance  Consider the points and .  For these points we can see (for example by using the formula given in ) that .  Now look at . As you can see, there are many possible paths that the honest taxicab driver could take from to , (the figure shows just two of these). However all of these paths have the same length, i.e. 8. Thus .    Two possible Taxicab Paths from to    "
},
{
  "id": "mod-conics",
  "level": "1",
  "url": "mod-conics.html",
  "type": "Chapter",
  "number": "2",
  "title": "Conics",
  "body": " Conics   Module Outline    A brief summary of the conics in Euclidean geometry discussing:    A geometric definition  An algebraic definition  A focus-directrix definition  A locus definition     First explorations of conics in taxicab geometry using the focus\/directrix definition.      "
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
  "type": "Appendix",
  "number": "B",
  "title": "Some Thoughts On Mathematics Enrichment",
  "body": " Some Thoughts On Mathematics Enrichment   My Approach To Mathematics Enrichment   What is mathematics enrichment, who is it for, what does it aim to achieve, is it worthwhile? Such questions, I think, are worth thinking about for anyone involved in putting together a mathematics enrichment program. Furthermore, I would encourage the reader to seek out the academic literature devoted to probing such questions. For example, two references that influenced me were Renzulli and Reis (2014) (talking about enrichment in general) and Piggott (2011) (talking about mathematics enrichment in general).     Structure Of The Mathematics Enrichment Program  When I was in charge of the mathematics outreach (as we called it) at the University of Newcastle, we ran three mathematics enrichment programs, one aimed at Years 7, 8 students (i.e. junior high school), one aimed at Year 9 and 10 students (i.e. middle high school) and one aimed at Year 11 students, (i.e. senior high school). We called this the University of Newcastle Young Mathematicians Program, (UoNYMP). In the junior high school program the sessions were based on topics that students don't get to see in the standard school curricululm. In the middle high school program the sessions were based on the idea of thinking and working mathematically. In the senior high program we covered just one topic outside of the school curriculum but we looked at the topic in depth. The topic was, of course, taxicab geometry. Figure ? shows the front page of a small flyer that we used to promote our outreach. We were somewhat flexible in letting students attend whichever program they wanted. A number of students, having already attended one program, would come back the next year to attend the next program up even though they weren't in the target years. Other students attended a program up just so that they could be with friends.  The senior high school program had six 2-hour face-to-face sessions run at the University's Newcastle campus (from 4pm to 6pm) every second week over the course of one school term (i.e 12 weeks). Invitations were sent to all high schools within the region and the schools responded if they had students that wanted to attend. The sessions were free but we had a limit of 40 students. So, the students had to not only be sufficiently interested to self select (or to say yes when encouraged by their teachers) but also had to have the ability to not only get to the University but to get to there at the designated time. Not surprisingly then, I feel, we never had the problem of having to turn students away! On the other hand, we also never had the problem of not having enough students attend that we felt that the effort was not worth it. Teachers were also welcome to attend.  Within the sessions themselves, the structure was usually a mixture of a presenter talking, students working together in groups and whole-class discussions mediated by the presenter. As mentioned above, we used taxicab geometry as the topic for all six sessions but, apart from the first session, the sessions were essentially independent. The sessions were somewhat informal in that attendance wasn't policed, although we did keep track of numbers for program review purposes. We also had a web presence where students could obtain materials if they missed a session. We also tried to encourage the students to write up some of their own investigations for \"publication\" on the website but, invariably, this was never taken up. The students, it seemed, had too many other activities\/pressures that took precedence.    What Is Mathematics Enrichment?      "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
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
