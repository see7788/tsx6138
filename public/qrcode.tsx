import React from 'react'
import { QRNormal } from 'react-qrbtf'
type State = {
    str: string | number;
}
export default class extends React.Component<Readonly<State>, State> {
    /* constructor(props) {
        super(props)
    } */
    render() {
        return <QRNormal value={'xxxxxxxx' + this.state.str.toString()} />
    }
}