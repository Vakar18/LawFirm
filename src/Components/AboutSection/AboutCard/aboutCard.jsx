import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  Box, Button, } from "@mui/material";
import gift from "../../../assets/gift.svg";
import styles from "./aboutCard.module.css";
import theme from "../../../Theme/theme";

export default function AboutCard({ detail }) {
  return (
    <Box className={styles.cardWrapper}>
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "transparent",
          color: theme.palette.text.white,
          borderRadius: "14px",
          p: "20px",
        }}
      >
        <Box sx={{ bgcolor: theme.palette.text.white, display: "inline" }}>
          <CardMedia
            component="img"
            sx={{
              width: "100px",
              bgcolor: theme.palette.text.white,
              padding: "19px",
              borderRadius: "50%",
            }}
            alt="Gift"
            image={gift}
          />
        </Box>
        <Box>
          <Typography variant="h5" my={2}>
            {detail.title}
          </Typography>
          <Typography variant="body2" color={theme.palette.text.subtitle}>
            {detail.subtitle}
          </Typography>
          <Button
            className={styles.button}
            variant="contained"
            sx={{
              bgcolor: theme.palette.text.primary,
              color: theme.palette.text.black,
              mt: "20px",
              borderRadius: "23px",
              ":hover": { bgcolor: theme.palette.text.subtitle, color: theme.palette.text.white },
            }}
          >
            Read More
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
