ReactDOM.render((
    <Router>
        <Route path="/" component={Main}>
            <Route name="user" path="/user/:userNoteId" component={Main}/>
            <Route name="day" path="/day/:day" component={Main}>
            </Route>
            <Route name="department" path="/day/:day/dep/:depId" component={Main}/>
        </Route>
        <Route path="*" component={Main}/>
    </Router>
), document.getElementById('main'));