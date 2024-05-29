'use client';

import { LoginRounded, LogoutRounded } from '@mui/icons-material';
import { AppBar, Button } from '@mui/material/';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useMemo } from 'react';
import logo from '../../../public/logo.png';
import { Link, Menu } from './styles';
import { ADMIN_ELEMENTS, DEFAULT_ELEMENTS } from './utils/constants';

export default function Header() {
  const { data: session } = useSession();

  const elements = useMemo(() => {
    const role = session?.token.user.role;

    if (role === 'admin') {
      return ADMIN_ELEMENTS;
    }

    return DEFAULT_ELEMENTS;
  }, [session]);

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
        {elements.map(({ href, label }, index) => {
          return (
            <Link key={index} href={href}>
              <Button color="inherit" sx={{ fontWeight: 'bold' }}>
                {label}
              </Button>
            </Link>
          );
        })}
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
