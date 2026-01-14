import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

interface RewardsProps {
    onChange?: (selected: string[]) => void;
}

const Rewards: React.FC<RewardsProps> = ({ onChange }) => {
    const rewardOptions = [
        { icon: "icon-park-solid:gold-medal", label: "Gold" },
        { icon: "solar:medal-ribbon-star-bold", label: "Elite" },
        { icon: "famicons:star-half-outline", label: "Rising" },
        { icon: "ic:round-diamond", label: "Gem" },
    ];

    const [selectedRewards, setSelectedRewards] = useState<string[]>([]);

    const toggleReward = (label: string) => {
        const updated = selectedRewards.includes(label)
            ? selectedRewards.filter((r) => r !== label)
            : [...selectedRewards, label];
        setSelectedRewards(updated);
        onChange?.(updated);
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Reward for Finishers
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 2,
                }}
            >
                {rewardOptions.map((reward) => (
                    <Box
                        key={reward.label}
                        onClick={() => toggleReward(reward.label)}
                        sx={{
                            aspectRatio: "1 / 1",
                            borderRadius: 3,
                            border: selectedRewards.includes(reward.label)
                                ? "2px solid #7c003d"
                                : "1px solid rgba(255,255,255,0.2)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                    >
                        <Icon icon={reward.icon} color="#7c003d" width={28} />
                        <Typography
                            variant="caption"
                            sx={{ mt: 0.5, color: "#fff" }}
                        >
                            {reward.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Rewards;
