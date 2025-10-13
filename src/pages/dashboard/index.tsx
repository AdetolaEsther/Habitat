import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import DateStrip from "@/shared/datesrtip";
import { User } from "@/data/userType";
import { motion } from "framer-motion";
import Layout from "@/components/layout";


export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const hour = dayjs().hour();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
            ? "Good Afternoon"
            : "Good Evening";
const today = dayjs().format("YYYY-MM-DD");
const activeHabits =
    user?.habits.filter((h: any) => h.status === "active") || [];
const total = activeHabits.length;

    // Instead of matching to "today", pick the *most recent* date in the user's data
    const allDates = activeHabits.flatMap((h: any) =>
        h.completionProgress.map((p: any) => p.dateTime)
    );
    const latestDate = allDates.length > 0 ? allDates.sort().pop() : null;

    // Count habits completed on that latest date
    const completedOnLatest = activeHabits.filter((h: any) => {
        const entry = h.completionProgress.find(
            (p: any) => p.dateTime === latestDate
        );
        return entry && entry.count > 0;
    }).length;

    const progress =
        total === 0 ? 0 : Math.round((completedOnLatest / total) * 100);

    // Calculate longest streak based on consecutive completion days
    const calculateStreak = (habit: any) => {
        let streak = 0;
        const sortedProgress = [...habit.completionProgress].sort((a, b) =>
            dayjs(a.dateTime).diff(dayjs(b.dateTime))
        );

        for (let i = sortedProgress.length - 1; i >= 0; i--) {
            const current = sortedProgress[i];
            const previous = sortedProgress[i - 1];
            if (current.count > 0) {
                streak++;
                if (
                    previous &&
                    dayjs(current.dateTime).diff(
                        dayjs(previous.dateTime),
                        "day"
                    ) > 1
                ) {
                    break;
                }
            } else {
                break;
            }
        }

        return streak;
    };

    const streak =
        activeHabits.length > 0
            ? Math.max(...activeHabits.map((h: any) => calculateStreak(h)))
            : 0;

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            window.location.href = "/welcome";
        }
    }, []);

    if (!user) return null;

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
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                    }}
                >
                    <Avatar
                        alt={user.firstname || "User"}
                        src="/avatar.png"
                        sx={{ bgcolor: "#F29CA3", width: 50, height: 50 }}
                    />
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#B17596" }}
                    >
                        {greeting}, {user.firstname || "Friend"} 👋
                    </Typography>
                </Box>

                <Box
                    sx={{
                        borderRadius: 3,
                        p: 2,
                        mb: 3,
                    }}
                >
                    <Typography sx={{ color: "#A1879E", mb: 1 }}>
                        Calendar
                    </Typography>
                    <DateStrip />
                </Box>

                <Box
                    sx={{
                        backgroundColor: "#FFFFFF",
                        borderRadius: 3,
                        p: 2,
                        mb: 2,
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
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{
                                    position: "relative",
                                    display: "inline-flex",
                                }}
                            >
                                <svg width="80" height="80" viewBox="0 0 80 80">
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
                                            color: "#B17596",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {progress}%
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Box>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <Typography
                                sx={{ color: "#D2899D", fontWeight: 600 }}
                            >
                                Streak: {streak} days 🔥
                            </Typography>
                            <Typography
                                sx={{ color: "#D2899D", fontWeight: 600 }}
                            >
                                Habits: {total} active
                            </Typography>
                        </motion.div>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
