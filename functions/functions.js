/**
 * CONVERT SLUG
 */
export function convertToSlug(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

/**
 * WORD SLICER
 */
export function slicer(word, maxLength) {
  if (word.length > maxLength) {
    return word.slice(0, maxLength) + "...";
  }
  else return word;
}

/**
 * GET SELECT OBJECT FROM VALUE 
 */
export function getSelectedIndexFromValue(value, options) {
  if (!value) return null;

  for (var i = 0; i < options.length; i++){
    const option = options[i];
    
    if (option.value === value || option.label === value) return option.index;
  }
  
  return null;
}

/**
 * SEARCH FILTER
 */
export function searchfilter(needle, haystack) {
  if (needle.trim() == "") return haystack;

  let keyword = needle.toUpperCase();
  let result = haystack.filter(({label, value}) => {

    // The Custom Part
    let labelText = label.toUpperCase();
    if (value) labelText += ` ${value.toUpperCase()}`;

    return (labelText.indexOf(keyword) > -1);
  });
  return result;
}