import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Box, Grid, Pagination } from "@mui/material";

import { NotesItem } from "../notesItem";

export const Notes = () => {
  const [page, setPage] = useState(1);
  const notes = useSelector((state: RootState) => state.notes.notes[page]);
  const total = Object.keys(useSelector((state) => state.notes.notes)).length;
  const handleChangePage = (e: any, page: number) => {
    setPage(page);
  };
  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Grid
        container
        spacing={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {!notes.length && "пока записей нет"}
        {notes.map(({ notes, sign, tz, date, id, notesNumber }) => {
          return (
            <Grid item xs={6}>
              <NotesItem
                notes={notes}
                sign={sign}
                date={date}
                tz={tz}
                key={id}
                notesNumber={notesNumber}
                id={id}
                page={page}
              />
            </Grid>
          );
        })}
      </Grid>
      {!!notes.length && (
        <Pagination count={total} onChange={handleChangePage} />
      )}
    </Box>
  );
};
