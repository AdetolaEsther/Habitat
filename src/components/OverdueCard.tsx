"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import Image from "next/image";
import { Habit } from "@/data/userType";

interface OverdueCardListProps {
    overdueHabits: Habit[];
    getHabitImage: (habit: Habit) => string; 
}

const OverdueCardList: React.FC<OverdueCardListProps> = ({
    overdueHabits,
    getHabitImage,
}) => {
    if (!overdueHabits?.length) return null;

    return (
        <Box>
            <Typography sx={{ color: "#777777", mb: 1, fontWeight: 600 }}>
                Habits to Revisit ✨
            </Typography>
            <Box
                sx={{
                    mt: 3,
                    overflowX: "auto",
                    display: "flex",
                    gap: 3,
                    scrollSnapType: "x mandatory",
                    
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    pb: 1,
                }}
            >
                {overdueHabits.map((habit, index) => {
                    const bgImage = getHabitImage(habit);

                    return (
                        <motion.div
                            key={habit.id || habit.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1 * index,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            whileHover={{ scale: 1.04 }}
                            style={{
                                flex: "0 0 85%",
                                scrollSnapAlign: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    borderRadius: 6,
                                    overflow: "hidden",
                                    height: 220,
                                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeOut",
                                    }}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        zIndex: 0,
                                    }}
                                >
                                    <Image
                                        src={bgImage}
                                        alt={
                                            habit.category || "habit background"
                                        }
                                        fill
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </motion.div>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.8))",
                                        zIndex: 1,
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        zIndex: 2,
                                        color: "white",
                                        p: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 0.5,
                                            fontSize: "1.1rem",
                                        }}
                                    >
                                        {habit.name}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            opacity: 0.8,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        Last done:{" "}
                                        {dayjs(
                                            (habit as any).lastCompleted
                                        ).format("MMM D")}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 0.5,
                                            fontWeight: 500,
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        Missed {(habit as any).daysOverdue} days
                                        ago 💭
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
};

export default OverdueCardList;
