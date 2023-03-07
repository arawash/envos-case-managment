"use strict"

import {
    nativobject
} from "src/object.js"




let form = document.createElement("form");



function mapFactore(object) {
    let item = new Map(Object.entries(object))
    item.forEach((key, value) => {
        // item.set(key, value)
        console.table(key)
        console.table(value)
    })
    //  }
    // )
    console.log(item)
    return item
}
mapFactore(nativobject)

function loopOverTranformedObject(object) {
    object.forEach((key, value) => {
        // console.log(value)
        //  console.log(value[1])
        //  console.log(value)

        if (typeof key === "object") {
            //  loging(value, , index )
            loopOverTranformedObject(mapFactore(key));
        } else {
            
            let label = document.createElement("label");


            let input = document.createElement("input");
            let createlable = function () {
                label.setAttribute("for", value)
                label.innerText = value
            }
            let createinput = function () {
                let input = document.createElement("input")


                input.setAttribute("id", value)
                input.setAttribute("name", value)
                input.setAttribute("placeholder", value)
                // createType(prpo);
            }
           // let createType = function () {
                if (typeof key === "boolean") {
                    input.setAttribute("type", "checkbox")
                } else if (typeof key  === "number") {
                    input.setAttribute("type", "number")
                } else if (typeof key === "string" && value.startsWith("Date")) {
                    input.setAttribute("type", "date")
                } else if (typeof key === "string" && value.endsWith("At")) {
                    input.setAttribute("type", "date")
                }else if (typeof key === "string" && value.endsWith("Date")) {
                    input.setAttribute("type", "date")
                }else {
                    input.setAttribute("type", "text")
                }
           // }
                    createlable()
        createinput()
       // createType()
        form.appendChild(label)
        form.appendChild(input) 
        }
        })
    }

    loopOverTranformedObject(mapFactore(nativobject))











    document.body.appendChild(form)





    console.log(
        //  toString
        (form))
