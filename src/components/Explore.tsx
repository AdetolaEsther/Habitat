import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Explore = () => {
  const imageMap: Record<string, string> = {
      Health: "/62571.jpg",
      Fitness: "/4846446.jpg",
      Mindfulness: "/7747195.jpg",
      Learning: "/7768446.jpg",
      Productivity: "/4871715.jpg",
  };

    const exploreHabits = [
        { name: "Reading", category: "Learning" },
        { name: "Yoga", category: "Health" },
        { name: "Meditation", category: "Mindfulness" },
        { name: "Hydration", category: "Health" },
        { name: "Journaling", category: "Mindfulness" },
        { name: "Gratitude", category: "Mindfulness" },
        { name: "Stretching", category: "Fitness" },
        { name: "Digital Detox", category: "Productivity" },
        { name: "Walking", category: "Fitness" },
        { name: "Decluttering", category: "Productivity" },
        { name: "Early Sleep", category: "Health" },
        { name: "Meal Prep", category: "Lifestyle" },
    ];

    return (
        <Box sx={{ mt: 5 }}>
            <Typography
                sx={{
                    color: "#A1879E",
                    mb: 2,
                    fontWeight: 600,
                }}
            >
                Explore New Habits 🌸
            </Typography>

            {/* Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                }}
            >
                {exploreHabits.map((habit, index) => (
                    <motion.div
                        key={habit.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.05,
                            duration: 0.4,
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                height: 120,
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-start",
                                p: 1.5,
                                cursor: "pointer",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url(${
                                    imageMap[habit.category] ||
                                    imageMap["Mindfulness"]
                                })`,
                                transition: "transform 0.25s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                },
                            }}
                        >
                            {/* Overlay for readability */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.15))",
                                }}
                            />

                            {/* Habit name */}
                            <Typography
                                sx={{
                                    position: "relative",
                                    zIndex: 1,
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: "0.9rem",
                                }}
                            >
                                {habit.name}
                            </Typography>
                        </Box>
                    </motion.div>
                ))}
            </Box>

            {/* See More link */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    mt: 2,
                }}
            >
                <Typography
                    component="a"
                    href="/explore"
                    sx={{
                        color: "#D2899D",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline",
                        },
                    }}
                >
                    See More →
                </Typography>
            </Box>
        </Box>
    );
};

export default Explore;
