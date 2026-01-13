import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface RepeatDaysStripProps {
    selectedDays?: string[]; // initial selected days as strings "YYYY-MM-DD"
    onChange?: (days: string[]) => void; // callback when selection changes
}

export default function RepeatDaysStrip({
    selectedDays = [],
    onChange,
}: RepeatDaysStripProps) {
    const today = dayjs();
    const weekDays = Array.from({ length: 7 }, (_, i) => today.add(i, "day"));

    const [selectedDates, setSelectedDates] = useState<Dayjs[]>(
        selectedDays.map((d) => dayjs(d))
    );

    // Toggle day selection
    const toggleDay = (day: Dayjs) => {
        setSelectedDates((prev) => {
            const exists = prev.some((d) => d.isSame(day, "day"));
            let newDates;
            if (exists) {
                newDates = prev.filter((d) => !d.isSame(day, "day"));
            } else {
                newDates = [...prev, day];
            }
            // call parent onChange
            if (onChange) {
                onChange(newDates.map((d) => d.format("YYYY-MM-DD")));
            }
            return newDates;
        });
    };

    return (
        <Box sx={{ py: 1.5 }}>
            <Box
                sx={{
                    display: "flex",
                    px: 2,
                    overflowX: "auto",
                    gap: 1,
                    whiteSpace: "nowrap",
                    scrollSnapType: "x mandatory",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {weekDays.map((day) => {
                    const isSelected = selectedDates.some((d) =>
                        d.isSame(day, "day")
                    );

                    return (
                        <motion.div
                            key={day.toString()}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleDay(day)}
                            style={{ scrollSnapAlign: "center" }}
                        >
                            <Box
                                sx={{
                                    cursor: "pointer",
                                    width: 50,
                                    height: 50,
                                    borderRadius: 2,
                                    backgroundColor: isSelected
                                        ? "#7d003e"
                                        : "rgba(62, 98, 89, 0.15)",
                                    color: isSelected ? "#fff" : "grey",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "0.2s ease",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 400 }}
                                >
                                    {day.format("ddd").toUpperCase()}
                                </Typography>
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}
