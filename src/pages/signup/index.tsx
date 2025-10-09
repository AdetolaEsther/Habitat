import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Box, Button, Typography, TextField, Link } from "@mui/material";
import Logo from "@/shared/logo";


export default function Signup() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFF8F8", 
                backgroundImage: `url('/background.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover", // or "contain" if you want it to fit fully
                backgroundBlendMode: "overlay", // or "multiply", "soft-light", "normal" — try and see which fits your aesthetic best
                px: 3,
                textAlign: "center",
            }}
        >
            
<Logo/>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography
                    variant="h4"
                    sx={{ color: "#B17596", fontWeight: 700, mb: 1 }}
                >
                    Create Account 🌱
                </Typography>
                <Typography variant="body1" sx={{ color: "#A1879E", mb: 4 }}>
                    Start building your habits today!
                </Typography>
            </motion.div>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                    width: "100%",
                    maxWidth: 350,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                }}
            >
                <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    fullWidth
                    InputProps={{
                        sx: {
                            backgroundColor: "transparent",
                            "& fieldset": {
                                borderColor: "#D8C1D2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#B17596",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#B17596",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#A1879E",
                            fontWeight: 500,
                        },
                    }}
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    value={form.email}
                    onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                    }
                    fullWidth
                    InputProps={{
                        sx: {
                            backgroundColor: "transparent",
                            "& fieldset": {
                                borderColor: "#D8C1D2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#B17596",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#B17596",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#A1879E",
                            fontWeight: 500,
                        },
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={form.password}
                    onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                    }
                    fullWidth
                    InputProps={{
                        sx: {
                            backgroundColor: "transparent",
                            "& fieldset": {
                                borderColor: "#D8C1D2",
                            },
                            "&:hover fieldset": {
                                borderColor: "#B17596",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#B17596",
                            },
                        },
                    }}
                    InputLabelProps={{
                        shrink: true,
                        sx: {
                            color: "#A1879E",
                            fontWeight: 500,
                        },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#F29CA3",
                        color: "#fff",
                        borderRadius: "2rem",
                        py: 1.2,
                        textTransform: "none",
                        fontSize: "1rem",
                        mt: 1,
                        "&:hover": { backgroundColor: "#e18d94" },
                    }}
                >
                    Sign Up
                </Button>
            </motion.form>

            <Typography variant="body2" sx={{ color: "#8C738B", mt: 2 }}>
                Already have an account?{" "}
                <Link
                    onClick={() => router.push("/welcome")}
                    sx={{
                        color: "#B17596",
                        fontWeight: 600,
                        cursor: "pointer",
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                    }}
                >
                    Log in
                </Link>
            </Typography>
        </Box>
    );
}
