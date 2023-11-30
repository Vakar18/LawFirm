import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import heroImage from "../../assets/heroImage.png";
import heroImage1 from "../../assets/backgroundStyle.png";
import styles from "./herosection.module.css";
import MailIcon from "@mui/icons-material/Mail";
import theme from "../../Theme/theme";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionWrapper}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            height: "93vh",
            width: "100%",
            gap: 17,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "500", fontSize: "66px" }}
            >
              You don’t have to
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "700", fontSize: "66px" }}
            >
              Fight them Alone.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.subtitle, my: "36px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </Typography>
            <TextField
              variant="standard"
              size="medium"
              InputProps={{
                disableUnderline: true,
                style: { height: "74px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <MailIcon
                      sx={{ color: theme.palette.text.subtitle, marginLeft: "8px" }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Box
                      color={theme.palette.text.black}
                      sx={{
                        bgcolor: theme.palette.text.primary,
                        width: "137px",
                        height: "62px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "43px",
                        marginRight: "7px",
                        cursor: "pointer",
                        ":hover": { bgcolor: theme.palette.text.subtitle, color: theme.palette.text.white },
                      }}
                    >
                      {"Let's Talk"}
                    </Box>
                  </InputAdornment>
                ),
              }}
              sx={{ bgcolor: "#292929", borderRadius: "43px", width: "438px" ,}}
              placeholder="Enter Your Email Address"
            />
          </Box>
          <Box className={styles.heroImageSection}>
            <img className={styles.heroImage} src={heroImage} alt="HeroImage"/>
            <img className={styles.heroImage1} src={heroImage1} alt="HeroImageBackground" />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default HeroSection;
