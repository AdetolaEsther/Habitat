import { motion } from "framer-motion";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});
export default function Home() {
  

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 2,
            }}
        >
            {/* App Title */}
            <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Typography
                    sx={{
                        fontFamily: satisfy.style.fontFamily,
                        fontSize: "6rem",
                        background: "linear-gradient(90deg, #B17596, #F5B3B8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "0.5px",
                        textShadow: "2px 3px 6px rgba(177, 117, 150, 0.35)",
                        mb: 8,
                    }}
                >
                    Habitat
                </Typography>
            </motion.div>
            {/* Subtitle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.1rem",
                        color: "#A1879E",
                        mb: 3,
                    }}
                >
                    Tiny Habits, Beautiful Life{" "}
                </Typography>
            </motion.div>
            {/* Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: "relative",
                    width: "80%",
                    maxWidth: 500,
                    marginBottom: "1.5rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                }}
            >
                <Image
                    src="/4871715.jpg"
                    alt="Habitat illustration"
                    width={400}
                    height={400}
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "1rem",
                        filter: "brightness(0.95) saturate(1.1)", // makes colors richer
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(245,179,184,0.25), rgba(177,117,150,0.25))", // pink overlay
                        mixBlendMode: "soft-light",
                    }}
                />
            </motion.div>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#F29CA3",
                        color: "#fff",
                        borderRadius: "2rem",
                        px: 4,
                        py: 1.2,
                        textTransform: "none",
                        fontSize: "1rem",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        "&:hover": { backgroundColor: "#005bb5" },
                    }}
                >
                    Start Now
                </Button>
            </motion.div>
        </Box>
    );
}
