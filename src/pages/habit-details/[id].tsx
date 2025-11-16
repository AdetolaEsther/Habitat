import { Box, Typography, Card, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { User } from "@/data/userType";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

export default function HabitDetails() {
    const router = useRouter();
 

const [habit, setHabit] = useState<any>(null);

console.log({habit});

useEffect(() => {
    const storedHabit = localStorage.getItem("selectedHabit");
    if (storedHabit) {
        setHabit(JSON.parse(storedHabit));
    } else {
        // If no habit is stored, redirect back to dashboard
        router.push("/dashboard");
    }
}, [router]);

if (!habit) return null;
    return (
        <Layout>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "#FFF",
                        borderRadius: 3,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        mx: "auto",
                        mt: 0,
                    }}
                >
                    <img
                        src={habit.image}
                        alt={habit.name}
                        style={{
                            width: "100%",
                            borderRadius: 12,
                            marginBottom: 16,
                        }}
                    />

                    <Box sx={{ px: 2, pb: 2 }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, color: "#7c003d" }}
                        >
                            {habit.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ mt: 1, opacity: 0.7, color: "#7c003d" }}
                        >
                            Category: {habit.category || "N/A"}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ opacity: 0.6, mt: 1, color: "#7c003d" }}
                        >
                            What’s your progress today?
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}
