import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button';
import './styles.css';

export default props => {
    return (<>
        <div className="main-content">
            <div className="main-content-left page-padding">
                {
                    props.breadcrumb &&
                    <div className="main-content-left-breadcrumb">
                    {props.breadcrumb.map((item, index)=>(
                        <>
                            {index > 0 && <img src={require('../../assets/images/arrow-right.svg')} alt="Seta" />}
                            {
                                item.link ? 
                                <Link to={item.link}>{item.text}</Link> :
                                <label>{item.text}</label>
                            }
                        </>
                    ))}
                    </div>
                }
                <h1>{props.title}</h1>
                <h2>{props.desc}</h2>
                <h3>{props.text}</h3>
            </div>
            <div className="main-content-right">
                <img src={props.image || require('../../assets/images/no-image.png')} alt={props.title} />
            </div>
        </div>
        <div className="main-content-footer page-padding">
            <p>{props.footerText}</p>
            <div>
                {props.btnGo && <Button text="Vá"/>}
                <Button text={props.btnText}/>
            </div>
        </div>
    </>)
};