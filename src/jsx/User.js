const User = React.createClass({
    propTypes: {
        userNoteId: React.PropTypes.string.isRequired,
        users: propTypesUser
    },
    getInitialState () {
        return {
            note: [],
            noteShow: -1,
            allComShow: -1,
            addComShow: false,
            addComSuccess: false
        };
    },
    componentWillMount () {
        $.get(API_HOST + "/posts?uid=" + this.props.userNoteId, (notes)=> {
            this.setState({note: notes.data});
        });
    },
    componentWillReceiveProps(nextProps){
        $.get(API_HOST + "/posts?uid=" + nextProps.userNoteId, (notes)=> {
            this.setState({note: notes.data});
        });
    },
    setNoteShow (id) {
        if (id === this.state.noteShow) {
            id = -1;
        }
        this.setState({noteShow: id});
    },
    viewAllComment (id) {
        if (id === this.state.allComShow) {
            id = -1;
        }
        this.setState({allComShow: id});
    },
    addCom () {
        this.setState({addComShow: true});
    },
    closeAdd () {
        this.setState({addComShow: false});
    },
    addSuccess () {
        this.setState({addComShow: false});
        setTimeout(()=> {
            this.setState({addComSuccess: true});
            setTimeout(()=> {
                this.setState({addComSuccess: false});
            }, 3000);
        }, 1000);
    },
    render () {
        var user = this.props.users.find((user)=>user.id === this.props.userNoteId);
        if (!user) {
            return null;
        }
        var note_list = this.state.note.filter((note)=>note.user_id === user.id).map((note, id)=>(
                <div key={id}>
                    <li onClick={this.setNoteShow.bind(null,id)}>
                        {note.day}
                    </li>
                    <div className="notess">
                        <div className="mo">心情：<img src={mood_img_src(note.mood)} alt=""/></div>
                        <div className="rizhi">日志：
                            <div className="con">
                                <span dangerouslySetInnerHTML={{__html:marked(note.content||'')}}></span>
                            </div>
                        </div>
                        <div className="comment">
                            <a onClick={this.viewAllComment.bind(null,id)}>查看所有评论</a>
                            <div className="all_com" style={css_display(this.state.noteShow===id)}>暂无评论</div>
                        </div>
                        <div className="add_comment"><a onClick={this.addCom}>添加评论</a></div>
                        <div className="add_ssuccess" style={css_display(this.state.addComSuccess)}>添加成功</div>
                        <div id="mask" onClick={this.closeAdd} style={css_display(this.state.addComShow)}></div>
                        <div className="add_com_text" style={css_display(this.state.addComShow)}>
                            <div className="title">
                                我的评论
                            </div>
                            <div className="icon" onClick={this.closeAdd}></div>
                            <textarea name="name"></textarea>
                            <button className="btn btn-primary" type="button" name="button"
                                    onClick={this.addSuccess}>确定
                            </button>
                        </div>
                    </div>
                </div>
            )
        );
        return (
            <div className="rightArea">
                <div className="name">{user.real_name}</div>
                <div className="de">--{user.department}</div>
                <ul className="note_nav">
                    {note_list}
                </ul>
            </div>
        );
    }
});
