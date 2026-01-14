import { Card, Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import ProgressStreak from "@/shared/ProgressStreak";

type ActiveSquadCardProps = {
    id: string | number;
    title: string;
    progressLabel: string;
    imageSrc: string;
    progress: number;
    streak: number;
};

const ActiveSquadCard: React.FC<ActiveSquadCardProps> = ({
    id,
    title,
    progressLabel,
    imageSrc,
    progress,
    streak,
}) => {
    const router = useRouter();

   const handleClick = () => {
       console.log("Clicked ID:", id);
       router.push(`/squad-details/${id}`);
   };


    return (
        <Card
            onClick={handleClick}
            sx={{
                borderRadius: 4,
                boxShadow: "none",
                p: 4,
                position: "relative",
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#fff",
                cursor: "pointer",
            }}
        >
            {/* Image */}
            <Box
                sx={{
                    position: "absolute",
                    right: -10,
                    top: "40%",
                    transform: "translateY(-50%)",
                    opacity: 0.5,
                }}
            >
                <Image
                    src={imageSrc}
                    alt={title}
                    width={200}
                    height={400}
                    style={{
                        objectFit: "cover",
                        borderRadius: 8,
                    }}
                />
            </Box>

            <Stack spacing={2} sx={{ maxWidth: 420 }}>
                <Box sx={{ fontSize: 18, fontWeight: 700 }}>{title}</Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "rgba(255,255,255,0.85)",
                    }}
                >
                    <Icon
                        icon="pepicons-pop:checkmark-filled"
                        width={26}
                        height={16}
                        color="#7c003d"
                    />
                    {progressLabel}
                </Box>

                <ProgressStreak progress={progress} streak={streak} />
            </Stack>
        </Card>
    );
};

export default ActiveSquadCard;
