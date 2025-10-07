import { CircularProgress, Typography, Box } from "@mui/material";
import { useNature } from "../hooks/useNature";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

export default function Nature() {
  const { data, loading, error } = useNature();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visible = 5;

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
    onSwipedRight: () =>
      setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1)),
    trackMouse: true,
  });

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  const getVisibleImages = () => {
    const half = Math.floor(visible / 2);
    const result = [];

    for (let i = -half; i <= half; i++) {
      const index = (currentIndex + i + data.length) % data.length;
      result.push({ ...data[index], realIndex: index, offset: i });
    }

    return result;
  };

  const visibleImages = getVisibleImages();

  return (
    <Box
      sx={{
        width: "100%",
        height: "30vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h6" sx={{ mb: 3 }}>
        Beautiful Nature
      </Typography>

      <Box
        {...handlers}
        sx={{
          position: "relative",
          width: "100%",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "grab",
        }}
      >
        {visibleImages.map((image) => (
          <Box
            key={image.realIndex}
            sx={{
              position: "absolute",
              transition: "all 0.6s ease",
              transform: `translateX(${image.offset * 40}%) scale(${
                image.offset === 0 ? 1 : 0.8
              })`,
              opacity: image.offset === 0 ? 1 : 0.5,
              zIndex: image.offset === 0 ? 3 : 1,
              filter: image.offset === 0 ? "none" : "brightness(0.8)",
            }}
          >
            <img
              src={image.image}
              alt={image.tags}
              style={{
                width: "500px",
                height: "300px",
                borderRadius: "16px",
                objectFit: "cover",
                boxShadow:
                  image.offset === 0
                    ? "0 12px 25px rgba(0,0,0,0.4)"
                    : "0 8px 15px rgba(0,0,0,0.2)",
                transition: "all 0.4s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
