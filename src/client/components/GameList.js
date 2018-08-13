import React from "react"
import ListObj from "./listObj.js";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return ({GameList: state.ListGame});
}

const  ListGame = (GameList) => {
    let list = GameList.data.map((obj, index) => <div key={index}><ListObj index={index} data={obj} /></div>);
    return (<div>{list}</div>);
}

const GameList = ({GameList}) => {
    return (
        <div style={{border: 'solid red 1px', width: '300px', height: '500px'}}>
            <ListGame data={GameList}/>
        </div>
    );
}

export default connect(mapStateToProps)(GameList);