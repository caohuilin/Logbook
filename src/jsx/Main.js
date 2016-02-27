const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount(){
        //给路径赋默认值
        var params = this.props.params;
        if (!params.day && !params.userNoteId && !params.depId) {
            this.context.router.push("/day/" + moment().format('YYYY-MM-DD') + "/dep/-1");
        }
    },
    //加载最终页面 两个组件Header和Content
    render(){
        var params = this.props.params;
        if (!params){
            return null;
        }
        if (!params.day && !params.userNoteId && !params.depId) {
            return null;
        }
        return (
            <div className="main">
                <Header/>
                <Content params={this.props.params}/>
            </div>
        )
    }
});


