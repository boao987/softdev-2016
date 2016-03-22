# 2-29 | Tipping the scales of vectors

NOTES

Creating SVG elements in javascript

	document.createElementNS( <NAMESPACE IDENTIFIER>, <ELEMENT> );

		Creates an element from a specified XML namespace

		svg example:
			var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

		Once created, you can modify it with setAttribute calls

			c1.setAttribute("cx", "200");

		To add the element to your svg container, use the appendChild function

			var pic = document.getElementById("svgid");
			pic.appendChild( c1 );

		To remove svg elements, you can either:

			pic.removeChild( c1 );
			c1.remove();

	Animations with svg and javascript

		The canvas animate methods do not work on svg

		Here we will have to use setInterval

			setInterval( <FUNCTION>, <TIME> )

		To stop an animation use clearInterval

			clearInterval( <ID> )



Example Code:

svg.html

<html>
	<head>
		<title>SVG Demo</title>
	</head>
	
	<body>
		<svg xmlns="http://www.w3.org/2000/svg" id="vimg" height="300" width="500">
			<circle cx="150" cy="150" r="75" fill="yellow" stroke="black"/>
		</svg>

		<script src="svg.js">
		</script>
	</body>
</html>


js in console

c = document.getElementsByTagName("circle")
//c is a list of elements

c is [ <circle cx="150" cy="150" r="75" fill="yellow" stroke="black"></circle> ]
c[0] is <circle cx="150" cy="150" r="75" fill="yellow" stroke="black"></circle>

c[0].setAttribute("r","300") //we can change the attribute of c using this

p = document.getElementById("vimg")
p.removeChild(c[0])//removes a circle
c[0].remove(0)//removes itself

svg.js

var pic = document.getElementById("vimg");

//creates an svg element and sets its attributes
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute( "cx", 0 );
c.setAttribute( "cy", 0 );
c.setAttribute( "r", "100" );
c.setAttribute( "fill", "red" );
c.setAttribute( "stroke", "black" );

//actually puts it into the html
pic.appendChild( c );


