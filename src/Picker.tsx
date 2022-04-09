import './Picker.css';
import LocationPicker from "location-picker";
import React from 'react';


export default class Picker extends React.Component<{}, { inner: LocationPicker }> {

    constructor() {
        super({});
    }

    render(): React.ReactNode {
        return (<div id="picker" className="Picker">
        </div>);
    }

    componentDidMount() {
        this.setState({
            inner: new LocationPicker('picker', {
                setCurrentPosition: true, // You can omit this, defaults to true
            }, {
                zoom: 15 // You can set any google map options here, zoom defaults to 15
            })
        })
    }
}