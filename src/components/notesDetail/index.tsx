import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NotesItem } from "../notesItem";

export const NotesDetail = () => {
  const { page, id } = useParams();
  const notes = useSelector((state) => state.notes.notes[page]);
  const note = notes.find((item) => item.id === id);

  return (
    <NotesItem
      notes={note.notes}
      sign={note.sign}
      date={note.date}
      tz={note.tz}
      notesNumber={note.notesNumber}
      id={id}
      page={page}
    />
  );
};
