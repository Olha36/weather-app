import { CircularProgress, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import {Box} from "@mui/material";

export default function News() {
  const {data, loading, error} = useNews();

  if(loading) return <CircularProgress />
  if (error) return <Typography color="error">{error}</Typography>
  return (
    <>
      <Typography variant="subtitle1">
        Top business headlines in the US right now
      </Typography>

      {data.map((item, index) => {
        return (
          <Box key={index}>
            {item.image && (
                <img src={item.image} alt={item.title} />
            )}
            <Typography>{item.content}</Typography>
          </Box>
        );
      })}
    </>
  );
}
