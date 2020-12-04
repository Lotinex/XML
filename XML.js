const XML = '...';

function tag(tagName){
    return new RegExp(`<${tagName}>(.+?)<\/${tagName}>`, 'g');
}
/**
 * @param {string} XML 
 * @param {string} tagName 
 */
function getTagContent(XML, tagName){
    let R = [];
    XML.match(tag(tagName)).forEach((e, i) => {
        R.push(RegExp.$1)
    })
    return R;
}
/**@param {string} XML */
function parse(XML){
    const code = getTagContent(XML, 'target_code');
    return code;
}
console.log(parse(XML))