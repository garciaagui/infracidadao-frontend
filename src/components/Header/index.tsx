'use client';

import { LoginRounded, LogoutRounded } from '@mui/icons-material';
import { AppBar, Button } from '@mui/material/';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { Link, Menu } from './styles';

const onClick = () => {
  window.alert('Página em desenvolvimento');
};

export default function Header() {
  const { data: session } = useSession();

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'primary.dark',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        alignItems: 'center',
        padding: '0.5rem 0',
        justifyItems: 'center',
      }}
    >
      <Image src={logo} alt="logo" width={150} height={50} />

      <Menu>
        <Link href={'/home'}>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>
            Início
          </Button>
        </Link>
        <Link href={'/home'} onClick={onClick}>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>
            Perfil
          </Button>
        </Link>
        <Link href={'/home'} onClick={onClick}>
          <Button color="inherit" sx={{ fontWeight: 'bold' }}>
            Minhas reclamações
          </Button>
        </Link>
      </Menu>

      {!session ? (
        <Link href={'/auth/login'}>
          <Button
            startIcon={<LoginRounded />}
            sx={{
              color: 'inherit',
              fontWeight: 'bold',
              border: '1px solid',
            }}
          >
            Entrar
          </Button>
        </Link>
      ) : (
        <Button
          startIcon={<LogoutRounded />}
          onClick={() => signOut()}
          sx={{
            color: 'white',
            fontWeight: 'bold',
            border: '1px solid',
          }}
        >
          Sair
        </Button>
      )}
    </AppBar>
  );
}
