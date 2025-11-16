import { Box, Typography, Card, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { User } from "@/data/userType";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

export default function HabitDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [user, setUser] = useState<User | null>(null);
 

    console.log(user, "user");
    const cards = [
        { title: "Intake", subtitle: "Deep Talk", color: "#F2E8FF" },
        { title: "Mental Effect", subtitle: "Very High", color: "#E8FDF3" },
        { title: "Focus Level", subtitle: "Moderate", color: "#FFF8E7" },
        { title: "Energy", subtitle: "Stable", color: "#FDECEF" },
    ];
    

const [habit, setHabit] = useState<any>(null);

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
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                   
                }}
            >
                <Box sx={{ minHeight: "100vh", p: 1}}>
                    <img
                        src={habit.image}
                        alt={habit.name}
                        style={{ width: "100%", borderRadius: 16 }}
                    />
                    <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
                        {habit.name}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
                        Category: {habit.category || "N/A"}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.6, mb: 4 }}>
                        What’s your progress today?
                    </Typography>

                   
                    {/* Add more habit details here */}
                </Box>
            </Box>
        </Layout>
    );
}
