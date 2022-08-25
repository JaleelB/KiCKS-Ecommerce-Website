import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import * as Icon from 'react-bootstrap-icons';
import { useUser } from '@auth0/nextjs-auth0';

const StyledProfileWrapper = styled.div`
    border-radius: 50%;
    height: 100%;
`;

const StyledProfileImage = styled.div`
    img{
        inline-size: 2.2rem; border-radius: 50%;
    }
`

const UserProfile = () => {

    const route = useRouter();
    const {user} = useUser();

    if(!user)
        return (
            <StyledProfileWrapper 
                className='profile-wrapper'
                onClick={() => route.push('/api/auth/login')}
            >
                <Icon.PersonCircle/>
            </StyledProfileWrapper>
        )

    return (
        <StyledProfileImage onClick={() => route.push('/profile')}>
            <img 
                className="profile-photo" 
                src={user.picture} 
                alt={user.name} 
            />
        </StyledProfileImage>
    )

}

export default UserProfile;