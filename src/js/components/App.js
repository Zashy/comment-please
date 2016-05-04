import React from 'react';

import CommentForm from './CommentForm';
import CommentsHeader from './Header.js';
import Comments from './Comments';

import '../../scss/App.scss';

const App = () =>
    <main>
        <CommentsHeader />
        <CommentForm />
        <Comments />
    </main>;

export default App;
