"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function DateStrip() {
    const today = dayjs();
    const [selectedDate, setSelectedDate] = useState(today);
    const weekDays = Array.from({ length: 7 }, (_, i) => today.add(i, "day"));

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                p: 2,
                mb: 3,
                boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
            }}
        >
            {weekDays.map((day) => {
                const isSelected = selectedDate.isSame(day, "day");

                return (
                    <motion.div
                        key={day.toString()}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedDate(day)}
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                cursor: "pointer",
                                px: 1.5,
                                py: 1,
                                borderRadius: "16px",
                                backgroundColor: isSelected
                                    ? "#D2899D"
                                    : "transparent",
                                color: isSelected ? "#fff" : "#D2899D",
                                transition: "0.2s ease",
                                width: 42,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 600 }}
                            >
                                {day.format("dd").toUpperCase()}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 700 }}
                            >
                                {day.format("D")}
                            </Typography>
                        </Box>
                    </motion.div>
                );
            })}
        </Box>
    );
}
