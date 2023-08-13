import { primitive } from "../ui-src/tokensPrimitives";
import { theme } from '../ui-src/tokensThemes';


const {widget} = figma;
const {AutoLayout, Ellipse, Frame, SVG, Text, Input, useSyncedState} = widget;

export default function Title() {
    return <AutoLayout
        name="Title"
        fill={theme.bgAccent}
        spacing="auto"
        padding={{
          vertical: primitive.xlarge,
          horizontal: primitive.xlarge,
        }}
        width="fill-parent"
        minHeight={200}
        horizontalAlignItems="center"
        verticalAlignItems="center"
      > 
        <Text
          name="Title"
          fill={theme.bgPrimary}
          verticalAlignText="center"
          horizontalAlignText="center"
          fontFamily="Inter"
          fontSize={primitive.xlarge}
          fontWeight={700}
          lineHeight={primitive.large}
        >
          日本語 ウィジェット
        </Text>
      </AutoLayout>
}