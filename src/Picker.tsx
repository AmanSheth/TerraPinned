import './Picker.css';
import LocationPicker from "location-picker";
import React from 'react';

const umd = { lat: 38.98706766398821, lng: - 76.94259906224374 }
const config_path = "config/";
const convertPoint = ({ x, y }) => ({ lat: y, lng: x })


export default class Picker extends React.Component<{ img_id: string }, {
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
        fetch(`/json/${props.img_id
            }.json`)
            .then(data =>
                data.json()
            ).then(data => {
                this.state = {
                    loc: umd,
                    inner: null!!,
                    ans: convertPoint(data.loc)
                }
            })
    }

    render(): React.ReactNode {
        return (<>
            <a id="picker" className="Picker" />
            <button className="square" onClick={() => {
                this.setState({ loc: this.state.inner.getMarkerPosition() })
                // alert(`${this.state.loc.lat}, ${this.state.loc.lng}`)
                const dist = google.maps.geometry.spherical.computeDistanceBetween(this.state.ans, this.state.loc)
                alert(dist)
            }}>Confirm Position</button>
        </>);
    }

    points(dist) {
        var threshold = 160;
        var max_score = 500;
        var step = 160;
        var unit = 50;
        if (dist < threshold) {
            return max_score;
        }
        else {
            var c = unit / step;
            var neglin = (1 / unit) * (max_score + unit - c*x);
            if(dist < 0) {
                neglin = 0;
            }
            return unit * Math.floor(neglin);
        }
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
                zoom: 15, // You can set any google map options here, zoom defaults to 15
                streetViewControl: false
            }),
            loc: umd
        })
        console.log("set picker innner")
    }
}