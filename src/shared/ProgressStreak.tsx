import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface ProgressStreakProps {
    progress: number; // 0–100
    streak: number; // days count
}

export default function ProgressStreak({
    progress,
    streak,
}: ProgressStreakProps) {
    const radius = 35;
    const circumference = 2 * Math.PI * radius;

    return (
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
                            <stop offset="0%" stopColor="#7C003D" />
                            <stop offset="100%" stopColor="#C40061" />
                        </linearGradient>
                    </defs>

                    <circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="#f1f1f1"
                        strokeWidth="8"
                        fill="none"
                    />

                    <motion.circle
                        cx="40"
                        cy="40"
                        r={radius}
                        stroke="url(#progressGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference * (1 - progress / 100)}
                        initial={{
                            strokeDashoffset: circumference,
                        }}
                        animate={{
                            strokeDashoffset:
                                circumference * (1 - progress / 100),
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
                            fontWeight: 900,
                            fontSize: "0.5rem",
                            color: "#7c003d",
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
                🔥 {streak}d
            </Typography>
        </Box>
    );
}
