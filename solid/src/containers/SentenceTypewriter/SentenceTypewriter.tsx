import { Component, createSignal, For, Show } from "solid-js";
import SolidTyper from "../../components/Custom/SolidTyper";

type SentenceLine = { delay: number; sentence: string };
const sentences: SentenceLine[] = [
  { delay: 100, sentence: "Keep my wife's name out your F*$%@#^ mouth!" },
  { delay: 500, sentence: "It was a G.I Jane joke..." },
  {
    delay: 1200,
    sentence: "Keep... my wife's name... out your... F*$%@#^... mouth!!!",
  },
];

const SentenceTypewriter: Component = () => {
  const [showSentenceIndex, setShowSentenceIndex] = createSignal(0);

  function showNextSentence() {
    setShowSentenceIndex(showSentenceIndex() + 1);
  }
  return (
    <div style={{ "font-size": "32px" }}>
      <For each={sentences}>
        {({ delay, sentence }, i) => (
          <Show when={showSentenceIndex() >= i()}>
            <p>
              <SolidTyper
                onFinish={showNextSentence}
                startDelay={delay}
                text={sentence}
              />
            </p>
          </Show>
        )}
      </For>
    </div>
  );
};

export default SentenceTypewriter;
