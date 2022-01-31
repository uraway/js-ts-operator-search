// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { parseContext } from '../../utils/parseContext'

const dirPath = path.resolve('./public', 'markdown')

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200

  const data = fs.readdirSync(dirPath).map((filename) => {
    console.log(`Reading file: ${filename}`)
    const content = fs.readFileSync(path.resolve(dirPath, filename)).toString()
    const { label, description, link, definition } = parseContext(content)
    return {
      label,
      description,
      link,
      definition,
    }
  })

  res.json({ data })
}
