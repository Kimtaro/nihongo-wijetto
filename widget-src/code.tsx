import * as nwi from './nwInterfaces'
import Card from "./Card";
import SearchBar from "./SearchBar";

const {widget} = figma;
const {AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState,} = widget;

function Widget() {
    // const [text, setText] = useSyncedState("text", "");
    const [results, setResults] = useSyncedState("results", []);


    return (
        <Card>
            <SearchBar setResults={setResults} />
        </Card>
    );
}

widget.register(Widget);
