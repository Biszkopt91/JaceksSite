/*
import * as React from 'react';
//import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";



interface IContactProps {
    id: string;
    title?: string;
    extraClass?: string;
    children?: Element;
    img?: string;
    icon?: string;
};



interface IContactState {};

export class Contact extends React.Component<IContactProps, IContactState> {
    constructor(props, state){
        super(props, state);
    }

    render() {
        return (
            <SimpleMap/>
        );
    }
}
export default function SimpleMap (props) {
    return (
        <section style={{height: "100%"}}>
            <GoogleMapLoader
                containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
                googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
            onClick={props.onMapClick}
          >
            {props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
            />
        </section>
    );
}

*/
