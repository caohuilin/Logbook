//侧边的部门组件
const Caption = React.createClass({
    propTypes: {
        users: propTypesUser,
        department: propTypeDepartment,
    },
    getInitialState() {
        return {showUser: -1};
    },
    setShowUsers(id) {
        if (id === this.state.showUser) id = -1;
        this.setState({showUser: id});
    },
    render () {
        var departmentNode = this.props.department.map((dep, id)=> {
            var users = this.props.users.filter((user)=>user.department === dep);
            return (
                <div key={id}>
                    <li onClick={this.setShowUsers.bind(null,id)}>{dep}({users.length})</li>
                    <ul className="gd" style={css_display(this.state.showUser===id)}>
                        {
                            users.map((user, id)=>
                                <Link key={id} to={"/user/"+user.id}>
                                    <li>{user.real_name}</li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            );
        });
        return (
            <div className="caption">
                <ul className="c_de">
                    {departmentNode}
                </ul>
            </div>
        )
    }
});
