
export const format = (text = '') => {

    text = newLine(text);

    return text;
}


const newLine = (text = '') => text.replace(/(\r\n|\n|\r)/gm, "<br />")