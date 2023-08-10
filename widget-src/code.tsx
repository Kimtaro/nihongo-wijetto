import * as nwi from './nwInterfaces'
import NihongoWidget from "./NihongoWidget";
import VocabCard from "./VocabCard";

const {widget} = figma;
const {useSyncedState,} = widget;

function Widget() {
    const [widgetType, _] = useSyncedState<string>("widgetType", 'card');
    const [resultInfo, setResultInfo] = useSyncedState<nwi.Daum | {}>('resultInfo', {});


    switch (widgetType) {
        case 'card':
            return <NihongoWidget/>
        case 'vocab card':
            return <VocabCard nodeInfo={resultInfo}/>
    }
}

widget.register(Widget);
