import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import DateStrip from "@/shared/datesrtip";
import { User } from "@/data/userType";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import OverdueCardList from "@/components/OverdueCard";
import ActiveCardList from "@/components/ActiveCard";
import Explore from "@/components/Explore";

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const hour = dayjs().hour();
    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";

const Habits = user?.habits?.activeHabits || [];

    const total = Habits.length;

    const allDates =
        Habits?.flatMap(
            (h: any) => h?.completionProgress?.map((p: any) => p.dateTime) || []
        ) || [];

    const latestDate = allDates.length > 0 ? allDates.sort().pop() : null;

    const completedOnLatest = (Habits ?? []).filter((h: any) => {
        const entry = (h?.completionProgress ?? []).find(
            (p: any) => p.dateTime === latestDate
        );
        return entry && entry.count > 0;
    }).length;

    const progress =
        total === 0 ? 0 : Math.round((completedOnLatest / total) * 100);

    const calculateStreak = (habit: any) => {
        const progressList = habit?.completionProgress ?? [];
        let streak = 0;

        const sortedProgress = [...progressList].sort((a, b) =>
            dayjs(a.dateTime).diff(dayjs(b.dateTime))
        );

        for (let i = sortedProgress.length - 1; i >= 0; i--) {
            const current = sortedProgress[i];
            const previous = sortedProgress[i - 1];

            if (current.count > 0) {
                streak++;
                const gap = previous
                    ? dayjs(current.dateTime).diff(
                          dayjs(previous.dateTime),
                          "day"
                      )
                    : 0;
                if (gap > 1) break;
            } else {
                break;
            }
        }

        return streak;
    };

   

    const imageMap: Record<string, string> = {
        Health: "/62571.jpg",
        Fitness: "/4846446.jpg",
        Mindfulness: "/7747195.jpg",
        Learning: "/7768446.jpg",
        Productivity: "/4871715.jpg",
    };
    
    const getActiveHabitImage = (habit: any) => {
        if (!user?.habits) return imageMap["Mindfulness"];
        const activeHabit = user.habits.activeHabits?.find((h: any) => h.id === habit.id);
        const category = activeHabit?.category || habit.category?.trim() || "Mindfulness";
        return imageMap[category] || imageMap["Mindfulness"];
    };
const getHabitImage = (habit: any) => {
    if (!user?.habits) return imageMap["Mindfulness"];
    const overdueHabit = user.habits.overdueHabits?.find((h: any) => h.id === habit.id);
    const category = overdueHabit?.category || habit.category?.trim() || "Mindfulness";
    return imageMap[category] || imageMap["Mindfulness"];
};


    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            window.location.href = "/welcome";
        }
    }, []);

    // if (!user) return null;

    console.log(user, "user");
    return (
        <Layout>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    px: 1,
                    py: 2,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <motion.img
                        src="/freepik_assistant_1760596112435.png"
                        alt="Assistant"
                        style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                            transformOrigin: "bottom center",
                            borderRadius: 16,
                        }}
                        animate={{
                            y: [0, -8, 0],
                            rotate: [0, 1, 0, -1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                        }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            style={{
                                fontSize: "1.6rem",
                                fontWeight: 700,
                                color: "#3E6259",
                            }}
                        >
                            {greeting}, {user?.firstname || "Friend"} 👋
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            style={{
                                fontSize: "0.9rem",
                                color: "#3E6259",
                            }}
                        >
                            Let’s make today gentle and productive ✨
                        </motion.p>
                    </Box>
                </motion.div>

                <DateStrip />
                {/* 
                <Box
                    sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 3,
                        p: 2,
                        // mb: 2,
                        mt: 0,
                        boxShadow: "0px 4px 8px rgba(0,0,0,0.05)",
                    }}
                >
                    <Typography sx={{ color: "#A1879E", mb: 2 }}>
                        Today's Progress
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                display: "inline-flex",
                            }}
                        >
                          
                        </Box>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Typography
                                sx={{ color: "#D2899D", fontWeight: 600 }}
                            >
                                Habits: {total} active
                            </Typography>
                        </motion.div>
                    </Box>
                </Box> */}

                <Box sx={{ mt: 3 }}>
                    {user?.habits?.overdueHabits?.length ? (
                        <ActiveCardList
                            ActiveCardList={user?.habits?.activeHabits}
                            getHabitImage={getActiveHabitImage}
                        />
                    ) : (
                        <Explore />
                    )}
                </Box>

                <Box sx={{ mt: 4 }}>
                    {user?.habits?.overdueHabits?.length ? (
                        <OverdueCardList
                            overdueHabits={user?.habits.overdueHabits}
                            getHabitImage={getHabitImage}
                        />
                    ) : (
                        <Explore />
                    )}
                </Box>
            </Box>
        </Layout>
    );
}
