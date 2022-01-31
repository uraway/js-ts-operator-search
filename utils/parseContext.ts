import { Context } from '../types/api/type'

const CONTEXT_REG_EXP =
  /^---\nlabel: ([\s\S]*?)\ndescription: ([\s\S]*?)\nlink: ([\s\S]*?)---([\s\S]*)/

export function parseContext(content: string): null | Context {
  const comment = content.match(CONTEXT_REG_EXP)
  if (comment) {
    return {
      label: comment[1],
      description: comment[2],
      link: comment[3],
      definition: comment[4],
    }
  }
  return null
}
