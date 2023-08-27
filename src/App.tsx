import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const defaultText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div> \`, between 2 backticks.

\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultText)

  return (
    <>
      <div className="editor-box">
        <div className="top-tab">
          <FontAwesomeIcon icon={faRocket} className='icon'/>
          <span>Editer</span>
        </div>
        <textarea name="editor" id="editor" value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value) }></textarea>
      </div>
      <div className="preview-box">
        <div className="top-tab">
          <FontAwesomeIcon icon={faRocket} className='icon' />
          <span>Previewer</span>
        </div>
        <div id='preview'>
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default App
