import React from 'react'
import { Satisfy } from "next/font/google";
import { motion } from "framer-motion";
import { Typography } from '@mui/material';

const satisfy = Satisfy({
    subsets: ["latin"],
    weight: "400",
});
const Logo = () => {
  return (
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
  );
}

export default Logo