/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useUpdateNoteMutation, useDeleteNoteMutation } from "./notesApiSlice"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashCan } from "@fortawesome/free-solid-svg-icons"


const EditNoteForm = ({note,users}) => {
  const [updateNote, {
    isLoading,
    isSuccess,
    isError,
    error
}] = useUpdateNoteMutation()

const [deleteNote, {
  isSuccess: isDelSuccess,
  isError: isDelError,
  error: delerror
}] = useDeleteNoteMutation()

const navigate = useNavigate()

const [title, setTitle] = useState(note.title)
const [text, setText] = useState(note.text)
const [completed, setCompleted] = useState(note.completed)
const [userId, setUserId] = useState(note.user)

useEffect(() => {

  if (isSuccess || isDelSuccess) {
      setTitle('')
      setText('')
      setUserId('')
      navigate('/dash/notes')
  }

}, [isSuccess, isDelSuccess, navigate])


const onTitleChanged = e => setTitle(e.target.value)
const onTextChanged = e => setText(e.target.value)
const onCompletedChanged = e => setCompleted(prev => !prev)
const onUserIdChanged = e => setUserId(e.target.value)

const canSave = [title, text, userId].every(Boolean) && !isLoading

const onSaveNoteClicked = async (e) => {
  if (canSave) {
      await updateNote({ id: note.id, user: userId, title, text, completed })
  }
}
  return (
    <div>EditNoteForm</div>
  )
}

export default EditNoteForm