import { useState } from "react";
import { Trash } from 'lucide-react';



const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')

    
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className="min-h-screen lg:flex bg-black text-white ">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex lg:w-1/2 items-start flex-col gap-4 p-10  ">
        <h1 className="text-4xl font-bold">Add Notes</h1>

          <input type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 border-2 font-medium rounded outline-none w-full"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        <textarea
        type="text"
        className="px-5 h-32 py-2 flex items-start font-medium flex-row border-2 rounded  outline-none w-full"
        placeholder="Write Details"
        value={details}
        onChange={(e) =>
          setDetails(e.target.value)
        }
        />
        <button className="bg-white text-black px-5 py-2 active:bg-gray-300 outline-none rounded w-full">Add Note</button>
      </form>
   
    <div className="lg:w-1/2 lg:border-l-2 p-10">
      <h1 className="text-4xl font-bold">Recent Notes</h1>
    <div className="flex flex-wrap p-10 gap-5 mt-5 h-[90%] items-start justify-start overflow-auto">
     {task.map((elem, idx) => (
  <div
    key={idx}
    className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black bg-cover pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
  >
    <div>
      <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
      <p className="mt-3 leading-tight text-sm font-medium text-gray-500">
        {elem.details}
      </p>
    </div>

    
    <button
      onClick={() => deleteNote(idx)}
      className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-sm rounded font-bold text-white flex items-center justify-center gap-2 hover:bg-red-600"
    >
      Delete  <Trash size={16} />
    </button>
  </div>
))}

      
     
    </div>
  </div>
</div>
  )
}

export default App
