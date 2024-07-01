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
  "body": " To The Reader  I actually put this book together just for me as a way of collecting together and organising the ideas from taxicab geometry that I used over a number of years of being involved with mathematics enrichment programs at the The University of Newcastle, NSW, Australia. As such this book is not aimed at any particular reader. If someone does find it any way useful, then that is a bonus!  The mathematics enrichment sessions upon which this book is based were aimed at senior high school mathematicians but there is much here that not so experienced mathematicians could tackle and also plenty that would keep those who have progressed further busy as well.   The book is divided into three parts, TaxiCab Geometry, Enrichment Modules and Investigations. In the first part, Taxicab Geometry, I have attempted to put together a (hopefully) coherent account of the taxicab geometry topics that was looked at in those mathematics enrichment sessions. In the Enrichment Modules part each chapter is structured as if it was one, (two hour say), mathematics outreach session. So, each chapter gives an idea of what I presented in the session as well as a set of Activities that the students worked on at appropriate times.   The final part, Investigations, is less structured in that each chapter describes in some detail one (or more) investigation(s) that my students and I worked on in those mathematics enrichment classes. Sometimes the work continued on outside the classes. Really, I put this part of the book together just for a sense of completion on my part but it should give the reader an idea of the scope of the mathematics that could come out of any active engagement with the first part of the book.  There are two appendices, In the first appendix, I briefly describe the format of the mathematical enrichment sessions for senior mathematics students in which taxicab geometry was the topic explored. I also briefy discuss how the structure and operation of those sessions was informed by my views about mathematics enrichment. Hopefully this will give some context and insight into to the contents of this book.  The second appendix describes some GeoGebra tools that I developed over the course of running the mathematics enrichment sessions. I assume that the tools themselves could be useful but more importantly, I hope that these tools give an idea of what is possible and hence inspire the reader to make even more tools to help them with their own investigations.  "
},
{
  "id": "tax-introduction",
  "level": "1",
  "url": "tax-introduction.html",
  "type": "Chapter",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   What Is Taxicab Geometry  A standard reference on taxicab geometry for those new to the subject is . Krause begins his treatise by saying:   The usual way to describe a (plane) geometry is to tell what its points are, what its lines are, how distance is measured, and how angle measure is determined. This is a footnote     The standard geometry taught in schools is plane Euclidean geometry. Intuitively, this geometry can be thought of as the geometry of a sheet of paper (the Euclidean plane). The points, then, are the (infinitesimal) dots that make up a plane. The lines are those paths that can be drawn with a ruler. Distances can be measured using a suitable ruler and angle measures can be determined using a protractor. We will use the symbol to denote the Euclidean plane.  Further, if a rectangular coordinate system is drawn on the sheet of paper then the points on the plane can be uniquely identified by their coordinates with respect to this coordinate system, lines can be identified via a linear equation in two variables and distances can be calculated via Pythagoras' Theorem. Angle measures can also be calculated, rather than measured via a protractor say, but not quite so simply.  We will refer to the study of the geometry of the Euclidean plane via the use of a rectangular coordinate system as coordinate geometry (but it is also known as analytic geometry or Cartesian geometry ). Co-ordinate geometry, then, is the starting place for our journey into taxicab geometry.   "
},
{
  "id": "tax-introduction-2-6",
  "level": "2",
  "url": "tax-introduction.html#tax-introduction-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate geometry analytic geometry Cartesian geometry "
},
{
  "id": "mod-introduction",
  "level": "1",
  "url": "mod-introduction.html",
  "type": "Chapter",
  "number": "2",
  "title": "Introducing Taxicab Geometry",
  "body": " Introducing Taxicab Geometry   Module Outline   Preliminary Ideas  In order to give taxicab geometry some context we will firstly think about some of the big ideas in geometry.  Then we will look at some results from plane co-ordinate geometry that could be useful in our investigations in taxicab geometry.  Lastly, we will introduce the idea of taxicab geometry.    Investigations  Our first investigations in taxicab geometry:  The taxicab metric  Some shapes defined by distance  A simple application in urban geography    Note that the ideas and problems in this module are taken directly from the book by Eugene F. Krause, Taxicab Geometry: An Adventure in Non-Euclidean Geometry (Dover Books on Mathematics) Revised Edition 1986     Preliminary Ideas   Euclidean Geometry  In most schools the geometry topics that are taught come from a branch of geometry called Euclidean Geometry. In simple terms, Plane Euclidean Geometry is the study of the properties of figures that can be drawn on piece of paper (i.e. can be drawn in the plane). Lines, triangles, circles and so on are examples of the kind of figures typically investigated in school geometry courses. Here are a couple of examples of the kind of properties of these figures that are considered to be results from Euclidean geometry.    The area of a triangle whose base has length and whose perpendicular height is is .      The perpendicular bisector of a chord of a circle passes through the centre of the circle.     is illustrated in . In this figure you can drag points and to move the chord of the circle around or you can drag points and to change the circle. As you can see, the perpendicular bisector of the chord, the line that passes through the mid-point of and and is at right angles to the chord , always passes through the centre of the circle.       It is called Euclidean geometry because of the enormous contribution that the ancient Greek mathematician Euclid of Alexandria (who lived around 300BC) made to this field of study. If you would like to know more about Euclid and his contribution to geometry you could start with the Encyclopedia Britannica article Euclid (Greek Mathematician) or the Wikipedia article Euclid .    Geometric figures defined by locus  Some geometric figures are readily described as the locus of points that obey some rule.    Coordinate Geometry  The idea of using coordinates (set up by placing a set of coordinate axes on the plane) to study geometric objects can be traced back to the work La Geometrie by Rene Descartes published in 1637. This way of studying geometry is called coordinate geometry .  In this module it would definitely be an advantage if you were already familiar with a some (Euclidean) coordinate geometry in the plane. In particular, given two points and could you:  Determine the coordinates of the point half-way between and , the mid-point of and ?  Determine the distance between and ?  Find the equation of the line that passes through and ?  Find the equation of the circle with centre and passing through ?     Some Coordinate Geometry   Consider the points and . For these points find:  The mid-point of and .  The distance between and .  The equation of the line that passes through and .  The equation of the circle with centre and passing through .      There are many ways in which we could go about finding the results asked for. One way might be to use the formulas that are listed at the end of this section. The methods outlined below, however, are ones that try to give some small insight into where those general formulas might come from.   show points and plotted in the plane. In this figure we have also constructed a right angled triangle with the interval as the hypotenuse. Note that, while it is not directly relevant to the example, in this figure you can drag the points and to different locations in the plane. This would be useful if you were looking for results that might be more generally applicable than just for the points and .          The -coordinate of the midpoint, , of and will be halfway between the -coordinate and the -coordinate , the average of -coordinate and the -coordinate . Similarly for the -coordinate of the midpoint. So, .    The distance, , between and is the length of the hypotenuse in the triangle . In this triangle, side has length 5 and side has length 3. Thus, using Pythagoras' Theorem .    If is some unspecified point on the line passing through and then triangles and will be similar. In similar triangles the ratio of corresponding sides are equal. So , which on rearranging gives . Note here that this argument isn't really complete. Does the argument hold if the point is between the points and ? This should be checked, as well as other placements of .    If is some unspecified point on the circle with centre and passing through then the distance of from will be equal to the distance of from . Thus , which on squaring both sides becomes        Even if you haven't come across much coordinate geometry before I would still encourage you to have a go at least at the early taxicab geometry activities since you can make progress in these activities just using common sense. Of course, the activities may take you a little longer and\/or you may approach them in different ways but that is nothing to worry about.  To finish off this very brief discussion of coordinate geometry I have listed a few basic results from coordinate geometry. Use this list as you see fit, maybe just as a reminder of these results or maybe as a reference for later on or even as a list of material that you might want to investigate further yourself. It would be good if you could explain why these results hold.  The Mid Point Formula  The mid-point, , of and has the coordinates .   The Distance Formula  The distance, between the points and is .   The Equation of the Line  The equation of the line that passes through the points and is .   The Equation of the Circle  The equation of the circle with centre and passing through is .     Taxicab Geometry  Taxicab Geometry is the same as plane (Euclidean) Coordinate Geometry except that in taxicab geometry distances are calculated, not as the crow flies, but as the (honest) taxicab driver would drive, i.e. taking the shortest path while staying on the \"streets\".  Given two points, and , in the plane we are going to use the notation to denote the Euclidean distance between the points and to denote the taxicab distance Taxicab distance between the points.   Calculating a Taxicab Distance  Consider the points and .  For these points we can see (for example by using the formula given in ) that .  Now look at . As you can see, there are many possible paths that the honest taxicab driver could take from to , (the figure shows just two of these). However all of these paths have the same length, i.e. 8. Thus .    Two possible Taxicab Paths from to        Activities       First explorations of taxicab distance     Find both the Euclidean distance, and the taxicab distance, , between the points and     ,     Find both the Euclidean distance, and the taxicab distance, , between the points and .    ,     Find both the Euclidean distance, and the taxicab distance, , between the points and .    ,     Find two points in the plane for which .       Find two points in the plane for which .    Find two points in the plane for which .    Find two points in the plane for which .    So far we have only used points that have integer coordinates? How might we proceed if we decide to allow points with any real number in its coordinates?   Rather than requiring the taxicab to stay on the grid lines (which are usually only drawn at integer values) require instead that the taxicab is only allowed to travel horizontally and vertically, ( parallel to the axes of the coordinate system).    If must ?   No    If must ?   No    Given the numbers and find:   when and    when and    when and       Given the points and find their taxicab mid-point .    Come up with a better name than taxicab mid-point for what you just found.    Make a tool in your favourite dynamic geometry environment ( GeoGebra) that will plot the taxicab mid-point (or whatever you are calling it now) given two points as the input to the tool.     Some shapes defined by locus   Let .  If calculate .  Find two other points the same distance from as is.   Plot the set of all points at taxicab distance from .    On the same diagram plot the set of all points at Euclidean distance from , ( whose Euclidean distance from is the same as the taxicab distance from to ). Give (sensible) names to the two sets of points that you have now plotted.   In taxicab geometry what is a reasonable numerical value for ?       3   ,   4      Draw diagrams showing different ways in which Euclidean circles can intersect.       Draw diagrams showing different ways in which taxicab circles can intersect.       Can taxicab circles intersect in ways that Euclidean circles can't?       Can Euclidean circles intersect in ways that taxicab circles can't?       Let and .   Plot the set of all points for which .    Plot the set of all points for which .    Repeat but with other choices for and . Can you predict what the set of points will look like just given the points and ?           A simple application to urban geography   Alice and Bruno are moving to Ideal City. In Ideal City the streets are set out in a perfect grid-like pattern and so they are going to use taxicab geometry to model the city.   Alice's work place is at while Bruno will work at . They decide that their new home should be located in a part of the city where the sum of the distances that they will have to travel to work should be as small as possible. Where in the city should they be looking?    After finding that Alice has an early morning start they decide that, as well as the requirement in a), their home should also be closer to Alice’s work. Now where should they look?          In Ideal City there are three high schools, Fillmore at , Graceland at and Hartley at .   Determine the boundaries so that students attend the nearest school.    If Burger Baron wants to open a store which is the same distance from all three schools, where should it be?    If a fourth high school, Parmenter, is built at draw in the new school boundaries.            "
},
{
  "id": "mod-introduction-3-2-3",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-2-3",
  "type": "Theorem",
  "number": "2.1",
  "title": "",
  "body": "  The area of a triangle whose base has length and whose perpendicular height is is .   "
},
{
  "id": "thm_cpbt",
  "level": "2",
  "url": "mod-introduction.html#thm_cpbt",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  The perpendicular bisector of a chord of a circle passes through the centre of the circle.   "
},
{
  "id": "fig_cpbt",
  "level": "2",
  "url": "mod-introduction.html#fig_cpbt",
  "type": "Figure",
  "number": "2.3",
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
  "number": "2.4",
  "title": "Some Coordinate Geometry.",
  "body": " Some Coordinate Geometry   Consider the points and . For these points find:  The mid-point of and .  The distance between and .  The equation of the line that passes through and .  The equation of the circle with centre and passing through .      There are many ways in which we could go about finding the results asked for. One way might be to use the formulas that are listed at the end of this section. The methods outlined below, however, are ones that try to give some small insight into where those general formulas might come from.   show points and plotted in the plane. In this figure we have also constructed a right angled triangle with the interval as the hypotenuse. Note that, while it is not directly relevant to the example, in this figure you can drag the points and to different locations in the plane. This would be useful if you were looking for results that might be more generally applicable than just for the points and .          The -coordinate of the midpoint, , of and will be halfway between the -coordinate and the -coordinate , the average of -coordinate and the -coordinate . Similarly for the -coordinate of the midpoint. So, .    The distance, , between and is the length of the hypotenuse in the triangle . In this triangle, side has length 5 and side has length 3. Thus, using Pythagoras' Theorem .    If is some unspecified point on the line passing through and then triangles and will be similar. In similar triangles the ratio of corresponding sides are equal. So , which on rearranging gives . Note here that this argument isn't really complete. Does the argument hold if the point is between the points and ? This should be checked, as well as other placements of .    If is some unspecified point on the circle with centre and passing through then the distance of from will be equal to the distance of from . Thus , which on squaring both sides becomes       "
},
{
  "id": "mod-introduction-3-4-7",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-7",
  "type": "Checkpoint",
  "number": "2.6",
  "title": "The Mid Point Formula.",
  "body": "The Mid Point Formula  The mid-point, , of and has the coordinates .  "
},
{
  "id": "exe_dist_form",
  "level": "2",
  "url": "mod-introduction.html#exe_dist_form",
  "type": "Checkpoint",
  "number": "2.7",
  "title": "The Distance Formula.",
  "body": "The Distance Formula  The distance, between the points and is .  "
},
{
  "id": "mod-introduction-3-4-9",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-9",
  "type": "Checkpoint",
  "number": "2.8",
  "title": "The Equation of the Line.",
  "body": "The Equation of the Line  The equation of the line that passes through the points and is .  "
},
{
  "id": "mod-introduction-3-4-10",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-4-10",
  "type": "Checkpoint",
  "number": "2.9",
  "title": "The Equation of the Circle.",
  "body": "The Equation of the Circle  The equation of the circle with centre and passing through is .  "
},
{
  "id": "mod-introduction-3-5-4",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-3-5-4",
  "type": "Example",
  "number": "2.10",
  "title": "Calculating a Taxicab Distance.",
  "body": " Calculating a Taxicab Distance  Consider the points and .  For these points we can see (for example by using the formula given in ) that .  Now look at . As you can see, there are many possible paths that the honest taxicab driver could take from to , (the figure shows just two of these). However all of these paths have the same length, i.e. 8. Thus .    Two possible Taxicab Paths from to    "
},
{
  "id": "mod-introduction-4-2-2-3",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-3",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " Find both the Euclidean distance, and the taxicab distance, , between the points and     ,   "
},
{
  "id": "mod-introduction-4-2-2-4",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-4",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Find both the Euclidean distance, and the taxicab distance, , between the points and .    ,   "
},
{
  "id": "mod-introduction-4-2-2-5",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-5",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " Find both the Euclidean distance, and the taxicab distance, , between the points and .    ,   "
},
{
  "id": "mod-introduction-4-2-2-6",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-6",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Find two points in the plane for which .     "
},
{
  "id": "mod-introduction-4-2-2-7",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-7",
  "type": "Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " Find two points in the plane for which .  "
},
{
  "id": "mod-introduction-4-2-2-8",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-8",
  "type": "Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " Find two points in the plane for which .  "
},
{
  "id": "mod-introduction-4-2-2-9",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-9",
  "type": "Exercise",
  "number": "2.3.7",
  "title": "",
  "body": " Find two points in the plane for which .  "
},
{
  "id": "mod-introduction-4-2-2-10",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-10",
  "type": "Exercise",
  "number": "2.3.8",
  "title": "",
  "body": " So far we have only used points that have integer coordinates? How might we proceed if we decide to allow points with any real number in its coordinates?   Rather than requiring the taxicab to stay on the grid lines (which are usually only drawn at integer values) require instead that the taxicab is only allowed to travel horizontally and vertically, ( parallel to the axes of the coordinate system).  "
},
{
  "id": "mod-introduction-4-2-2-11",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-11",
  "type": "Exercise",
  "number": "2.3.9",
  "title": "",
  "body": " If must ?   No  "
},
{
  "id": "mod-introduction-4-2-2-12",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-12",
  "type": "Exercise",
  "number": "2.3.10",
  "title": "",
  "body": " If must ?   No  "
},
{
  "id": "mod-introduction-4-2-2-13",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-13",
  "type": "Exercise",
  "number": "2.3.11",
  "title": "",
  "body": " Given the numbers and find:   when and    when and    when and     "
},
{
  "id": "mod-introduction-4-2-2-14",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-14",
  "type": "Exercise",
  "number": "2.3.12",
  "title": "",
  "body": " Given the points and find their taxicab mid-point .  "
},
{
  "id": "mod-introduction-4-2-2-15",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-15",
  "type": "Exercise",
  "number": "2.3.13",
  "title": "",
  "body": " Come up with a better name than taxicab mid-point for what you just found.  "
},
{
  "id": "mod-introduction-4-2-2-16",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-2-16",
  "type": "Exercise",
  "number": "2.3.14",
  "title": "",
  "body": " Make a tool in your favourite dynamic geometry environment ( GeoGebra) that will plot the taxicab mid-point (or whatever you are calling it now) given two points as the input to the tool.  "
},
{
  "id": "mod-introduction-4-2-3-2",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-2",
  "type": "Exercise",
  "number": "2.3.15",
  "title": "",
  "body": " Let .  If calculate .  Find two other points the same distance from as is.   Plot the set of all points at taxicab distance from .    On the same diagram plot the set of all points at Euclidean distance from , ( whose Euclidean distance from is the same as the taxicab distance from to ). Give (sensible) names to the two sets of points that you have now plotted.   In taxicab geometry what is a reasonable numerical value for ?       3   ,   4    "
},
{
  "id": "mod-introduction-4-2-3-3",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-3",
  "type": "Exercise",
  "number": "2.3.16",
  "title": "",
  "body": " Draw diagrams showing different ways in which Euclidean circles can intersect.     "
},
{
  "id": "mod-introduction-4-2-3-4",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-4",
  "type": "Exercise",
  "number": "2.3.17",
  "title": "",
  "body": " Draw diagrams showing different ways in which taxicab circles can intersect.     "
},
{
  "id": "mod-introduction-4-2-3-5",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-5",
  "type": "Exercise",
  "number": "2.3.18",
  "title": "",
  "body": " Can taxicab circles intersect in ways that Euclidean circles can't?     "
},
{
  "id": "mod-introduction-4-2-3-6",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-6",
  "type": "Exercise",
  "number": "2.3.19",
  "title": "",
  "body": " Can Euclidean circles intersect in ways that taxicab circles can't?     "
},
{
  "id": "mod-introduction-4-2-3-7",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-3-7",
  "type": "Exercise",
  "number": "2.3.20",
  "title": "",
  "body": " Let and .   Plot the set of all points for which .    Plot the set of all points for which .    Repeat but with other choices for and . Can you predict what the set of points will look like just given the points and ?        "
},
{
  "id": "mod-introduction-4-2-4-2",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-4-2",
  "type": "Exercise",
  "number": "2.3.21",
  "title": "",
  "body": " Alice and Bruno are moving to Ideal City. In Ideal City the streets are set out in a perfect grid-like pattern and so they are going to use taxicab geometry to model the city.   Alice's work place is at while Bruno will work at . They decide that their new home should be located in a part of the city where the sum of the distances that they will have to travel to work should be as small as possible. Where in the city should they be looking?    After finding that Alice has an early morning start they decide that, as well as the requirement in a), their home should also be closer to Alice’s work. Now where should they look?        "
},
{
  "id": "mod-introduction-4-2-4-3",
  "level": "2",
  "url": "mod-introduction.html#mod-introduction-4-2-4-3",
  "type": "Exercise",
  "number": "2.3.22",
  "title": "",
  "body": " In Ideal City there are three high schools, Fillmore at , Graceland at and Hartley at .   Determine the boundaries so that students attend the nearest school.    If Burger Baron wants to open a store which is the same distance from all three schools, where should it be?    If a fourth high school, Parmenter, is built at draw in the new school boundaries.        "
},
{
  "id": "mod-conics",
  "level": "1",
  "url": "mod-conics.html",
  "type": "Chapter",
  "number": "3",
  "title": "Taxicab Conics",
  "body": " Taxicab Conics   Module Outline  This is attempt ?   Preliminary Ideas  A brief discussion of the conics in Euclidean geometry, primarily by looking at the different ways in which the conics can be defined.    Investigations  Conics in taxicab geometry via the focus\/directrix definition.  The ellipse  The parabola  The hyperbola       Preliminary Ideas   The Conics in Euclidean Geometry  In Euclidean geometry the conics are a family of curves in the plane. They can be defined in a number of different ways.   A Geometric Definition  A conic is a curve obtained as the intersection of a plane and the surface of a cone (or two cones placed apex to apex). The four types of (non-degenerate) conics are the hyperbola, the parabola, the ellipse and the circle, as illustrated in figure ?   From figure ? you can why a this family of curves is also sometimes referred to as the conic sections, (rather than simply the conics).   An Algebraic Definition  A conic is a curve associated with the equation where are real numbers and , and are not all 0.   If then the equation represents an ellipse, a circle, a point or no curve. For the equation to represent a circle and .    If then the equation represents an parabola, two parallel lines, one line or no curve.    If then the equation represents a hyperbola or two intersecting lines. If also then the equation represents a rectangular hyperbola.      Add a couple of examples here.   A Focus-Directrix Definition  A non-circular conic is the set of points, , whose distances to a given point , called the focus, and a given line , called the directrix, are in a fixed ratio, , called the eccentricity, for which .   If then the conic is an ellipse.    If then the conic is a parabola.    If then the conic is a hyperbola.      Add a couple of examples here too.   A Locus Definition     A circle is the locus of a point that moves such that its distance from a given point remains constant, such that . The constant is the radius of the circle.    A parabola is the locus of a point that moves such that its distance from a given point and a given line remains equal, such that .    An ellipse is the locus of a point that moves such that the sum of its distances from two given points and remains equal, such that .    A hyperbola is the locus of a point that moves such that the difference of its distances from two given points and remains constant, such that .      Add a couple of examples here too.    Further Information     Activities      Parabolas   Sketch the graph of the taxicab parabola whose focus is the point and whose directrix is the line where:    and is    and is    and is    and is     Ellipses    Sketch the graph of the taxicab ellipse with focus , directrix and with elasticity .  What is the effect of varying the elasticity ?  Will the ellipse have the same basic shape if the directrix is not vertical or horizontal?  Sketch the graph of the taxicab ellipse with foci at , and satisfying .  What is the effect of varying the number 8 in exercise ??  Will the ellipse have the same basic shape if the foci are not aligned vertically or horizontally?    Hyperbolae    Sketch the graph of the taxicab hyperbola with focus , directrix and with elasticity .  What is the effect of varying the elasticity ?  Will the ellipse have the same basic shape if the directrix is not vertical or horizontal?  Sketch the graph of the taxicab hyperbola with foci at , and satisfying .  What is the effect of varying the number 6 in exercise ??  Will the hyperbola have the same basic shape if the foci are not aligned vertically or horizontally?     "
},
{
  "id": "mod-conics-3-2-2",
  "level": "2",
  "url": "mod-conics.html#mod-conics-3-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conics "
},
{
  "id": "mod-conics-3-2-3",
  "level": "2",
  "url": "mod-conics.html#mod-conics-3-2-3",
  "type": "Definition",
  "number": "3.1",
  "title": "A Geometric Definition.",
  "body": " A Geometric Definition  A conic is a curve obtained as the intersection of a plane and the surface of a cone (or two cones placed apex to apex). The four types of (non-degenerate) conics are the hyperbola, the parabola, the ellipse and the circle, as illustrated in figure ?  "
},
{
  "id": "mod-conics-3-2-5",
  "level": "2",
  "url": "mod-conics.html#mod-conics-3-2-5",
  "type": "Definition",
  "number": "3.2",
  "title": "An Algebraic Definition.",
  "body": " An Algebraic Definition  A conic is a curve associated with the equation where are real numbers and , and are not all 0.   If then the equation represents an ellipse, a circle, a point or no curve. For the equation to represent a circle and .    If then the equation represents an parabola, two parallel lines, one line or no curve.    If then the equation represents a hyperbola or two intersecting lines. If also then the equation represents a rectangular hyperbola.     "
},
{
  "id": "mod-conics-3-2-7",
  "level": "2",
  "url": "mod-conics.html#mod-conics-3-2-7",
  "type": "Definition",
  "number": "3.3",
  "title": "A Focus-Directrix Definition.",
  "body": " A Focus-Directrix Definition  A non-circular conic is the set of points, , whose distances to a given point , called the focus, and a given line , called the directrix, are in a fixed ratio, , called the eccentricity, for which .   If then the conic is an ellipse.    If then the conic is a parabola.    If then the conic is a hyperbola.     "
},
{
  "id": "mod-conics-3-2-9",
  "level": "2",
  "url": "mod-conics.html#mod-conics-3-2-9",
  "type": "Definition",
  "number": "3.4",
  "title": "A Locus Definition.",
  "body": " A Locus Definition     A circle is the locus of a point that moves such that its distance from a given point remains constant, such that . The constant is the radius of the circle.    A parabola is the locus of a point that moves such that its distance from a given point and a given line remains equal, such that .    An ellipse is the locus of a point that moves such that the sum of its distances from two given points and remains equal, such that .    A hyperbola is the locus of a point that moves such that the difference of its distances from two given points and remains constant, such that .     "
},
{
  "id": "mod-conics-4-2-2-3",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-2-3",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": " and is  "
},
{
  "id": "mod-conics-4-2-2-4",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-2-4",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " and is  "
},
{
  "id": "mod-conics-4-2-2-5",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-2-5",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " and is  "
},
{
  "id": "mod-conics-4-2-2-6",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-2-6",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": " and is  "
},
{
  "id": "mod-conics-4-2-3-3",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-3",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "Sketch the graph of the taxicab ellipse with focus , directrix and with elasticity . "
},
{
  "id": "mod-conics-4-2-3-4",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-4",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "What is the effect of varying the elasticity ? "
},
{
  "id": "mod-conics-4-2-3-5",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-5",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "Will the ellipse have the same basic shape if the directrix is not vertical or horizontal? "
},
{
  "id": "mod-conics-4-2-3-6",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-6",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "Sketch the graph of the taxicab ellipse with foci at , and satisfying . "
},
{
  "id": "mod-conics-4-2-3-7",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-7",
  "type": "Exercise",
  "number": "3.3.9",
  "title": "",
  "body": "What is the effect of varying the number 8 in exercise ?? "
},
{
  "id": "mod-conics-4-2-3-8",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-3-8",
  "type": "Exercise",
  "number": "3.3.10",
  "title": "",
  "body": "Will the ellipse have the same basic shape if the foci are not aligned vertically or horizontally? "
},
{
  "id": "mod-conics-4-2-4-3",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-3",
  "type": "Exercise",
  "number": "3.3.11",
  "title": "",
  "body": "Sketch the graph of the taxicab hyperbola with focus , directrix and with elasticity . "
},
{
  "id": "mod-conics-4-2-4-4",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-4",
  "type": "Exercise",
  "number": "3.3.12",
  "title": "",
  "body": "What is the effect of varying the elasticity ? "
},
{
  "id": "mod-conics-4-2-4-5",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-5",
  "type": "Exercise",
  "number": "3.3.13",
  "title": "",
  "body": "Will the ellipse have the same basic shape if the directrix is not vertical or horizontal? "
},
{
  "id": "mod-conics-4-2-4-6",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-6",
  "type": "Exercise",
  "number": "3.3.14",
  "title": "",
  "body": "Sketch the graph of the taxicab hyperbola with foci at , and satisfying . "
},
{
  "id": "mod-conics-4-2-4-7",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-7",
  "type": "Exercise",
  "number": "3.3.15",
  "title": "",
  "body": "What is the effect of varying the number 6 in exercise ?? "
},
{
  "id": "mod-conics-4-2-4-8",
  "level": "2",
  "url": "mod-conics.html#mod-conics-4-2-4-8",
  "type": "Exercise",
  "number": "3.3.16",
  "title": "",
  "body": "Will the hyperbola have the same basic shape if the foci are not aligned vertically or horizontally? "
},
{
  "id": "mod-triangles",
  "level": "1",
  "url": "mod-triangles.html",
  "type": "Chapter",
  "number": "4",
  "title": "Triangles In Taxicab Geometry",
  "body": " Triangles In Taxicab Geometry   Activities      The Fermat Point   In Euclidean geometry , the Fermat point of a triangle is the point that gives the smallest total if you add the distances from the point to each of the vertices of the triangle.    Given the three points , , find a point for which is as small as possible.       What happens for different choices of , and ?     Pythagoras Theorem     Consider the triangle with vertices at , , . Find a relationship between the taxicab lengths of the sides of this triangle.       Does the relationship that you found in a hold for other right-angled triangles? (That is, is the relationship that you found in a a candidate for a Taxicab Pythagoras Theorem?)     Area of a Triangle   Recall that in Euclidean geometry the area of a triangle with side lengths , and can be found using Heron's formula: where .    Find the (Euclidean) area of the triangle whose vertices are , , .       Repeat a but use Heron's formula.    Repeat a and b but this time in taxicab geometry.    Consider the triangle with vertices at , , . Determine the area of this triangle in both Euclidean and taxicab geometry.     Circumscribing and Inscribing Circles     Consider the triangle with vertices at , , . Find, if possible, a circumscribing taxicab circle for this triangle.    Find, if possible, an inscribed taxicab circle for the triangle given in a.      "
},
{
  "id": "mod-triangles-2-2-2-3",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-2-3",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": " Given the three points , , find a point for which is as small as possible.     "
},
{
  "id": "mod-triangles-2-2-2-4",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-2-4",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": " What happens for different choices of , and ?  "
},
{
  "id": "mod-triangles-2-2-3-3",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-3-3",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": " Consider the triangle with vertices at , , . Find a relationship between the taxicab lengths of the sides of this triangle.     "
},
{
  "id": "mod-triangles-2-2-3-4",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-3-4",
  "type": "Exercise",
  "number": "4.1.4",
  "title": "",
  "body": " Does the relationship that you found in a hold for other right-angled triangles? (That is, is the relationship that you found in a a candidate for a Taxicab Pythagoras Theorem?)  "
},
{
  "id": "mod-triangles-2-2-4-3",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-4-3",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": " Find the (Euclidean) area of the triangle whose vertices are , , .     "
},
{
  "id": "mod-triangles-2-2-4-4",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-4-4",
  "type": "Exercise",
  "number": "4.1.6",
  "title": "",
  "body": " Repeat a but use Heron's formula.  "
},
{
  "id": "mod-triangles-2-2-4-5",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-4-5",
  "type": "Exercise",
  "number": "4.1.7",
  "title": "",
  "body": " Repeat a and b but this time in taxicab geometry.  "
},
{
  "id": "mod-triangles-2-2-4-6",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-4-6",
  "type": "Exercise",
  "number": "4.1.8",
  "title": "",
  "body": " Consider the triangle with vertices at , , . Determine the area of this triangle in both Euclidean and taxicab geometry.  "
},
{
  "id": "mod-triangles-2-2-5-3",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-5-3",
  "type": "Exercise",
  "number": "4.1.9",
  "title": "",
  "body": " Consider the triangle with vertices at , , . Find, if possible, a circumscribing taxicab circle for this triangle.  "
},
{
  "id": "mod-triangles-2-2-5-4",
  "level": "2",
  "url": "mod-triangles.html#mod-triangles-2-2-5-4",
  "type": "Exercise",
  "number": "4.1.10",
  "title": "",
  "body": " Find, if possible, an inscribed taxicab circle for the triangle given in a.  "
},
{
  "id": "mod-trigonometry",
  "level": "1",
  "url": "mod-trigonometry.html",
  "type": "Chapter",
  "number": "5",
  "title": "Trigonometry In Taxicab Geometry",
  "body": " Trigonometry In Taxicab Geometry   Activities      Euclidean Angles     Find the size of in degrees and in radians if , , .    Find the size of in degrees and in radians if , , .     Taxicab Angles     Find the size of in tradians if , , .    Find the size of in tradians if , , .    Find the size of in tradians if , , .    Find the size of in tradians if , , .    Let be a point on the taxicab unit circle and let , . If tradians what are the coordinates of ?    Let be a point on the taxicab unit circle and let , . If tradians what is the size of the angle in radians?    Is the conjecture: Every angle that has a Euclidean measure of has a taxicab measure of , true or false? Explain your reasoning.     Taxicab Trigonometry     Sketch the graph of the taxicab trigonometric functions.    Can you find any trigonometric identities? Explain your reasoning.      "
},
{
  "id": "mod-trigonometry-2-2-2-3",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-2-3",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": " Find the size of in degrees and in radians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-2-4",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-2-4",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": " Find the size of in degrees and in radians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-3-3",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-3",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": " Find the size of in tradians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-3-4",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-4",
  "type": "Exercise",
  "number": "5.1.4",
  "title": "",
  "body": " Find the size of in tradians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-3-5",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-5",
  "type": "Exercise",
  "number": "5.1.5",
  "title": "",
  "body": " Find the size of in tradians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-3-6",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-6",
  "type": "Exercise",
  "number": "5.1.6",
  "title": "",
  "body": " Find the size of in tradians if , , .  "
},
{
  "id": "mod-trigonometry-2-2-3-7",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-7",
  "type": "Exercise",
  "number": "5.1.7",
  "title": "",
  "body": " Let be a point on the taxicab unit circle and let , . If tradians what are the coordinates of ?  "
},
{
  "id": "mod-trigonometry-2-2-3-8",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-8",
  "type": "Exercise",
  "number": "5.1.8",
  "title": "",
  "body": " Let be a point on the taxicab unit circle and let , . If tradians what is the size of the angle in radians?  "
},
{
  "id": "mod-trigonometry-2-2-3-9",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-3-9",
  "type": "Exercise",
  "number": "5.1.9",
  "title": "",
  "body": " Is the conjecture: Every angle that has a Euclidean measure of has a taxicab measure of , true or false? Explain your reasoning.  "
},
{
  "id": "mod-trigonometry-2-2-4-3",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-4-3",
  "type": "Exercise",
  "number": "5.1.10",
  "title": "",
  "body": " Sketch the graph of the taxicab trigonometric functions.  "
},
{
  "id": "mod-trigonometry-2-2-4-4",
  "level": "2",
  "url": "mod-trigonometry.html#mod-trigonometry-2-2-4-4",
  "type": "Exercise",
  "number": "5.1.11",
  "title": "",
  "body": " Can you find any trigonometric identities? Explain your reasoning.  "
},
{
  "id": "inv-conics",
  "level": "1",
  "url": "inv-conics.html",
  "type": "Chapter",
  "number": "6",
  "title": "Conics",
  "body": " Conics   Text before the first section.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Some Thoughts On Mathematics Enrichment",
  "body": " Some Thoughts On Mathematics Enrichment   My Approach To Mathematics Enrichment   What is mathematics enrichment, who is it for, what does it aim to achieve, is it worthwhile? Such questions, I think, are worth thinking about for anyone involved in putting together a mathematics enrichment program. Furthermore, I would encourage the reader to seek out the academic literature devoted to probing such questions. For example, two references that influenced me were Renzulli and Reis (2014) (talking about enrichment in general) and Piggott (2011) (talking about mathematics enrichment in general).     Structure Of The Mathematics Enrichment Program  When I was in charge of the mathematics outreach (as we called it) at the University of Newcastle, we ran three mathematics enrichment programs, one aimed at Years 7, 8 students (i.e. junior high school), one aimed at Year 9 and 10 students (i.e. middle high school) and one aimed at Year 11 students, (i.e. senior high school). We called this the University of Newcastle Young Mathematicians Program, (UoNYMP). In the junior high school program the sessions were based on topics that students don't get to see in the standard school curricululm. In the middle high school program the sessions were based on the idea of thinking and working mathematically. In the senior high program we covered just one topic outside of the school curriculum but we looked at the topic in depth. The topic was, of course, taxicab geometry. Figure ? shows the front page of a small flyer that we used to promote our outreach. We were somewhat flexible in letting students attend whichever program they wanted. A number of students, having already attended one program, would come back the next year to attend the next program up even though they weren't in the target years. Other students attended a program up just so that they could be with friends.  The senior high school program had six 2-hour face-to-face sessions run at the University's Newcastle campus (from 4pm to 6pm) every second week over the course of one school term (i.e 12 weeks). Invitations were sent to all high schools within the region and the schools responded if they had students that wanted to attend. The sessions were free but we had a limit of 40 students. So, the students had to not only be sufficiently interested to self select (or to say yes when encouraged by their teachers) but also had to have the ability to not only get to the University but to get to there at the designated time. Not surprisingly then, I feel, we never had the problem of having to turn students away! On the other hand, we also never had the problem of not having enough students attend that we felt that the effort was not worth it. Teachers were also welcome to attend.  Within the sessions themselves, the structure was usually a mixture of a presenter talking, students working together in groups and whole-class discussions mediated by the presenter. As mentioned above, we used taxicab geometry as the topic for all six sessions but, apart from the first session, the sessions were essentially independent. The sessions were somewhat informal in that attendance wasn't policed, although we did keep track of numbers for program review purposes. We also had a web presence where students could obtain materials if they missed a session. We also tried to encourage the students to write up some of their own investigations for \"publication\" on the website but, invariably, this was never taken up. The students, it seemed, had too many other activities\/pressures that took precedence.    What Is Mathematics Enrichment?      "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Appendix",
  "number": "B",
  "title": "Some GeoGebra Tools",
  "body": " Some GeoGebra Tools   Some GeoGebra Tools   Text before the first section.    "
},
{
  "id": "references-section",
  "level": "1",
  "url": "references-section.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Eugene F. Krause, Taxicab Geometry , Addison-Wesley, Menlo Park, California, 1976.  "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
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
