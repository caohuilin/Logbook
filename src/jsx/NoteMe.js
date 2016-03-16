//我的日志的具体组件
const NoteMe = React.createClass({
    propTypes: {
        show: React.PropTypes.bool.isRequired,
        showNote: React.PropTypes.func.isRequired
    },
    render() {
        return (
            <div className="note_me" style={css_display(this.props.show)}>
                <div id="mask" onClick={this.props.showNote}></div>
                <div id="popup">
                    <div className="title">
                        我的日志
                    </div>
                    <div className="icon" onClick={this.props.showNote}></div>
                    <div className="con">
                        <div className="date">
                            选择日期<br />
                            <input type="text" name="name"/>
                        </div>
                        <div className="mood">
                            我的心情
                            <ul>
                                <li><img src="./public/img/mood1.png" alt=""/></li>
                                <li><img src="./public/img/mood2.png" style={{marginTop:"5px"}} alt=""/></li>
                                <li><img src="./public/img/mood3.png" style={{marginTop:"7px"}} alt=""/></li>
                                <li><img src="./public/img/mood4.png" style={{marginTop:"5px"}} alt=""/></li>
                            </ul>
                        </div>
                        <div className="note">
                            我的日志
                            <textarea name="name" className="form-control"></textarea>
                        </div>
                    </div>
                    <button className="certern" type="button" name="button">确定</button>
                </div>
                <div className="add_com_text">
                    <div className="title">
                        我的评论
                    </div>
                    <textarea name="name"></textarea>
                    <button className="certern" type="button" name="button">确定</button>
                </div>
            </div>
        )
    }
});
