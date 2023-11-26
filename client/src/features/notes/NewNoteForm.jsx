import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewNoteMutation } from "./notesApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const NewNoteForm = ({ users }) => {
  const [addNewNote, { isLoading, isSuccess, isError, error }] =
    useAddNewNoteMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(users[0].id);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dash/notes");
    }
  }, [isSuccess, navigate]);


  const onTitleChanged = e => setTitle(e.target.value)
  const onTextChanged = e => setText(e.target.value)
  const onUserIdChanged = e => setUserId(e.target.value)

  const canSave = [title, text, userId].every(Boolean) && !isLoading

  
  return (

  )
};

export default NewNoteForm;
