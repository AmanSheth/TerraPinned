import './Picker.css';
// import LocationPicker from "location-picker";
import React from 'react';

const umd = { lat: 38.98706766398821, lng: - 76.94259906224374 }
const config_path = "config/";

// this is intentionally flipped
const convertPoint = ({ x, y }: { x: number, y: number }) => { return { lat: x, lng: y } }

export default class Picker extends React.Component<{ img_id: string }, {
    inner: any, loc: {
        lat: number;
        lng: number;
    }, ans: {
        lat: number;
        lng: number;
    }
}> {
    render(): React.ReactNode {
        return (<>
            <div id="picker" className="Picker" />
            <button className="square" onClick={() => {
                // this.setState({ loc: this.state.inner.getMarkerPosition() })
                // alert(`${this.state.loc.lat}, ${this.state.loc.lng}`)
                console.log(`loc: (${this.state.loc.lat}, ${this.state.loc.lng})`)
                const dist = google.maps.geometry.spherical.computeDistanceBetween(this.state.ans, this.state.loc)
            }}>Confirm Position</button>
        </>);
    }

    async componentDidMount() {
        console.log(`umd:(${umd.lat}, ${umd.lng})`);
        const inner = new google.maps.Map(document.getElementById("picker"), {
            zoom: 15,
            center: umd,
            streetViewControl: false,
        });
        const fetched = await fetch(`/json/${this.props.img_id
            }.json`)
        const data = await fetched.json()
        console.log(`ans: (${data.loc.lat}, ${data.loc.lng})`);

        this.setState({
            inner: inner,
            ans: convertPoint(data.loc),
            loc: umd,
        })
        inner.addListener("click", (mapsMouseEvent) => {
            console.log(`click: (${mapsMouseEvent.latLng.lat()} ${mapsMouseEvent.latLng.lng()})`)
            this.setState({
                loc: {
                    lat: mapsMouseEvent.latLng.lat(),
                    lng: mapsMouseEvent.latLng.lng(),
                },
            })
        });

    }
}