import React from 'react';
import { Box, Drawer, Typography, List, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import docsNav from '../../data/docsNav';

const DRAWER_WIDTH = 260;

export default function DocsSidebar({ navGroups = docsNav, variant = 'permanent', open = false, onClose = () => {} }) {
  const navigate = useNavigate();
  const { sectionId } = useParams();
  const responsiveDisplay = variant === 'permanent' ? { xs: 'none', md: 'block' } : { xs: 'block', md: 'none' };

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        display: responsiveDisplay,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          borderRight: '1px solid rgba(155,138,196,0.15)',
          zIndex: (theme) => theme.zIndex.appBar - 1,
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflowY: 'auto', py: 3, px: 2 }}>
        {navGroups.map((group) => (
          <Box key={group.group} sx={{ mb: 3 }}>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                px: 1.5,
                mb: 0.5,
                color: 'text.secondary',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}
            >
              {group.group}
            </Typography>
            <List dense disablePadding>
              {group.items.map((item) => {
                const active = sectionId === item.id;
                return (
                  <ListItemButton
                    key={item.id}
                    selected={active}
                    onClick={() => {
                      navigate(`/docs/${item.id}`);
                      if (typeof onClose === 'function') onClose();
                    }}
                    sx={{
                      borderRadius: 1.5,
                      mb: 0.25,
                      py: 0.7,
                      px: 1.5,
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      '&.Mui-selected': {
                        bgcolor: 'rgba(232,163,61,0.12)',
                        borderLeft: '2px solid #E8A33D',
                      },
                      '&.Mui-selected:hover': {
                        bgcolor: 'rgba(232,163,61,0.18)',
                      },
                      '&:hover': {
                        bgcolor: 'rgba(155,138,196,0.08)',
                        transform: 'translateX(1px)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: 14,
                        color: active ? '#E8A33D' : 'text.primary',
                        fontWeight: active ? 600 : 400,
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
}

export { DRAWER_WIDTH };