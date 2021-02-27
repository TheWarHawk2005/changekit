function newCategory() {
var category = document.createElement("div")
category.innerHTML = "<h2 class='verticalLine'>New Category</h2><p></p>"
category.className = "cat"

category.contentEditable = "true"

category.style.paddingTop = "1px"
category.style.paddingLeft = "20px"
category.style.paddingBottom = "3px"
category.style.margin = "5px"
category.style.backgroundColor = "#ededed"


document.getElementById("changelog").appendChild(category)

updateColors()
}


function compileHTML() {
	var rawHTML = document.getElementById("changelog").innerHTML
	var copyHTML = document.createElement("p")
//	copyHTML.innerHTML = rawHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/contenteditable="true"/g, '')
	copyHTML.innerHTML = rawHTML.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('contenteditable="true"', '')

	console.log(copyHTML)
	var compiledDIV = document.getElementById("compiledHTML")
	compiledDIV.innerHTML = "<b>Copy code to another HTML or Markdown-capable website:</b><br>" + copyHTML.innerHTML  //appendChild(copyHTML)
}

// Update colors when color picker used:
document.getElementById("colorPicker").onchange = function() {
	updateColors()
}

// Update header color function
function updateColors() {
	
	var color = document.getElementById("colorPicker").value
	var headers = document.getElementsByClassName("verticalLine")
  
	for (var i = 0; i < headers.length; i++) {
        headers[i].style.borderLeft = "thick solid" + color
    }
}