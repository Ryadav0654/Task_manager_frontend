import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './page/Dashboard.tsx'
import CreateTaskForm from './page/CreateTaskForm.tsx'
import EditTaskForm from './page/EditTaskPage.tsx'
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-task" element={<CreateTaskForm />} />
          <Route path="/edit-task/:id" element={<EditTaskForm />} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
