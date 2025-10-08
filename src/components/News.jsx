import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useNews } from "../hooks/useNews";

export default function News() {
  const { data, loading, error } = useNews();
  const [visible, setVisible] = useState(4);

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
        {data.slice(0, visible).map((item, index) => (
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
      {visible < data.length && (
        <button
          style={{ border: "none", margin: "40px 0" }}
          onClick={() => setVisible((prev) => prev + 4)}
        >
          See more
        </button>
      )}
    </>
  );
}
