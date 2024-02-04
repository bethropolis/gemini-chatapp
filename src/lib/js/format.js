import Showdown from "showdown";


let converter = new Showdown.Converter();


export const format = (text = '') => {

    text = newLine(text);

    text = converter.makeHtml(text);

    return text;
}


const newLine = (text = '') => text.replace(/(\r\n|\n|\r)/gm, "<br />")


