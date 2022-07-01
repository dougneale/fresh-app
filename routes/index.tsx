/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

// title and paragraphs with copy that is selling the benefits of artificial intelligence

export default function Home() {
  return (
    <div>
      {/* navbar with logo */}
      <div className={tw`flex justify-between items-center`}>
        <div className={tw`flex items-center`}>
          <img src="https://i.imgur.com/QQfJYbJ.png" alt="logo" />
        </div>
        <div className={tw`flex items-center`}>
          <img src="https://i.imgur.com/QQfJYbJ.png" alt="logo" />
        </div>
      </div>

      <div className={tw`flex flex-col items-center justify-center`}>
        <h1 className={tw`text-4xl`}>
          <span className={tw`text-blue-500`}>Artificial Intelligence</span>
          <span className={tw`text-gray-500`}>
            {" "}
            is the future of{" "}
            <span className={tw`text-blue-500`}>
              {" "}
              human-computer interaction
            </span>
          </span>
        </h1>
        <p className={tw`text-xl`}>
          <span className={tw`text-blue-500`}> Artificial Intelligence</span>
          <span className={tw`text-gray-500`}></span>
        </p>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <h1 class={tw`text-center`}>
            <span class={tw`text-4xl`}>
              Artificial Intelligence for the 21st Century
            </span>
          </h1>
          <p class={tw`text-center`}>
            <span class={tw`text-2xl`}>
              Artificial Intelligence is the technology that makes us smarter.
            </span>
          </p>
          <p class={tw`text-center`}>
            <span class={tw`text-2xl`}>
              It is the technology that makes us more efficient.
            </span>
          </p>
          <p class={tw`text-center`}>
            <span class={tw`text-2xl`}>
              It is the technology that makes us more connected.
            </span>
          </p>
          <p class={tw`text-center`}>
            <span class={tw`text-2xl`}>
              It is the technology that makes us more productive.
            </span>
          </p>
          <p class={tw`text-center`}>
            <span class={tw`text-2xl`}>
              It is the technology that makes us more efficient.
            </span>
          </p>
          {/* call to action */}
          <div class={tw`text-center`}>
            <button
              class={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              Learn More
            </button>
          </div>
          <Counter start={3} />
        </div>
      </div>
      {/* footer */}
      <div className={tw`flex justify-between items-center`}>
        <div className={tw`flex items-center`}>
          <img src="https://i.imgur.com/QQfJYbJ.png" alt="logo" />

          <div className={tw`flex items-center`}>
            <img src="https://i.imgur.com/QQfJYbJ.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
