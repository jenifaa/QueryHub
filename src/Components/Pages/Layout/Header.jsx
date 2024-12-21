import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='flex'>
                <Link>Login</Link>
                <Link>Register</Link>
            </div>
        </div>
    );
};

export default Header;