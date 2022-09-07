const colors = [
    "afghanistanColor", "albaniaColor", "algeriaColor", "andorraColor", "angolaColor", "anguillaColor"
]
export const a = (country, setAssignedColors, assignedColors, select, rerender, setRerender, selectArray) => {
    fetch('visaPolicy.json')
        .then((res) => res.json())
        .then((data) => {
        setAssignedColors(assignedColors, assignedColors[select.selection] = { 
            selection: select.selection,
            afghanistanColor: data[country].afghanistan,
            albaniaColor: data[country].albania,
            algeriaColor: data[country].algeria,
            andorraColor: data[country].andorra,
            angolaColor: data[country].angola,
            anguillaColor: data[country].anguilla
        });
        for(let i = 0; i < assignedColors.length; i++) {
            for(let x = 0; x < colors.length; x++) {
              if(assignedColors[i][colors[x]] == "rgb(255,20,147)") {
                setAssignedColors(assignedColors, assignedColors[select.selection][colors[x]] = "rgb(255,20,147)");
              }
            }
        }
        console.log(select)
        console.log(selectArray)
        console.log(assignedColors)
        setRerender(!rerender)
    })
}

/*
{
    afghanistanColor: data[country].afghanistan,
    albaniaColor: data[country].albania,
    algeriaColor: data[country].algeria,
    andorraColor: data[country].andorra,
    angolaColor: data[country].angola,
    anguillaColor: data[country].anguilla
}

setAssignedColors(assignedColors = [[assignedColors[0], assignedColors[1], assignedColors[2], assignedColors[3], assignedColors[4], assignedColors[5], assignedColors[6], assignedColors[7], assignedColors[8], assignedColors[9]][[select.selection]] = {
    selection: select.selection, afghanistanColor: "rgb(255,20,147)", albaniaColor: "rgb(255,20,147)", algeriaColor: "rgb(255,20,147)", andorraColor: "rgb(255,20,147)", angolaColor: "rgb(255,20,147)", anguillaColor: "rgb(255,20,147)"
}])

*/