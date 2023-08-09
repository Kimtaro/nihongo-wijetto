(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/Card.tsx
  var { widget } = figma;
  var { Frame, Rectangle, AutoLayout, Text } = widget;
  function Card({ children }) {
    return /* @__PURE__ */ figma.widget.h(Frame, {
      name: "Card",
      effect: {
        type: "drop-shadow",
        color: "#00000026",
        offset: {
          x: 0,
          y: 23.431
        },
        blur: 46.861,
        showShadowBehindNode: false
      },
      cornerRadius: 23.43071174621582,
      strokeWidth: 1.464,
      width: 582.839,
      height: 391
    }, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "widget-bg",
      fill: "#FFF",
      cornerRadius: 23.43071174621582,
      strokeWidth: 1.464,
      width: 582.839,
      height: 391
    }), /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Title",
      x: -23.431,
      fill: "#5551FF",
      strokeWidth: 1.464,
      spacing: 14.644,
      padding: 14.644,
      width: 628.236,
      horizontalAlignItems: "center",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      name: "\u65E5\u672C\u8A9E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
      fill: "#FFF",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Roboto",
      fontSize: 35.14606857299805,
      fontWeight: 700,
      strokeWidth: 1.464
    }, "\u65E5\u672C\u8A9E \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8")), children, /* @__PURE__ */ figma.widget.h(Rectangle, {
      name: "Rectangle 2",
      x: 18,
      y: 356,
      fill: "#FFF",
      width: 512,
      height: 35
    }));
  }

  // widget-src/SearchBar.tsx
  var { widget: widget2 } = figma;
  var { AutoLayout: AutoLayout2, Ellipse, Frame: Frame2, SVG, Text: Text2, Input, useSyncedState } = widget2;
  function SearchBar(setResults) {
    const [text, setText] = useSyncedState("text", "");
    const onTextEnd = (event) => __async(this, null, function* () {
      setText(event.characters);
      console.log("started --> NEW ->  " + event.characters);
      const url = "https://corsproxy.io/?" + encodeURIComponent("https://jisho.org/api/v1/search/words?exact=true&keyword=" + encodeURIComponent(event.characters.toLowerCase()));
      const response = yield fetch(url);
      const json = yield response.json();
      setResults(json.data);
    });
    const onXClick = () => {
      setText("");
      setResults([]);
    };
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      name: "search-bar",
      x: 17.573,
      y: 95.187,
      fill: "#FFF",
      stroke: "#0000004D",
      cornerRadius: 16,
      overflow: "visible",
      spacing: "auto",
      padding: 16,
      width: 550.622,
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      name: "search-bar-contents",
      strokeWidth: 1.464,
      overflow: "visible",
      spacing: 8,
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Frame2, {
      name: "search-icon",
      strokeWidth: 0.805,
      width: 32,
      height: 32
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 9.664,
      y: 9.664,
      height: 13,
      width: 13,
      src: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M9.90112 6.08601C9.90112 8.53227 7.91803 10.5154 5.47177 10.5154C3.0255 10.5154 1.04241 8.53227 1.04241 6.08601C1.04241 3.63974 3.0255 1.65666 5.47177 1.65666C7.91803 1.65666 9.90112 3.63974 9.90112 6.08601ZM8.87763 10.0613C7.96215 10.8464 6.77235 11.3207 5.47177 11.3207C2.58073 11.3207 0.237076 8.97705 0.237076 6.08601C0.237076 3.19497 2.58073 0.851318 5.47177 0.851318C8.36281 0.851318 10.7065 3.19497 10.7065 6.08601C10.7065 7.38658 10.2322 8.57638 9.44709 9.49186L13.0045 13.0493L12.4351 13.6188L8.87763 10.0613Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    })), /* @__PURE__ */ figma.widget.h(Input, {
      fontSize: 16,
      fill: "#000000",
      inputFrameProps: {
        cornerRadius: 8
      },
      onTextEditEnd: onTextEnd,
      placeholder: "Your annotation here...",
      value: text,
      width: 446
    })), /* @__PURE__ */ figma.widget.h(Frame2, {
      name: "32 / x",
      overflow: "visible",
      width: 32,
      height: 32,
      onClick: onXClick
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 10.647,
      y: 10.647,
      height: 11,
      width: 11,
      src: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M6.19478 5.48033L10.8412 0.833862L11.5484 1.54097L6.90189 6.18743L11.5484 10.8339L10.8412 11.541L6.19478 6.89454L1.54835 11.541L0.841248 10.8339L5.48767 6.18744L0.841249 1.54105L1.54835 0.833938L6.19478 5.48033Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    })));
  }

  // widget-src/code.tsx
  var { widget: widget3 } = figma;
  var { AutoLayout: AutoLayout3, Ellipse: Ellipse2, Frame: Frame3, Image, Rectangle: Rectangle2, SVG: SVG2, Text: Text3, Input: Input2, useSyncedState: useSyncedState2 } = widget3;
  function Widget() {
    const [results, setResults] = useSyncedState2("results", []);
    return /* @__PURE__ */ figma.widget.h(Card, null, /* @__PURE__ */ figma.widget.h(SearchBar, {
      setResults
    }));
  }
  widget3.register(Widget);
})();
