import Layout from "./layout/Layout";

function Dashboard() {
    return (
        <>
            <Layout>
                <h2>Dashboard</h2>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Leads</h5>
                                <p class="card-text">comming soon...</p>
                                <a href="#" class="btn btn-primary">Details...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Attendance</h5>
                                <p class="card-text">comming soon...</p>
                                <a href="#" class="btn btn-primary">Details...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Budget Variance</h5>
                                <p class="card-text">comming soon...</p>
                                <a href="#" class="btn btn-primary">Details...</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Common Tasks</h5>
                                <p class="card-text"><a href="/expenses/create" class="link-underline link-underline-opacity-0">New Expense</a></p>
                                {/* <a href="#" class="btn btn-primary">Details...</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Dashboard;