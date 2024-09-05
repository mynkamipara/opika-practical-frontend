'use client';
import UserProfile from "@/app/components/UserProfile";

export default function ProfilePage() {
    return (
        <div>
            <UserProfile
                name="John Doe"
                imageSrc="https://randomuser.me/api/portraits/men/62.jpg"
                bio="A passionate full-stack developer with over 3 years of experience."
                email="john.doe@example.com"
            />
        </div>
    );
}
