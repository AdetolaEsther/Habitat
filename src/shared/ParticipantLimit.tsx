import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

interface ParticipantLimitProps {
    value: number;
    onChange: (val: number) => void;
}

const ParticipantLimit = ({ value, onChange }: ParticipantLimitProps) => {
    const [limit, setLimit] = useState(value);

    return (
        <Box sx={{ mt: 4 }}>
            <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography sx={{ fontWeight: 600 }}>
                    Participant Limit
                </Typography>
                <Typography sx={{ color: "#7c003d", fontWeight: 600 }}>
                    {value === 50 ? "No Limit" : `${value} Participants`}
                </Typography>
            </Stack>

            <input
                type="range"
                min={5}
                max={50}
                value={limit}
                onChange={(e) => {
                    const newValue = Number(e.target.value);
                    setLimit(newValue);
                    onChange(newValue);
                }}
                style={{
                    width: "100%",
                    cursor: "pointer",
                    appearance: "none",
                    height: 6,
                    borderRadius: 4,
                    background: `linear-gradient(
                        to right,
                        #7c003d ${((limit - 5) * 100) / 45}%,
                        rgba(255,255,255,0.3) ${((limit - 5) * 100) / 45}%
                    )`,
                }}
            />

            <Stack direction="row" justifyContent="space-between" mt={1}>
                <Typography variant="caption">{value}</Typography>
                <Typography variant="caption">No Limit</Typography>
            </Stack>
            <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #7c003d;
                    cursor: pointer;
                    border: none;
                }

                input[type="range"]::-moz-range-thumb {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #7c003d;
                    cursor: pointer;
                    border: none;
                }
            `}</style>
        </Box>
    );
};

export default ParticipantLimit;
