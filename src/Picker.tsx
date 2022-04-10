import './Picker.css';
import LocationPicker from "location-picker";
import React from 'react';

const umd = { lat: 38.98706766398821, lng: - 76.94259906224374 }
const config_path = "config/";
const convertPoint = ({ x, y }) => ({ lat: y, lng: x })


export default class Picker extends React.Component<{ id: string }, {
    inner: LocationPicker, loc: {
        lat: number;
        lng: number;
    }, ans: {
        lat: number;
        lng: number;
    }
}> {
    constructor(props) {
        super(props)
        fetch(`/config/${props.id}.json`)
            .then(data => {
                data.json()
            }).then(data => {
                this.state = {
                    loc: umd,
                    inner: null!!,
                    ans: convertPoint(data.loc)
                }
            })
    }

    onSubmit() {
        this.setState({ loc: this.state.inner.getMarkerPosition() })
        // alert(`${this.state.loc.lat}, ${this.state.loc.lng}`)
        const dist = google.maps.geometry.spherical.computeDistanceBetween(this.state.ans, this.state.loc)
        alert(dist)
    }

    render(): React.ReactNode {
        return (<>
            <div id="picker" className="Picker" />
            <button onClick={() => this.onSubmit()}>Confirm Position</button>
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