import styles from "./page.module.css";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';
import { Button, Box } from '@mui/material';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Box
          sx={{
            height: '100vh',  
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link href={'/profile'}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'black',
                color: 'white', 
                '&:hover': {
                  backgroundColor: 'gray',
                },
              }}
            >
              <PersonIcon />
              User Profile
            </Button>
          </Link>
        </Box>
      </main>
    </div>
  );
}
