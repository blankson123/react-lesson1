import React from 'react';
import ReactDOM from 'react-dom/client';
import faker from 'faker';
import './style/App.css';

// custom components
import Comment from './components/comment/Comment';
import ApprovalCard from './components/approval/ApprovalCard';


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);


function App(){
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author='Blankson' 
          content='This world is awesome' 
          timeAgo='Today at 6:00PM' 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author='Roses' 
          content='Everything made was beautiful' 
          timeAgo='Today at 9:30AM' 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          author='Mel' 
          content='God is a designer' 
          timeAgo='Today at 12:00PM' 
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
}

root.render(<App />);

