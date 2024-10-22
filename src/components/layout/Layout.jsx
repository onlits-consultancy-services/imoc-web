import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <nav class="navbar bg-light border-bottom">
                <div class="container-fluid">
                    <a href="#" class="navbar-brand"><img src="/logo.jpg" alt="logo" height="40" /></a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="" class="nav-link">user</a></li>
                    </ul>
                </div>
            </nav>

            <div class="row">
                <aside class="col-sm-2 p-3">
                    <ul class="list-group">
                        <li class="list-group-item"><a href="/Dashboard" class="link-underline link-underline-opacity-0">Dashboard</a></li>
                        <li class="list-group-item"><a href="/Lead" class="link-underline link-underline-opacity-0">Lead</a></li>
                        <li class="list-group-item"><a href="/Learner" class="link-underline link-underline-opacity-0">Learner</a></li>
                        <li class="list-group-item"><a href="/Enrollment" class="link-underline link-underline-opacity-0">Enrollment</a></li>
                        <li class="list-group-item"><a href="/AccountGroup" class="link-underline link-underline-opacity-0">Account Group</a></li>
                        <li class="list-group-item"><a href="/Account" class="link-underline link-underline-opacity-0">Account</a></li>
                        <li class="list-group-item"><a href="/Program" class="link-underline link-underline-opacity-0">Program</a></li>
                        <li class="list-group-item"><a href="/Batch" class="link-underline link-underline-opacity-0">Batch</a></li>
                        <li class="list-group-item"><a href="/Attendance" class="link-underline link-underline-opacity-0">Attendance</a></li>
                        <li class="list-group-item"><a href="/Organization" class="link-underline link-underline-opacity-0">Organization</a></li>
                    </ul>
                </aside>
                <main class="col-sm-9 p-3">
                    { children }
                </main>
            </div>
        </>
    );
}

export default Layout;