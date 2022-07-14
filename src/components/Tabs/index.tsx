import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";

export const NotesTabs = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };
  useEffect(() => {
    setValue(location.pathname);
  }, [location]);
  return (
    <Box sx={{ mb: 5 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="/" label="СОЗДАТЬ ЗАПИСЬ" />
        <Tab value="/notes" label="ЗАПИСИ" />
      </Tabs>
    </Box>
  );
};
