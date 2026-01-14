import ProgressStreak from '@/shared/ProgressStreak';
import { Stack, Typography, Box, Avatar } from '@mui/material';
import React, { useState } from 'react'

const LeaderBoard = () => {
    const [contacts, setContacts] = useState([
            { id: 1, name: "Sarah Jenkins", username: "@sarahj", selected: false },
            { id: 2, name: "John Doe", username: "@johndoe", selected: false },
            {
                id: 3,
                name: "Alice Smith",
                username: "@alicesmith",
                selected: false,
            },
        ]);
    const toggleContact = (id: number) => {
        setContacts((prev) =>
            prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c))
        );
    };
  return (
      <Stack sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Leaderboard{" "}
          </Typography>
          {contacts.map((contact) => (
              <Box
                  key={contact.id}
                  sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: 2,
                      borderRadius: 2,
                      cursor: "pointer",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      mb: 1,
                  }}
                  onClick={() => toggleContact(contact.id)}
              >
                  <Avatar
                      src="/profilee-picture.jpg"
                      sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                      <Typography sx={{ fontWeight: 600, color: "#fff" }}>
                          {contact.name}
                      </Typography>
                      <Typography
                          sx={{
                              fontSize: 12,
                              color: "rgba(255,255,255,0.6)",
                          }}
                      >
                          {contact.username}
                      </Typography>
                  </Box>
                  <Box
                      sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.2,
                          zIndex: 1,
                      }}
                  >
                      <ProgressStreak progress={59} streak={7} />
                  </Box>
              </Box>
          ))}
      </Stack>
  );
}

export default LeaderBoard