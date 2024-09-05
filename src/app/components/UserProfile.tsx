import { Box, Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import { useCallback, useState, memo } from 'react';


interface IUserProfile {
    name: string,
    imageSrc: string,
    bio: string,
    email: string
}

const UserProfile = memo(function UserProfile(props: IUserProfile) {
    const { name, imageSrc, bio, email } = props;

    // State to toggle email visibility
    const [showEmail, setShowEmail] = useState(false);

    // Function to handle the toggle
    const handleToggleEmail = useCallback(() => {
        setShowEmail((prevState) => !prevState);
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: '20px',
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 345,
                    textAlign: 'center',
                    borderRadius: '16px',
                    backgroundColor: '#fff',
                }}
            >
                {/* Profile Cover Photo */}
                <Box
                    sx={{
                        height: 120,
                        backgroundImage: 'url(/images/background.jpeg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                    }}
                ></Box>

                {/* User Icon */}
                <Avatar
                    alt={name}
                    src={imageSrc}
                    sx={{
                        width: 80,
                        height: 80,
                        margin: '-40px auto 0',
                        border: '4px solid white',
                    }}
                    imgProps={{ loading: 'lazy' }}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography>
                        {bio}
                    </Typography>
                    {showEmail && (
                        <Typography variant="body2" sx={{ mt: 2, color: 'black', fontWeight:'bold' }}>
                            {email}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        sx={{ mt: 2, backgroundColor:'black' }}
                        onClick={handleToggleEmail}
                    >
                        {showEmail ? 'Hide Email' : 'Show Email'}
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
});

export default UserProfile;