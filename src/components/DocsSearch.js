import React, { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  Popper,
  ClickAwayListener,
  Paper,
  Box,
  TextField,
  Typography,
  ListItemButton,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import searchIndex from '../data/searchIndex';

const CATEGORY_ORDER = ['React', 'JavaScript', 'HTML', 'CSS'];
const MAX_PER_CATEGORY = 8;

function getGroupedResults(query) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  return CATEGORY_ORDER.map((category) => ({
    category,
    items: searchIndex
      .filter(
        (item) =>
          item.category === category && item.label.toLowerCase().includes(trimmed)
      )
      .slice(0, MAX_PER_CATEGORY),
  })).filter((group) => group.items.length > 0);
}

/**
 * variant="popper" (default): a search icon that expands into a floating
 * results dropdown — used in the desktop navbar.
 * variant="inline": an always-visible search field with results rendered
 * directly below it in the normal document flow — used in the mobile drawer.
 */
export default function DocsSearch({ variant = 'popper', onNavigate }) {
  const [open, setOpen] = useState(variant === 'inline');
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const anchorRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const groupedResults = getGroupedResults(query);
  const flatResults = groupedResults.flatMap((g) => g.items);

  useEffect(() => {
    setActiveIndex(flatResults.length > 0 ? 0 : -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  };

  const handleClose = () => {
    if (variant === 'inline') {
      // Inline (mobile) search stays visible; just clear the query.
      setQuery('');
      setActiveIndex(-1);
      return;
    }
    setOpen(false);
    setQuery('');
    setActiveIndex(-1);
  };

  const handleSelect = (item) => {
    navigate(`/docs/${item.sectionId}`);
    handleClose();
    if (onNavigate) onNavigate();
  };

  const handleKeyDown = (e) => {
    if (flatResults.length === 0) {
      if (e.key === 'Escape') handleClose();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % flatResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + flatResults.length) % flatResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = flatResults[activeIndex] || flatResults[0];
      if (selected) handleSelect(selected);
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  const resultsBody = (
    <Box sx={{ maxHeight: 360, overflowY: 'auto' }}>
      {query.trim() === '' && (
        <Typography variant="body2" sx={{ p: 2, color: 'text.secondary' }}>
          Start typing to search across React, JavaScript, HTML, and CSS docs.
        </Typography>
      )}
      {query.trim() !== '' && flatResults.length === 0 && (
        <Typography variant="body2" sx={{ p: 2, color: 'text.secondary' }}>
          No topics found for &quot;{query}&quot;.
        </Typography>
      )}
      {groupedResults.map((group) => (
        <Box key={group.category}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              px: 2,
              pt: 1.5,
              pb: 0.5,
              color: 'primary.main',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 0.6,
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11,
            }}
          >
            {group.category}
          </Typography>
          {group.items.map((item) => {
            const globalIndex = flatResults.indexOf(item);
            return (
              <ListItemButton
                key={`${item.category}-${item.sectionId}`}
                selected={globalIndex === activeIndex}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setActiveIndex(globalIndex)}
                sx={{ px: 2, py: 1, fontSize: 14 }}
              >
                {item.label}
              </ListItemButton>
            );
          })}
        </Box>
      ))}
    </Box>
  );

  const searchField = (
    <TextField
      inputRef={inputRef}
      fullWidth
      size="small"
      autoFocus={variant === 'popper'}
      placeholder="Search topics..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
          </InputAdornment>
        ),
        endAdornment: query && (
          <InputAdornment position="end">
            <IconButton size="small" onClick={() => setQuery('')} aria-label="Clear search">
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );

  if (variant === 'inline') {
    return (
      <Box>
        <Box sx={{ px: 0, pb: 1 }}>{searchField}</Box>
        {resultsBody}
      </Box>
    );
  }

  return (
    <>
      <Box
        component="button"
        type="button"
        ref={anchorRef}
        onClick={handleOpen}
        aria-label="Search documentation"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.secondary',
          background: 'transparent',
          border: 'none',
          padding: 0,
          margin: 0,
          lineHeight: 0,
          cursor: 'pointer',
          font: 'inherit',
          '&:hover': { color: 'text.primary' },
        }}
      >
        <SearchIcon sx={{ fontSize: 20, display: 'block' }} />
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        style={{ zIndex: 1400 }}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper
            elevation={0}
            sx={{
              width: 360,
              borderRadius: 2.5,
              overflow: 'hidden',
              border: '1px solid rgba(155,138,196,0.18)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              bgcolor: 'background.paper',
            }}
          >
            <Box sx={{ p: 1.5, borderBottom: '1px solid rgba(155,138,196,0.15)' }}>
              {searchField}
            </Box>
            {resultsBody}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
