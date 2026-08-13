export const createElements = (tag, attributes = {}, ...children) => {
const element = document.createElement(tag)

Object.entries(attributes).forEach(([key, value]) => {
if (key.startsWith('on') && typeof value === 'function') {
 element.addEventListener(key.substring(2).toLowerCase(), value)
} else if (key === 'className') {
  element.className = value
} else {
  element.setAttribute(key, value)
}
})    

children.flat(Infinity).forEach(child => {
if (child === null || child === undefined || child === false) return
if (typeof child === 'string' || typeof child === 'number') {
  element.appendchild(document.createTextNode(child))
} else if (child instanceof HTMLElement) {
  element,appendchild(child)
  }
}) 

return element
}

export const getRandomChoice = (choices) => {
}

export const evaluateRound = (playerChoice, cpuChoice) => {

}