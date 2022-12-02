import * as React from 'react';
import Stack from '@mui/material/Stack';

import Thread from './Thread';

export default function Start() {

    const [threads,SetThreads]=React.useState([{"title":"Thread 1","text":"This is Thread 1"},
                                               {"title":"Thread 2","text":"This is Thread 2"},
                                               {"title":"Thread 3","text":"This is Thread 3"},
                                               {"title":"Thread 4","text":"This is Thread 4"},
                                               {"title":"Thread 5","text":"This is Thread 5"},
                                               {"title":"Thread 6","text":"This is Thread 6"}])
    return(

        <Stack spacing={2}>
            {threads.map((item,index) => (
                <Thread title={item["title"]} text={item["text"]}></Thread>
            ))}
        </Stack>

    );
}
