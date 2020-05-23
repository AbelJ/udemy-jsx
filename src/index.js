// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  author={Faker.name.findName()} 
                                avatar={Faker.image.avatar()}
                                content={Faker.lorem.sentence()}
                                timeAgo="Today 3:45" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  author={Faker.name.findName()} 
                                avatar={Faker.image.avatar()}
                                content={Faker.lorem.sentence()}
                                timeAgo="Today 2:30" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  author={Faker.name.findName()} 
                                avatar={Faker.image.avatar()}
                                content={Faker.lorem.sentence()}
                                timeAgo="Yesterday 9:45" />
            </ApprovalCard>
        </div>
    );
};

// Take a react component and show it on the screen
ReactDOM.render( <App />, document.querySelector('#root') );
