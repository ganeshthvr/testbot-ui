// eslint-disable no-console
/* eslint-disable no-console */
import { useState } from "react"

function App() {
  const [fileContent, setFileContent] = useState("")
  const [responseContent, setResponseContent] = useState("")
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      setFileContent(e.target.result)
    }
    reader.readAsText(file)
  }

  const [text, setText] = useState("") // State to hold the text area content

  // Function to handle text area change
  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  // Function to copy text to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Text copied to clipboard!")
      },
      (err) => {
        console.error("Failed to copy text: ", err)
      }
    )
  }

  const createPost = async () => {
    // const url = "http://localhost:8080/generate"
    const data = fileContent
    // try {
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   if (!response.ok) {
    //     alert(
    //       "We could not get a response at the moment, please try again in sone time!"
    //     )
    //     throw Error(response.statusText)
    //   }
    //  const json = await response.json()
    setResponseContent(data)
    console.log("After transform------")
    console.log(responseContent)
    console.log("----------------------")
    // } catch (error) {
    //   console.error(error.message)
    // }
  }

  return (
    <div className="container mx-auto p-4 m-4 border-solid border-2 border-gray-600 bg-gray-200">
      <h1 className="text-4xl text-gray-800 py-2 text-center">
        <img src="ubs-logo.png" className="logo" alt="logo" width="100" />
        NEON TEST BOT
      </h1>
      <table className="demo">
        <td>
          <tr>
            <textarea
              name="fileContent"
              value={fileContent}
              rows={15}
              cols={40}
              readOnly
              className="textarea"
            />
          </tr>
          <tr>
            <input type="file" accept=".java" onChange={handleFileChange} />
          </tr>
        </td>
        <td>
          <tr />
        </td>
        <td>
          <tr>
            <textarea
              className="textarea"
              name="responseContent"
              value={responseContent}
              onChange={handleTextChange}
              rows={15}
              cols={40}
            />
          </tr>
          <tr>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3"
              onClick={createPost}
            >
              Generate
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-gray-800 font-bold m-1 py-2 px-4 rounded h-10 mr-3"
              onClick={handleCopy}
            >
              Copy Text
            </button>
          </tr>
        </td>
      </table>
    </div>
  )
}

export default App
