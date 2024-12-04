// src/components/layout/Header.tsx
'use client';

import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import PublicIcon from '@mui/icons-material/Public';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ColorModeContext } from '../ThemeRegistry/ThemeRegistry';
import { navigationItems, languages } from '@/types/navigation';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const { t, i18n } = useTranslation('common');
  const colorMode = React.useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [languageAnchor, setLanguageAnchor] = React.useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    setLanguageAnchor(null);
  };

  const getNavigationTitle = (path: string) => {
    const key = path === '/' ? 'home' : path.slice(1);
    return t(`navigation.${key}`);
  };

  return (
    <AppBar position="sticky" color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {theme.palette.mode === 'dark' ? (
              <Image width={100} height={70} src={"/images/logo-dark.svg"} alt={''} />
            ) : (
              <Image width={100} height={70} src={"/images/logo.svg"} alt={''} />
            )}
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label={t('menu.aria')}
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            <Image width={70} height={50} src={"/images/logo.svg"} alt={''} />
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "flex-start" } }}>
            {navigationItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                href={item.path}
                sx={{
                  px: 1,
                  py: 0.5,
                  textAlign: "center",
                  color: pathname === item.path ? 'primary.main' : 'text.primary',
                  display: 'block',
                }}
              >
                {getNavigationTitle(item.path)}
              </Button>
            ))}
          </Box>

          {/* Theme & Language Controls */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              onClick={colorMode.toggleColorMode}
              color="inherit"
              aria-label={t('theme.toggle')}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <IconButton
              onClick={handleLanguageMenu}
              color="inherit"
              aria-label={t('language.select')}
            >
              <PublicIcon />
            </IconButton>
            <Menu
              anchorEl={languageAnchor}
              open={Boolean(languageAnchor)}
              onClose={() => setLanguageAnchor(null)}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  selected={i18n.language === lang.code}
                  sx={{ fontSize: 14, px: 4 }}
                >
                  {t(`languages.${lang.code}`)}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: 'primary.main' }}>
            <Image width={70} height={50} src={"/images/logo.svg"} alt={''} />
          </Typography>
          <Divider />
          <List>
            {navigationItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  sx={{
                    textAlign: 'center',
                    bgcolor: pathname === item.path ? 'action.selected' : 'transparent',
                  }}
                >
                  <ListItemText primary={getNavigationTitle(item.path)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}