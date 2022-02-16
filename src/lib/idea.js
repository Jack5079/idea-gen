/** @type {<Type>(arr: Type[]) => Type} */
const random = (arr) => arr[Math.floor(Math.random() * arr.length)]
export default function make_idea(options) {
  return `${random(options.adjectives)} ${random(options.nouns)}`
}
