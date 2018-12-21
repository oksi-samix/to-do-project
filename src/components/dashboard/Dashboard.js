import React from "react";

const Dashboard = ({user, tasks, products, url}) => (<div>

    <h1>Hello, <b>{user.firstName}</b></h1>

    <p>You have <b>{tasks.total}</b> categories (<b>{tasks.published}</b> published)</p>
    <p>You have <b>{products}</b> products</p>

    <a href={url}>Go to categories</a>


</div>);

export default Dashboard;
