import React from 'react';

const Header = ({}) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
            <a class="navbar-brand" href="#">Home</a>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Search</a>
                    </li>
                </ul>
                <a class="nav-link" href="#">My profile</a>
                <a class="nav-link" href="#">Sign In</a>
                <a class="nav-link" href="#">Sign Up</a>
            </div>
        </nav>
    );
}

export default Header;