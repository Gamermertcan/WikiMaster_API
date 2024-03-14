const wikiElements = document.querySelectorAll('wiki');
    var top = 10;

    wikiElements.forEach(wikiElement => {
        const description = wikiElement.getAttribute('description');
        
        wikiElement.setAttribute("style", "position: absolute; left: 50%; top: " + top + "%; transform: translateX(-50%); width: 95%; height: 500%; border: 4px solid #000000; box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2),-10px -10px 8px rgba(0, 0, 0, 0.2);");
        
        top += 500;

        wikiElement.innerHTML += "\n<div style=\"position: absolute; width: 96%; left: 50%; top: 20%; transform: translate(-50%, -50%); height: 20%; border: 4px solid #000000; box-shadow: inset 10px 10px 8px rgba(0, 0, 0, 0.2), inset -10px -10px 8px rgba(0, 0, 0, 0.2);\">\n\<div style=\"position: absolute; top: 5%; left: 50%; transform: translateX(-50%); text-align: center;\">\n" + description.replace(/\n/g, "<br>") + "\n\</div\>\n</div>";
    });


