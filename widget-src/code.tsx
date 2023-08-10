import * as nwi from './nwInterfaces'
import NihongoWidget from "./NihongoWidget";
import VocabCard from "./VocabCard";

const {widget} = figma;
const {useSyncedState,} = widget;

function Widget() {
    const [widgetType, _] = useSyncedState<string>("widgetType", 'card');
    const [resultInfo, setResultInfo] = useSyncedState<nwi.Daum | null>('resultInfo', null);

    switch (widgetType) {
        case 'card':
            return <NihongoWidget/>
        case 'vocab card':
            if (!resultInfo) {
                return null
            }
            return <VocabCard nodeInfo={resultInfo}/>
    }
}

widget.register(Widget);
