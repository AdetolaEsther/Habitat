import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import { Habit } from "@/data/userType";
import { useRouter } from "next/navigation";

interface ActiveCardListProps {
    ActiveCardList: Habit[];
    getHabitImage: (habit: Habit) => string;
}

const ActiveCardList: React.FC<ActiveCardListProps> = ({
    ActiveCardList,
    getHabitImage,
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
            <Typography sx={{ color: "#4B3B33", mb: 1, fontWeight: 600 }}>
                Active Habits
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
                                background:
                                    "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
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
                                Last done:{" "}
                                {dayjs(habit.lastCompleted).format("MMM D")}
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
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{
                                    position: "relative",
                                    display: "inline-flex",
                                }}
                            >
                                <svg width="30" height="30" viewBox="0 0 80 80">
                                    <defs>
                                        <linearGradient
                                            id="progressGradient"
                                            x1="1"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#B17596"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#F5B3B8"
                                            />
                                        </linearGradient>
                                    </defs>

                                    <circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke="#f1f1f1"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <motion.circle
                                        cx="40"
                                        cy="40"
                                        r="35"
                                        stroke="url(#progressGradient)"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 35}
                                        strokeDashoffset={
                                            2 *
                                            Math.PI *
                                            35 *
                                            (1 - progress / 100)
                                        }
                                        initial={{
                                            strokeDashoffset: 2 * Math.PI * 35,
                                        }}
                                        animate={{
                                            strokeDashoffset:
                                                2 *
                                                Math.PI *
                                                35 *
                                                (1 - progress / 100),
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: "easeOut",
                                        }}
                                    />
                                </svg>

                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: "0.5rem",
                                        }}
                                    >
                                        {progress}%
                                    </Typography>
                                </Box>
                            </motion.div>
                            <Typography
                                sx={{
                                    zIndex: 1,
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                }}
                            >
                                🔥 {habit.streak}d
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            ))}
        </Box>
    );
};

export default ActiveCardList;
