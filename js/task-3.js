function getElementWidth(content, padding, border) {

    const contentNum = parseInt(content);

    const paddingNum = parseInt(padding);
    const paddingSize = paddingNum * 2;

    const borderNum = parseFloat(border);
    const borderSize = borderNum * 2
    
    return contentNum + paddingSize + borderSize;
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200