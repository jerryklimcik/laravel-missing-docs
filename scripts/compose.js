const fs = require('fs')
const inquirer = require('inquirer')
const dedent = require('dedent')

const genFrontMatter = (answers) => {
  let d = new Date()
  const date = [
    d.getFullYear(),
    ('0' + (d.getMonth() + 1)).slice(-2),
    ('0' + d.getDate()).slice(-2),
  ].join('-')
  const tagArray = answers.tags.split(',')
  tagArray.forEach((tag, index) => (tagArray[index] = tag.trim()))
  const tags = "'" + tagArray.join("','") + "'"

  let frontMatter = dedent`---
  title: ${answers.title ? answers.title : 'Untitled'}
  date: '${date}'
  version: ${answers.version ? answers.version : ''}
  link: ${answers.link ? answers.link : ''}
  tags: [${answers.tags ? tags : ''}]
  draft: ${answers.draft === 'yes'}
  summary: ${answers.summary ? answers.summary : ' '}
  images: []
  `

  frontMatter = frontMatter + '\n---'

  return frontMatter
}

inquirer
  .prompt([
    {
      name: 'title',
      message: 'Enter post title:',
      type: 'input',
    },
    {
      name: 'extension',
      message: 'Choose post extension:',
      type: 'list',
      choices: ['mdx', 'md'],
    },
    {
      name: 'version',
      message: 'Enter version since method is in Laravel:',
      type: 'input',
    },
    {
      name: 'link',
      message: 'Enter link with Laravel pull request of method',
      type: 'input',
    },
    {
      name: 'summary',
      message: 'Enter post summary:',
      type: 'input',
    },
    {
      name: 'draft',
      message: 'Set post as draft?',
      type: 'list',
      choices: ['yes', 'no'],
    },
    {
      name: 'tags',
      message: 'Any Tags? Separate them with , or leave empty if no tags.',
      type: 'input',
    },
  ])
  .then((answers) => {
    // Remove special characters and replace space with -
    const fileName = answers.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/ /g, '-')
      .replace(/-+/g, '-')
    const frontMatter = genFrontMatter(answers)
    if (!fs.existsSync('data/docs')) fs.mkdirSync('data/docs', { recursive: true })
    const filePath = `data/docs/${fileName ? fileName : 'untitled'}.${
      answers.extension ? answers.extension : 'md'
    }`
    fs.writeFile(filePath, frontMatter, { flag: 'wx' }, (err) => {
      if (err) {
        throw err
      } else {
        console.log(`Docs post generated successfully at ${filePath}`)
      }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log('Something went wrong, sorry!')
    }
  })
