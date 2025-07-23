import { useState } from 'react'
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const initialFormData = {
  title: '',
  priority: 'Medium',
  category: 'Work',
  description: ''
}

function NoteForm({ notes = [], setNotes}) {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    const newNote = {
      id: Date.now(),
      ...formData
    }
    setNotes([newNote, ...notes]);
    resetFormData();
  }

  const resetFormData = () => setFormData(initialFormData);

  return (
    <>
      <button
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        { isFormVisible ? 'Collapse' : 'Expand' } Notes Form { isFormVisible ? '➖' : '➕' }
      </button>
      { isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { label: 'High', value: 'High' },
              { label: 'Medium', value: 'Medium' },
              { label: 'Low', value: 'Low' }
            ]}
            required
          />
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { label: 'Work', value: 'Work' },
              { label: 'Personal', value: 'Personal' },
              { label: 'Ideas', value: 'Ideas' }
            ]}
            required
          />
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm;