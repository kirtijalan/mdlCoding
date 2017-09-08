import React from 'react';
import Posts from './Posts';
import Albums from './Albums';

require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Posts</h2>
        <h2> Album </h2>
        <Posts />
        <Albums />
    </div>
);

export default App;
