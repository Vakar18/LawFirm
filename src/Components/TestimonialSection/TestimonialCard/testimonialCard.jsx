import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import styles from "./testimonialCard.module.css";
import theme from "../../../Theme/theme";

const TestimonialCard = ({ data }) => {
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
          <Avatar
            sx={{ width: "40%", height: "40%" }}
            alt={data.title}
            src={data.avatar}
          />
        </Box>
        <Box>
          <Typography variant="h5" my={1} color= {theme.palette.text.white}>
            {data.title}
          </Typography>
          <Typography variant="body2" color= {theme.palette.text.white}>
            {data.subtitle}
          </Typography>
          <Typography variant="body2" my={2} color={theme.palette.text.subtitle}>
            {data.testimony}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default TestimonialCard;
