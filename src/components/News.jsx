import { CircularProgress, Typography } from "@mui/material";
import { useNews } from "../hooks/useNews";
import { Box } from "@mui/material";
import { Padding } from "@mui/icons-material";

export default function News() {
  const { data, loading, error } = useNews();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  return (
    <>
      <Typography variant="subtitle1">
        Top business headlines in the US right now
      </Typography>

      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
          padding: "6px",
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: 270,
              padding: 1,
              backgroundColor: "#fff",
              boxShadow: 1,
            }}
          >
            <img
              src={
                item.image && item.image.trim() !== ""
                  ? item.image
                  : "https://picsum.photos/270/208?random=1"
              }
              alt={item.title || "No title available"}
              style={{
                width: "270px",
                height: "208px",
                objectFit: "cover",
                borderRadius: "8px",
                backgroundColor: "#f0f0f0",
              }}
              onError={(e) => {
                e.target.src = "https://picsum.photos/270/208?random=2";
              }}
            />
            <Typography
              variant="body2"
              style={{ width: "270px", marginTop: "8px" }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
