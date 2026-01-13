"use client";

import { Box, Typography, Card, Stack, Divider, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import dayjs from "dayjs";
import { Icon } from "@iconify/react";

export default function HabitDetails() {
    const router = useRouter();
    const [habit, setHabit] = useState<any>(null);

    useEffect(() => {
        const storedHabit = localStorage.getItem("selectedHabit");
        if (storedHabit) {
            setHabit(JSON.parse(storedHabit));
        } else {
            router.push("/dashboard");
        }
    }, [router]);

    if (!habit) return null;

    const today = dayjs();
    const daysInMonth = Array.from({ length: today.daysInMonth() }, (_, i) =>
        today.date(i + 1)
    );

    const completedDays = habit.completedDays || [2, 3, 4, 7, 10]; 

    const performance = [
        { month: "May", value: 65 },
        { month: "Jun", value: 80 },
        { month: "Jul", value: 45 },
        { month: "Aug", value: 90 },
        { month: "Sep", value: 95 },
        { month: "Oct", value: 85 },
    ];

    return (
        <Layout>
            <Box sx={{ minHeight: "100vh", px: 2, pt: 2, pb: 4 }}>
                <Box
                    sx={{
                        position: "relative",
                        mb: 3,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        style={{ borderRadius: 24, overflow: "hidden" }}
                    >
                        <img
                            src={habit.image}
                            alt={habit.name}
                            style={{
                                width: 300,
                                height: 300,
                                objectFit: "cover",
                                borderRadius: 24,
                            }}
                        />
                    </motion.div>
                </Box>

                <Box sx={{ textAlign: "center", mb: 3 }} gap={2}>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, color: "#fff" }}
                    >
                        {habit.name}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
                        Daily Goal : {habit.dailyGoal || "N/A"}
                    </Typography>

                    <Typography
                        variant="caption"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.7,
                            backgroundColor: "rgba(252, 228, 228, 0.3)",
                            px: 2,
                            py: 0.5,
                            borderRadius: 999,
                            color: "#fda4af",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                        }}
                    >
                        🔥 12-day Streak
                    </Typography>
                </Box>


                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            flex: "0 0 48%",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            p: 2,
                            textAlign: "start",
                        }}
                    >
                        <Icon
                            icon="mdi:medal"
                            width={22}
                            height={22}
                            color="grey"
                        />
                        <Typography variant="caption" sx={{ color: "gray" }}>
                            Streak
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {habit.streak || 0} days
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: "0 0 48%",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            p: 2,
                            textAlign: "start",
                        }}
                    >
                        <Icon
                            icon="carbon:checkmark-filled"
                            width={22}
                            height={22}
                            color="grey"
                        />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {habit.success || 0}%
                        </Typography>
                        <Typography variant="caption" sx={{ color: "gray" }}>
                            Success
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: "0 0 48%",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            p: 2,
                            textAlign: "start",
                        }}
                    >
                        <Icon
                            icon="uil:calender"
                            width={22}
                            height={22}
                            color="grey"
                        />
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {habit.totalDays || 0}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "gray" }}>
                            Total Days
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            flex: "0 0 48%",
                            backgroundColor: "rgba(255,255,255,0.08)",
                            borderRadius: 3,
                            p: 2,
                            textAlign: "start",
                        }}
                    >
                        <Icon
                            icon="carbon:checkmark-filled"
                            width={22}
                            height={22}
                            color="grey"
                        />
                        <Typography variant="caption" sx={{ color: "gray" }}>
                            Start Date
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {habit.startDate || "-"}
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        mt: 2,
                        backgroundColor: "rgba(255,255,255,0.08)",
                        borderRadius: 3,
                        p: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        History
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(7, 1fr)",
                            gap: 1,
                        }}
                    >
                        {daysInMonth.map((day) => {
                            const isCompleted = completedDays.includes(
                                day.date()
                            );
                            return (
                                <Box
                                    key={day.toString()}
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        bgcolor: isCompleted
                                            ? "#7c003d"
                                            : "rgba(62, 98, 89,0.15)",
                                        color: isCompleted ? "#fff" : "gray",
                                        fontWeight: isCompleted ? 700 : 400,
                                        cursor: "default",
                                    }}
                                >
                                    {day.date()}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                {/* Performance Chart */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        Performance
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="flex-end">
                        {performance.map((item) => (
                            <Box
                                key={item.month}
                                sx={{ flex: 1, textAlign: "center" }}
                            >
                                <Box
                                    sx={{
                                        height: `${item.value}%`,
                                        bgcolor: "#7c003d",
                                        borderRadius: 1,
                                        transition: "0.3s all",
                                        mb: 1,
                                    }}
                                />
                                <Typography
                                    variant="caption"
                                    sx={{ color: "gray" }}
                                >
                                    {item.month}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: "#7c003d",
                        paddingY: 1.6,
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        mt: 2,
                    }}
                >
                    Mark as Completed
                </Button>
            </Box>
        </Layout>
    );
}
