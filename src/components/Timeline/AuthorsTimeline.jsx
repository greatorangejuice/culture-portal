import React, { useMemo } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

function AuthorsTimeline(props) {
    const { activities } = props;

    const timeLineItems = useMemo(
        () => activities.map((item, index) => {
            return (
            <TimelineItem
                key={index}
                dateText={item.date}
                style={{ color: '#e86971' }}
            >
                <h3>{item.place}</h3>
                <p>
                {item.description}
                </p>
            </TimelineItem>
            );
        }),
        [activities],
    );

    return <Timeline lineColor="#ddd">{timeLineItems}</Timeline>
}


export default AuthorsTimeline;