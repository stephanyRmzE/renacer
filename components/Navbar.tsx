'use client'
 
import { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {NAV_LINKS.map((link) => (
          <ListItem key={link.key} disablePadding>
            <ListItemButton component={Link} href={link.href}>
              <ListItemText primary={link.label} className="regular-18 text-brown-dark flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-golden-main" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className='shadow-lg rounded flexBetween padding-container sticky top-0 z-30 py-5 bg-white/[.85]'>
      <Link href='/'>
        <Image src='/logo_hd.svg' alt="logo_renacer" width={0} height={0} style={{ width: '100px', height: 'auto' }} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-18 text-brown-dark flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-golden-main">
            {link.label}
          </Link>
        ))}
      </ul>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { lg: 'none' } }}
      >
        <MenuRoundedIcon fontSize='large' />
      </IconButton>
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Mejor rendimiento al abrir en móvil.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            marginTop: '120px'
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Navbar;
