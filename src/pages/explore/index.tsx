import Layout from "@/components/layout";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const Explore = () => {
    const categories = [
        { name: "All", icon: "gridicons:grid-view" },
        { name: "Health", icon: "mdi:heart-pulse" },
        { name: "Fitness", icon: "mdi:run" },
        { name: "Mindfulness", icon: "mdi:meditation" },
        { name: "Productivity", icon: "mdi:timer" },
        { name: "Learning", icon: "mdi:book-open" },
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const habitCategories = [
        {
            name: "Health",
            habits: [
                { name: "Yoga", description: "Stretch and relax your body" },
                { name: "Hydration", description: "Drink 2L of water daily" },
                { name: "Early Sleep", description: "Go to bed before 10pm" },
            ],
        },
        {
            name: "Fitness",
            habits: [
                {
                    name: "Stretching",
                    description: "Morning full body stretch",
                },
                { name: "Walking", description: "Walk 10,000 steps daily" },
                { name: "Morning Jog", description: "15 min cardio" },
            ],
        },
        {
            name: "Mindfulness",
            habits: [
                {
                    name: "Meditation",
                    description: "5 minutes of deep breathing",
                },
                {
                    name: "Journaling",
                    description: "Write down 3 things you are grateful for",
                },
                {
                    name: "Gratitude",
                    description: "Reflect on positive events",
                },
            ],
        },
        {
            name: "Productivity",
            habits: [
                {
                    name: "Digital Detox",
                    description: "Limit screen time in evenings",
                },
                { name: "Decluttering", description: "Clean up workspace" },
                { name: "Inbox Zero", description: "Clear your emails" },
            ],
        },
        {
            name: "Learning",
            habits: [
                {
                    name: "Reading",
                    description: "Read at least 10 pages a day",
                },
                { name: "Skill Practice", description: "Practice a new skill" },
            ],
        },
    ];

    // Filter categories based on selection
    const displayedCategories =
        selectedCategory === "All"
            ? habitCategories
            : habitCategories.filter((cat) => cat.name === selectedCategory);

    return (
        <Layout>
            <Box sx={{ mt: 4, px: 2 }}>
                <Typography
                    sx={{
                        mb: 3,
                        fontWeight: 600,
                        fontSize: "2rem",
                        textAlign: "center",
                    }}
                >
                    Explore Habits
                </Typography>

                {/* Category Pills */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        overflowX: "auto",
                        mb: 3,
                        pb: 1,
                    }}
                >
                    {categories.map((cat) => {
                        const isSelected = selectedCategory === cat.name;
                        return (
                            <Button
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    whiteSpace: "nowrap",
                                    maxWidth: 80, // limit the width of the button text
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    px: 3,
                                    py: 1,
                                    borderRadius: 50,
                                    backgroundColor: isSelected
                                        ? "#7c003d"
                                        : "rgba(10,17,41,0.1)",
                                    color: isSelected ? "#fff" : "#777777",
                                    textTransform: "none",
                                    fontWeight: isSelected ? 600 : 500,
                                    "&:hover": {
                                        backgroundColor: isSelected
                                            ? "#96004d"
                                            : "rgba(10,17,41,0.15)",
                                    },
                                }}
                            >
                                <Icon icon={cat.icon} width={20} height={20} />
                                <Typography
                                    sx={{
                                        // overflow: "hidden",
                                        // textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        display: "inline-block",
                                        maxWidth: 80, // max width for text only
                                    }}
                                >
                                    {cat.name}
                                </Typography>
                            </Button>
                        );
                    })}
                </Box>

                {/* Habit Cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        gap: 3,
                    }}
                >
                    {displayedCategories.map((category) => (
                        <Box key={category.name}>
                            {/* Category Header */}
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    mb: 1,
                                    color: "#7c003d",
                                }}
                            >
                                {category.name}
                            </Typography>

                            {category.habits.map((habit) => (
                                <Box
                                    key={habit.name}
                                    sx={{
                                        borderRadius: 3,
                                        backgroundColor:
                                            "rgba(255,255,255,0.08)",
                                        px: 2,
                                        py: 1.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        color: "#fff",
                                        mb: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                backgroundColor:
                                                    "rgba(125, 0, 62, 0.28)",
                                                borderRadius: "6px",
                                                width: 48,
                                                height: 48,
                                            }}
                                        >
                                            <Icon
                                                icon="carbon:checkmark-filled"
                                                width={26}
                                                height={26}
                                                color="#7d003e"
                                            />
                                        </IconButton>

                                        <Box>
                                            <Typography fontWeight={700}>
                                                {habit.name}
                                            </Typography>
                                            <Typography fontSize="0.8rem">
                                                {habit.description}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Button
                                        sx={{
                                            fontSize: "0.7rem",
                                            fontWeight: 500,
                                            backgroundColor: "#7c003d",
                                            color: "#fff",
                                            px: 0.5,
                                            py: 0.5,
                                            borderRadius: 2,
                                        }}
                                    >
                                        Add
                                    </Button>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Layout>
    );
};

export default Explore;
