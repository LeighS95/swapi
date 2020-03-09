import React, { Component } from 'react';
import './CardSection.css';

import Card from './Card';

class CardSection extends Component {
    constructor() {
        super();

        this.state = {
            content: []
        }
    }

    componentDidMount() {
        const url = "https://swapi.co/api/starships";

        fetch(url).then(res => res.json()).then(data => {
            this.setState({
                content: data.results
            }, console.log(data))
        });
    }

    sortContent = content => {
        let arr = [];
        let mostFilms = 0;
        content.forEach(i => {
            if(parseInt(i.crew, 10) >= 10) {
                if(i.films.length > mostFilms) {
                    mostFilms = i.films.length;
                }
                arr.push(i);
            }
        });
        let sortedArr = arr.sort((a, b) => {
            let A = parseInt(a.crew, 10);
            let B = parseInt(b.crew, 10);
            return B-A;
        });
        console.log(sortedArr);
        return sortedArr.map((item, index) => (
            item.films.length === mostFilms ? (
                <Card
                key={index}
                name={item.name}
                model={item.model}
                crew={item.crew}
                passengers={item.passengers}
                films={item.films}
                mostFilms
                />
            ) : (
                <Card
                key={index}
                name={item.name}
                model={item.model}
                crew={item.crew}
                passengers={item.passengers}
                films={item.films}
                />
            )
            
        ))
    }

    render() {

        const { content } = this.state;

        return (
            <div className="CardSection__Container">
                {this.sortContent(content)}
                
            </div>
        )
    }
}

export default CardSection;