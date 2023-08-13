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
        <SVG
                    name="Left Chevron"
                    height={primitive.large}
                    width={primitive.large}
                    src='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none"><path d="M20.0001 6.66663L6.66675 20L20.0001 33.3333" stroke="white" stroke-width="6.66666" stroke-linecap="round" stroke-linejoin="round"/></svg>'
          />    
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
        <SVG
                    name="Right Chevron"
                    height={primitive.large}
                    width={primitive.large}
                    src='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">
                    <path d="M19.9999 6.66669L33.3333 20L19.9999 33.3334" stroke="white" stroke-width="6.66666" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>'
          />   
      </AutoLayout>
}