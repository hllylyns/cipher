import React, { Component } from 'react';
import { cipherKeys } from './Keys';
import 'bootstrap';
import './_custom.scss';


export default class Decryption extends Component {
    constructor() {
        super()

        this.state = {
           text: ''
        }

    }

    componentDidMount() { 
    

    }

    render() {
        // console.log(this.state.captions, "this is state")
        let caseArray = []
      
        return (
            <div className="caseCreator">
                <MetaTags>
                    <title>BiA - {br}</title>
                    <meta id="meta-description" name="description" content="Some description." />
                    <meta id="og-title" property="og:title" content="MyApp" />
                </MetaTags>
                <TopArea indCase={this.state.case} />
                {/* <div> {componentStructure}</div> */}
                <div> {componentToggle}</div>
            </div>
        )
    }

}