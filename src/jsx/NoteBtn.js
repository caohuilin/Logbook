//Note按钮组件
const NoteBtn = React.createClass({
    getInitialState () {
        return {
            NoteShow: false
        }
    },
    showNote () {
        this.setState({NoteShow: !this.state.NoteShow});
    },
    render () {
        return (
            <span>
                 <button id="note" type="button" name="button" onClick={this.showNote}>我的日志</button>
                 <NoteMe show={this.state.NoteShow} showNote={this.showNote}/>
             </span>
        );
    }
});
