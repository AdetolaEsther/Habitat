import { Icon } from '@iconify/react';
import { Stack, Box, Avatar, IconButton } from '@mui/material';
import React from 'react'

const Stories = () => {
     const stories = [
            {
                id: 1,
                name: "Tunde",
                avatar: "/freepik_assistant_1760596112435.png",
            },
            { id: 2, name: "Aisha", avatar: "/4871715.jpg" },
            { id: 3, name: "Seun", avatar: "/62571.jpg" },
            { id: 3, name: "Sean", avatar: "/7747195.jpg" },
            { id: 3, name: "Agatha", avatar: "/profile3.jpg" },
            { id: 3, name: "Sam", avatar: "/profile3.jpg" },
        ];
  return (
      <Stack
          direction="row"
          spacing={2}
          sx={{
              mt: 2,
              overflowX: "auto",
              px: 1,
              "&::-webkit-scrollbar": { display: "none" },
          }}
      >
          <Stack alignItems="center" spacing={1}>
              <Box sx={{ position: "relative" }}>
                  <Avatar
                      src="/profilee-picture.jpg"
                      sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "#FFC1CC",
                          border: "2px solid #7c003d",
                      }}
                  />
                  <IconButton
                      sx={{
                          position: "absolute",
                          bottom: -2,
                          right: -2,
                          bgcolor: "#7c003d",
                          width: 28,
                          height: 28,
                      }}
                  >
                      <Icon
                          icon="mdi:plus"
                          width={16}
                          height={16}
                          color="#fff"
                      />
                  </IconButton>
              </Box>
              <Box sx={{ fontSize: 12 }}>Your story</Box>
          </Stack>

          {stories.map((story) => (
              <Stack key={story.id} alignItems="center" spacing={1}>
                  <Avatar
                      src={story.avatar}
                      sx={{
                          width: 80,
                          height: 80,
                          border: "2px solid #ff005d", // active story ring
                          padding: "2px",
                      }}
                  />
                  <Box sx={{ fontSize: 12 }}>{story.name}</Box>
              </Stack>
          ))}
      </Stack>
  );
}

export default Stories