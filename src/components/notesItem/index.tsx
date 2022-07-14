import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface INotesItem {
  notes: string;
  sign: string;
  tz: string;
  date: string;
  notesNumber: number;
  id: string;
  page: number;
}

export const NotesItem = ({
  notes,
  sign,
  date,
  notesNumber,
  id,
  page,
}: INotesItem) => {
  const naviaget = useNavigate();
  const handleRedirectToDetail = () => {
    naviaget(`/detail/${id}/${page}`);
  };
  return (
    <Card
      sx={{ minWidth: 150, borderLeft: "none", cursor: "pointer" }}
      variant="outlined"
      onClick={handleRedirectToDetail}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {sign}
        </Typography>
        <Typography>Запись N {notesNumber}</Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          {date}
          <br />
        </Typography>
        <Typography>{notes}</Typography>
      </CardContent>
    </Card>
  );
};
