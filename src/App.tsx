import { CreateForm } from "./components/form";
import { Notes } from "./components/notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotesTabs } from "./components/Tabs";
import { NotesDetail } from "./components/notesDetail";
import { Box } from "@mui/material";

export const App = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <Router>
        <div>
          <NotesTabs />
          <Routes>
            <Route path="/" element={<CreateForm />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/detail/:id/:page" element={<NotesDetail />} />
          </Routes>
        </div>
      </Router>
    </Box>
  );
};
