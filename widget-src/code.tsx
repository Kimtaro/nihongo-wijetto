import * as nwi from './nwInterfaces'
import Card from "./Card";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import Title from "./Title";

const {widget} = figma;
const {AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState,} = widget;

function Widget() {
    const [results, setResults] = useSyncedState<any[]>("results", []);

    return (
        <Card>
            <Title />
            <SearchBar setResults={setResults} />
            <ResultsList results={results} />
        </Card>
    );
}

widget.register(Widget);
