"use client";

import { Box, Typography, Card, Stack, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Icon } from "@iconify/react";
import LeaderBoard from "@/components/LeaderBoard";
import ActiveSquadCard from "@/components/ActiveSquad";

export default function SquadDetails() {
    const habit = {
        id: "h101",
        name: "The 5am Club",
        image: "/images/workout.png",
        streak: 4,
        success: 75,
        totalDays: 30,
        startDate: "2025-10-01",
        dailyGoal: "15 mins",
    };

    

    return (
        <Layout>
            <Box sx={{ minHeight: "100vh", px: 2, pt: 2, pb: 4 }}>
                <IconButton>
                    <Icon
                        icon="lets-icons:back"
                        width={28}
                        height={28}
                        color="#fff"
                        onClick={() => window.history.back()}
                    />
                </IconButton>
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
                        style={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: 300,
                            height: 300,
                        }}
                    >
                        <img
                            src="/8624338.jpg"
                            alt={habit.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
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
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "15px", mt: 1 }}
                    >
                        Crushing goals before the sun comes up.
                    </Typography>

                    <Typography
                        variant="caption"
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            backgroundColor: "rgba(244, 155, 177, 0.2)",
                            px: 2,
                            py: 0.5,
                            borderRadius: 999,
                            color: "#f49bb1",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                            mt: 1,
                        }}
                    >
                        <Icon
                            icon="typcn:flash"
                            width={14}
                            height={14}
                            color="#f49bb1"
                        />
                        {habit.streak}-day Streak
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
                    {[
                        {
                            icon: "mynaui:chat-solid",
                            label: "Chat",
                            value: `${habit.streak} days`,
                        },
                        {
                            icon: "famicons:stats-chart",
                            label: "Insight",
                            value: `${habit.success}%`,
                        },
                        {
                            icon: "mdi:invite",
                            label: "Invite",
                            value: habit.totalDays,
                        },
                    ].map((stat, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flex: "1 1 calc(33.333% - 16px)",
                                minWidth: 0,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderRadius: 3,
                                p: 2,
                                textAlign: "center",
                                boxSizing: "border-box",
                            }}
                        >
                            <IconButton
                                sx={{
                                    backgroundColor: "rgba(244, 155, 177, 0.2)",
                                    width: 50,
                                    height: 50,
                                }}
                            >
                                <Icon
                                    icon={stat.icon}
                                    width={30}
                                    height={30}
                                    color="#f49bb1"
                                />
                            </IconButton>

                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                {stat.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mt: 4, mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                        Shared Habits{" "}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: "rgba(255,255,255,0.10)",
                                fontSize: 15,
                                fontWeight: 600,
                                width: "fit-content",
                            }}
                        >
                            <Icon icon="mdi:earth" width={14} color="#f49bb1" />
                            Early Rise{" "}
                        </Box>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: "rgba(255,255,255,0.10)",
                                fontSize: 12,
                                fontWeight: 600,
                                width: "fit-content",
                            }}
                        >
                            <Icon icon="mdi:earth" width={14} color="#f49bb1" />
                            HYDRATION
                        </Box>
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: "rgba(255,255,255,0.10)",
                                fontSize: 15,
                                fontWeight: 600,
                                width: "fit-content",
                            }}
                        >
                            <Icon icon="mdi:earth" width={14} color="#f49bb1" />
                            Reading{" "}
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            component="button"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "10px 16px",
                                borderRadius: 12,
                                border: "none",
                                backgroundColor: "rgba(255,255,255,0.10)",
                                color: "#fff",
                                fontWeight: 600,
                                cursor: "pointer",
                                marginTop: 16,
                            }}
                            onClick={() => {
                                window.location.href = "/create-challenge";
                            }}
                        >
                            Add Challenge to Squad
                            <Icon
                                icon="mdi:plus"
                                width={20}
                                height={20}
                                color="#fff"
                            />
                        </Box>
                    </Box>
                </Box>

                <ActiveSquadCard
                    title="No Sugar November"
                    progressLabel="35% Team Goal"
                    imageSrc="/vegetable.jpg"
                    progress={5}
                    streak={34}
                    id={6}
                />

                <LeaderBoard />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "#e64243",
                        justifyContent: "center",
                        display: "flex",
                        mt: 4,
                        fontSize: "1rem",
                    }}
                >
                    Leave Group{" "}
                </Typography>
            </Box>
        </Layout>
    );
}
