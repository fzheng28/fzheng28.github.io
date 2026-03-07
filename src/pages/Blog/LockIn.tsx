import React from "react";
import BlogPost from "@/components/blog/BlogPost";

const LockIn = () => {
  return (
    <BlogPost
      title="Attention Is All You Need: Time to LockIn"
      date="Mar 3, 2026"
      image="/images/lockin-cover.svg"
      content={
        <div>
          <p className="mb-4">
            Most productivity tools track everything except the thing that actually
            matters. Timers track time. To-do lists track tasks. Habit trackers
            track streaks. But when you sit down to work, the failure mode is
            rarely that you don&apos;t know what to do. It&apos;s that attention slips
            before you even notice it slipped.
          </p>

          <p className="mb-4">
            That observation started a conversation between my friend and me. Not
            about productivity in the abstract, but about something more specific:
            the gap between the moment attention drifts and the moment you realize
            it drifted. That gap is where most of the damage happens. You don&apos;t
            decide to stop working. You just open one tab, and then suddenly twenty
            minutes are gone.
          </p>

          <p className="mb-4">
            So I built{" "}
            <a
              href="https://github.com/fzheng28/lockIn"
              className="text-orange-600 hover:text-orange-800 underline"
              target="_blank"
              rel="noreferrer"
            >
              LockIn
            </a>
            : a browser extension that uses an LLM to reason about whether a new tab is distracting based on current context, not based on the domain, but based on what you're already doing.
          </p>

          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">
            Design
          </h2>

          <p className="mb-4">
            The obvious approach to blocking distracting websites is a static list.
            Identify the bad domains, social media, news, forums, and block them.
            Tools like StayFocusd basically do this. It works, kind of, but it
            treats distraction as a fixed property of a URL, which isn&apos;t quite
            right.
          </p>

          <p className="mb-4">
            The same website can be a useful resource in one moment and a perfect
            procrastination route in another. YouTube is obviously fine when
            you&apos;re watching tutorials. But it&apos;s also a very comfortable place
            to browse tangentially related things when you&apos;re avoiding a hard
            problem. The distraction isn&apos;t in the domain. It&apos;s in the
            relationship between what you&apos;re doing and what you just opened.
          </p>

          <p className="mb-4">
            This is where I found the most interesting design space. Instead of a
            static blocklist, LockIn uses an LLM to reason about whether a new tab
            is likely to be distracting in context. It doesn&apos;t look at the new
            tab in isolation. It looks at the set of tabs you already have open,
            builds a picture of what you&apos;re working on, and compares any new tab
            against that footprint. If something doesn&apos;t fit, that&apos;s a signal.
          </p>

          <h3 className="text-xl font-bold text-orange-800 mt-8 mb-4 font-space">
            To Make This Concrete
          </h3>

          <h4 className="text-lg font-bold text-orange-800 mt-6 mb-2 font-space">
            Example 1
          </h4>
          <p className="mb-4">
            Say I have two tabs open, the AWS documentation on AI agents and a
            YouTube video on the same topic. LockIn infers I&apos;m doing technical
            research. If I then open a K-Pop playlist or a page about ballroom
            dance styles, those get flagged, even though YouTube itself was already
            open and even though none of those domains are inherently distracting.
            The model isn&apos;t pattern-matching on domain names. It&apos;s reasoning
            about fit.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <a
                href="https://aws.amazon.com/what-is/ai-agents/"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://aws.amazon.com/what-is/ai-agents/
              </a>{" "}
              (AWS documentation on agents)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=fXizBc03D7E"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=fXizBc03D7E
              </a>{" "}
              (a YouTube video on AI agents)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=fjOeJssZX_Q&amp;list=RDyebNIHKAC4A&amp;index=2"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=fjOeJssZX_Q&amp;list=RDyebNIHKAC4A&amp;index=2
              </a>{" "}
              (a song from KPop Demon Hunters)
            </li>
            <li>
              <a
                href="https://www.fredastaire.com/blog/ballroom-dances/types-of-latin-dances"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.fredastaire.com/blog/ballroom-dances/types-of-latin-dances
              </a>{" "}
              (a website on ballroom)
            </li>
          </ul>
          <p className="text-sm text-orange-700 mb-3">
            Screenshot naming uses <code>example-link</code> (for example:
            <code> 1-1</code> means Example 1, Link 1).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img
              src="/images/example1-1.png"
              alt="Example 1 Link 1: AWS AI agents page"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
            <img
              src="/images/example1-2.png"
              alt="Example 1 Link 2: YouTube AI agents video"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
            <img
              src="/images/example1-3.png"
              alt="Example 1 Link 3: K-pop video flagged by LockIn"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
            <img
              src="/images/example1-4.png"
              alt="Example 1 Link 4: Ballroom page flagged by LockIn"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
          </div>

          <h4 className="text-lg font-bold text-orange-800 mt-6 mb-2 font-space">
            Example 2
          </h4>
          <p className="mb-4">
            But that same logic surfaces an interesting failure mode. If I had
            opened a ballroom dance video and a ballroom website first, then opened
            a YouTube video on AI agents, that last tab gets blocked.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>
              <a
                href="https://www.fredastaire.com/blog/ballroom-dances/types-of-latin-dances"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.fredastaire.com/blog/ballroom-dances/types-of-latin-dances
              </a>{" "}
              (a website on ballroom)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=wYPaNyJxuOc"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=wYPaNyJxuOc
              </a>{" "}
              (a YouTube video on ballroom)
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=FwOTs4UxQS4"
                className="text-orange-600 hover:text-orange-800 underline"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=FwOTs4UxQS4
              </a>{" "}
              (a YouTube video on AI agents)
            </li>
          </ul>
          <p className="text-sm text-orange-700 mb-3">
            Example 2 screenshot mapping: <code>2-1</code>, <code>2-2</code>,{" "}
            <code>2-3</code>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img
              src="/images/example2-1.png"
              alt="Example 2 Link 1: Ballroom website"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
            <img
              src="/images/example2-2.png"
              alt="Example 2 Link 2: Ballroom YouTube video"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
            <img
              src="/images/example2-3.png"
              alt="Example 2 Link 3: AI video flagged as outlier"
              className="w-full h-64 object-contain bg-orange-50 rounded-lg border border-orange-200"
            />
          </div>

          <p className="mb-4">
            The model looked at the footprint, saw dance content, and treated the
            AI video as the outlier. It wasn&apos;t wrong given what it saw. It just
            didn&apos;t know which tabs were the ones that mattered.
          </p>

          <p className="mb-4">
            This is the core tension: the model is only as good as the context
            it&apos;s given, and the browser is a messy place. Tabs accumulate. People
            switch between tasks. A leftover tab from earlier can quietly anchor
            the model&apos;s inference in the wrong direction. Right now, LockIn
            handles this partially through user self-reporting: clicking a strike
            button on any site marks it as distracting and adds it to a personal
            blocklist automatically. But knowing which tabs to weight and which to
            treat as noise is still the most interesting unsolved piece.
          </p>

          <p className="mb-4">
            Distraction is relational, not absolute. You can&apos;t decide whether a
            website is distracting without knowing what it&apos;s distracting from. The
            model doesn&apos;t need to be perfect. It just needs to be fast and
            directional. Getting nudged a minute into a drift is worth a lot more
            than getting blocked on a domain that might have been fine.
          </p>

          <h2 className="text-2xl font-bold text-orange-800 mt-8 mb-4 font-space">
            Conclusion
          </h2>
          <p className="mb-4">
            I&apos;ve been running LockIn on my own machine, and the most surprising
            part wasn&apos;t that it helped me focus. It&apos;s that it made my own
            patterns legible in a way I didn&apos;t expect. Feel free to try it here:{" "}
            <a
              href="https://github.com/fzheng28/lockIn"
              className="text-orange-600 hover:text-orange-800 underline"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/fzheng28/lockIn
            </a>
            .
          </p>
        </div>
      }
    />
  );
};

export default LockIn;
