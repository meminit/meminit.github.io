'use client'
import { useEffect, useState } from 'react'

interface FilterEntry {
  syntax: string
  filters: Record<string, string>
}

export default function FancyText() {

  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [filters, setFilters] = useState<Record<string, FilterEntry>>({})

  useEffect(() => {
    fetch('/static/json/text-filters/main.json')
      .then(res => res.json())
      .then((json: Record<string, FilterEntry>) => setFilters(json))
      .catch(console.error)
    console.log('Fetched Data')
  }, [])

  useEffect(() => {
    if (inputText === '') {
      setOutputText('')
      return
    }

    if (!filters || Object.keys(filters).length === 0) return

    let finalText = ''

    for (const [filterName, filterData] of Object.entries(filters)) {
      let transformed = inputText
      let styled = ''

      for (const [char, replacement] of Object.entries(filterData.filters)) {
        const regex = new RegExp(char, 'g')
        transformed = transformed.replaceAll(regex, replacement)
        styled = filterData.syntax.replace('{output}', transformed)
      }

      finalText += styled + '\n\n'
    }

    setOutputText(finalText)
  }, [inputText, filters])

  return (
    <>
      <h1>Online Fancy Letter Generator</h1>
      <div className="flex flex-row gap-5 not-md:flex-col">
        <textarea
          className="mainTextInput w-full min-h-[550px] bg-zinc-950 rounded-2xl p-10 box-border"
          id="textInput"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Your normal text goes here..."
        />
        <textarea
          className="mainTextOutput w-full min-h-[550px] bg-zinc-950 rounded-2xl box-border p-10 text-2xl"
          id="textOutput"
          value={outputText}
          readOnly
          placeholder="𝕬𝖓𝖉 𝖋𝖆𝖓𝖈𝖞 𝖙𝖊𝖝𝖙 𝖜𝖎𝖑𝖑 𝖆𝖕𝖕𝖊𝖆𝖗 𝖍𝖊𝖗𝖊"
        />
      </div>
    </>
  )
}