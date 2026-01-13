import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { Habit } from "@/data/userType";
import { useRouter } from "next/navigation";
import ProgressStreak from "@/shared/ProgressStreak";

interface ActiveCardListProps {
    ActiveCardList: Habit[];
    getHabitImage: (habit: Habit) => string;
    title: string;
}

const ActiveCardList: React.FC<ActiveCardListProps> = ({
    ActiveCardList,
    getHabitImage,
    title,
}) => {
    const progress = 90
    const router = useRouter();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <Typography sx={{ color: "#777777", mb: 1, fontWeight: 600 }}>
                {title}
            </Typography>

            {ActiveCardList.map((habit, index) => (
                <motion.div
                    key={habit.id || habit.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                    }}
                >
                    <Box
                        onClick={() => {
                            localStorage.setItem(
                                "selectedHabit",
                                JSON.stringify({
                                    ...habit,
                                    image: getHabitImage(habit),
                                })
                            );

                            router.push(`/habit-details/${habit.id}`);
                        }}
                        sx={{
                            position: "relative",
                            borderRadius: 3,
                            overflow: "hidden",
                            cursor: "pointer",
                            height: 120,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: 2,
                            color: "#fff",
                            backgroundImage: `url(${getHabitImage(habit)})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                backgroundColor: "rgba(0,0,0,0.9)",
                                zIndex: 0,
                            },
                        }}
                    >
                        <Box sx={{ zIndex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "1rem",
                                }}
                            >
                                {habit.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    opacity: 0.8,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Last done: {habit.duration}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.2,
                                zIndex: 1,
                            }}
                        >
                            <ProgressStreak
                                progress={progress}
                                streak={habit.streak}
                            />
                        </Box>
                    </Box>
                </motion.div>
            ))}
        </Box>
    );
};

export default ActiveCardList;
