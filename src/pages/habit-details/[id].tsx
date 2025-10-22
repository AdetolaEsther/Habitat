import { Box, Typography, Card, Avatar } from "@mui/material";
import { useRouter } from "next/router";

export default function HabitDetails() {
    const router = useRouter();
    const { id, bg } = router.query;

    const goals = [
        {
            title: "Morning",
            subtitle: "Reduce Social Anxiety",
            duration: "22 Minutes",
            color: "#F8EBD5", // beige
        },
        {
            title: "Day",
            subtitle: "Reduce Bulimia Nervosa",
            duration: "16 Minutes",
            color: "#E5DFF5", // lilac
        },
        {
            title: "Night",
            subtitle: "Reduce Anorexia",
            duration: "24 Minutes",
            color: "#D9EBE7", // sage tint
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#FFF8F8", // your main tone
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 4,
            }}
        >
            {/* Header */}
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                My Goals
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, mb: 3 }}>
                Today, {new Date().toLocaleDateString("en-GB")}
            </Typography>

            {/* Goals List */}
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                {goals.map((g, i) => (
                    <Card
                        key={i}
                        sx={{
                            backgroundColor: g.color,
                            borderRadius: 4,
                            px: 3,
                            py: 2,
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Typography sx={{ fontWeight: 600, mb: 1 }}>
                            {g.title}
                        </Typography>
                        <Typography sx={{ fontWeight: 500 }}>
                            {g.subtitle}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            {g.duration}
                        </Typography>
                    </Card>
                ))}
            </Box>

           
        </Box>
    );
}
