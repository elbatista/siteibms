import React from 'react';
import YouTube from 'react-youtube';
import { Timeline, Events, TextEvent, themes, createTheme  } from '@merc/react-timeline';
import './styles.css';

const customTheme = createTheme(themes.default, {
    date: {
      backgroundColor: '#5CC6D0',
      fontSize: '20px',
      padding: '10px'
    },
    marker: {
      borderColor: '#5CC6D0',
    },
    timelineTrack: {
      backgroundColor: '#5CC6D0',
    },
});

export default props => {
    const HistoryCard = (key, item) => (
        <div className="history-card">
          <div>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
          <img alt={item.titulo} src={require('../../../assets/images/senior.png')} />
        </div>
    );
    
    return (
        <>
            <div className="page-padding">
                <h1>{props.historyData?.titulo || "Nossa história"}</h1>
                <h2>{props.historyData?.descricao || "Repartir com alegria e generosidade tudo aquilo que Deus me confiou"}</h2>
            </div>
            <YouTube videoId={props.historyData?.youtubeID} opts={{width: '100%', height: 800}} />
            <div className="page-padding">
                {props.historyData &&
                <Timeline theme={customTheme}>
                    <Events>
                        {Object.keys(props.historyData.timeline).map(key=>
                        <TextEvent
                            key={props.historyData.timeline[key].titulo}
                            date={JSON.stringify(props.historyData.timeline[key].ano)} 
                            card={()=>HistoryCard(key, props.historyData.timeline[key])} />
                        )}
                    </Events>
                </Timeline>}
            </div>
        </>
    );
};
