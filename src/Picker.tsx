import './Picker.css';
import LocationPicker from "location-picker";
import React from 'react';

const umd = { lat: 38.98706766398821, lng: - 76.94259906224374 }

export default class Picker extends React.Component<{}, {
    inner: LocationPicker, loc: {
        lat: number;
        lng: number;
    }
}> {
    constructor(props) {
        super(props)
        this.state = {
            loc: umd,
            inner: null!!
        }
    }

    render(): React.ReactNode {
        return (<>
            <div id="picker" className="Picker">
                <button onClick={() => this.setState({ loc: this.state.inner.getMarkerPosition() })}>Confirm Position</button>
            </div>
        </>);
    }

    componentDidMount() {
        this.setState({
            inner: new LocationPicker('picker', {
                setCurrentPosition: false,
            }, {
                center: {
                    lat: umd.lat,
                    lng: umd.lng,
                },
                zoom: 15 // You can set any google map options here, zoom defaults to 15
            }),
            loc: umd
        })
    }
}