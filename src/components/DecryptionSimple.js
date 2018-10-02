import React, { Component } from 'react';
import { cipherKeys } from './componentResources/keys';
import { shakespeare, kafka } from './componentResources/text';
import 'bootstrap';
import '../_custom.scss';

export default class DecryptionSimple extends Component {
    constructor() {
        super()

        this.state = {
            text: shakespeare // could just put shakespeare right here for default
        }

    }

    // componentDidMount() {
    //     this.setState({
    //         text: shakespeare
    //     })
    //     console.log(this.state)
    // }

    render() {
         //divide text into a letters array
        let textArray = this.state.text.toLowerCase().split('')
        //map over array to transform letters using key object from key.js
        let newText = textArray.map((e, i) => {
            return e = 'n' ///need to FINISH THIS to where e gets set equal to val in obj, when e equals key in obj

        })

        return (
            <div className="decrypt-page">
                {newText}
            </div>
        )
    }

}