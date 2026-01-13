import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Box, Button, Typography, TextField, Link, IconButton, InputAdornment } from "@mui/material";
import Logo from "@/shared/logo";
import { Icon } from "@iconify/react";


export default function Signup() {
    const router = useRouter();
    const [form, setForm] = useState({ name: "", email: "", password: "", Confirmpassword: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#0a1129",
                px: 3,
                py: 4,
            }}
        >
            <Box sx={{ textAlign: "center" }}>
                <IconButton
                    sx={{
                        backgroundColor: "rgba(125, 0, 62, 0.28)",
                        borderRadius: "6px",
                        width: 48,
                        height: 48,
                        mb: 6,
                    }}
                >
                    <Icon
                        icon="carbon:checkmark-filled"
                        width={26}
                        height={26}
                        color="#7d003e"
                    />
                </IconButton>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#fff",
                            fontWeight: 700,
                            mb: 1,
                        }}
                    >
                        Create Account{" "}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: "#fff",
                        }}
                    >
                        Start building your habits today!
                    </Typography>
                </motion.div>
            </Box>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 450,
                    mx: "auto",
                    mb: 6,
                }}
            >
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.6rem",
                    }}
                >
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        size="small"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        fullWidth
                        placeholder="Enter Your full name"
                        InputProps={{
                            sx: {
                                height: 62,
                                color: "#fff",
                                backgroundColor: "#17203c",
                                borderRadius: "10px",
                                "& fieldset": {
                                    borderColor: "#2d3b5e",
                                },
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Icon icon="material-symbols:person-rounded" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        size="small"
                        value={form.email}
                        placeholder="Enter Your email"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        fullWidth
                        InputProps={{
                            sx: {
                                height: 62,
                                color: "#fff",
                                backgroundColor: "#17203c",
                                borderRadius: "10px",
                                "& fieldset": {
                                    borderColor: "#2d3b5e",
                                },
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    >
                                        <Icon icon="material-symbols:mail" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        placeholder="Enter Your password"
                        size="small"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        fullWidth
                        InputProps={{
                            sx: {
                                height: 62,
                                color: "#fff",
                                backgroundColor: "#17203c",
                                borderRadius: "10px",
                                "& fieldset": {
                                    borderColor: "#2d3b5e",
                                },
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
                                        {!showPassword ? (
                                            <Icon icon="mdi:visibility" />
                                        ) : (
                                            <Icon icon="material-symbols-light:visibility-off" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: "18px",
                            },
                        }}
                    />
                    <TextField
                        label=" Confirm Your Password"
                        type="password"
                        variant="outlined"
                        size="small"
                        value={form.Confirmpassword}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                Confirmpassword: e.target.value,
                            })
                        }
                        fullWidth
                        InputProps={{
                            sx: {
                                height: 62,
                                color: "#fff",
                                backgroundColor: "#17203c",
                                borderRadius: "10px",
                                "& fieldset": {
                                    borderColor: "#2d3b5e",
                                },
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                (prev) => !prev
                                            )
                                        }
                                    >
                                        {!showConfirmPassword ? (
                                            <Icon icon="mdi:visibility" />
                                        ) : (
                                            <Icon icon="material-symbols-light:visibility-off" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            shrink: true,
                            sx: {
                                color: "#fff",
                                fontWeight: 500,
                                fontSize: "18px",
                            },
                        }}
                        placeholder="Re-enter  your password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: "#7d003e",
                            color: "#fff",
                            borderRadius: "2rem",
                            py: 1.2,
                            textTransform: "none",
                            fontSize: "1.2rem",
                            mt: 1,
                        }}
                    >
                        {" "}
                        Sign Up{" "}
                    </Button>
                </motion.form>
            </Box>

            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography
                    variant="body2"
                    sx={{ color: "#fff", mt: 2, fontWeight: 600 }}
                >
                    Already have a member?{" "}
                    <Link
                        onClick={() => router.push("/welcome")}
                        sx={{
                            color: "#7d003e",
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
        </Box>
    );
}
