import React, { useState } from "react";
import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function DateStrip() {
    const today = dayjs();
    const [selectedDate, setSelectedDate] = useState(today);

    // Generate 30 days starting from today
    const weekDays = Array.from({ length: 30 }, (_, i) => today.add(i, "day"));

    return (
        <Box
            sx={{
               
                borderRadius: 2,
                py: 1.5,
                // boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 2,
                    overflowX: "auto",
                    gap: 1,
                    whiteSpace: "nowrap",
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {weekDays.map((day) => {
                    const isSelected = selectedDate.isSame(day, "day");

                    return (
                        <motion.div
                            key={day.toString()}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedDate(day)}
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <Box
                                sx={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                    px: 1,
                                    py: 1,
                                    borderRadius: "26px",
                                    height: 50,
                                    backgroundColor: isSelected
                                        ? "#0A1128"
                                        : "rgba(62, 98, 89, 0.15)",

                                    color: isSelected ? "#fff" : "#0A1128",
                                    transition: "0.2s ease",
                                    minWidth: 20,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
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
                                    sx={{ fontWeight: 400 }}
                                >
                                    {day.format("D")}
                                </Typography>
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}
