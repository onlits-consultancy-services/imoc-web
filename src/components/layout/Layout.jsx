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
                        <li class="list-group-item"><a href="/dashboard" class="link-underline link-underline-opacity-0">Dashboard</a></li>
                        <li class="list-group-item"><a href="/budgets" class="link-underline link-underline-opacity-0">Budget</a></li>
                        <li class="list-group-item"><a href="/expense-heads" class="link-underline link-underline-opacity-0">Expense Head</a></li>
                        <li class="list-group-item"><a href="/particulars" class="link-underline link-underline-opacity-0">Particulars</a></li>
                        <li class="list-group-item"><a href="/expenses" class="link-underline link-underline-opacity-0">Expense</a></li>
                        <li class="list-group-item"><a href="/reports" class="link-underline link-underline-opacity-0">Reports</a></li>
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