import { Select } from 'antd'
import Enlist from './en.json'

const enlist = Enlist.map( a => {
    return {
        label: a.中文,
        value: a.name
    }
})

function VoiceSlect(props: any) {
    return <Select  value={props.value}  options={enlist} {...props}></Select>
}

export default VoiceSlect;