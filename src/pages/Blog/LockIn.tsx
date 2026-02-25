import React from "react";
import BlogPost from "@/components/blog/BlogPost";

const LockIn = () => {
  return (
    <BlogPost
      title="Attention Is All You Need: Time to Lock In"
      date="Feb 25, 2026"
      image="/images/fz.png"
      content={
        <div>
          <p className="mb-4">
            Chunrong and I were FaceTiming on a random weekday night when the
            conversation drifted to something we'd both been struggling with:
            staying focused while working.
          </p>

          <p className="mb-4">
            There's no shortage of productivity tools. Pomodoro timers, to-do
            lists, habit trackers. But the more we talked, the more a pattern
            emerged: timers track time. To-do lists track tasks. Almost nothing
            tracks the one thing that actually determines whether work gets done:
            attention.
          </p>

          <p className="mb-4">
            So we built something different.
          </p>

          <p className="mb-4">
            Think of it as a co-pilot for focus. Instead of tracking tasks or
            measuring output, it looks for lightweight signals of attention: what
            you're looking at, how you're interacting with your screen, and whether
            your behavior has clearly drifted from what you meant to be doing. When
            it detects distraction, it gives you a small nudge to help you snap
            back.
          </p>

          <p className="mb-4">
            The goal isn't surveillance. It's awareness. It catches us when we
            subconsciously get distracted and nudges us back to focus.
          </p>

          <p className="mb-4">
            LockIn has two main features. The first uses computer vision to track
            user behavior in real time through a heartbeat system and vocally nudges
            you when you seem distracted. The second is a Chrome extension that
            tracks your open tabs and glasswalls or blocks them depending on how
            distracting they are.
          </p>

          <p className="mb-4">
            Here's a demo of LockIn App. Here's the link:{" "}
            <a
              href="https://lockin-web.onrender.com"
              className="text-orange-600 hover:text-orange-800 underline"
              target="_blank"
              rel="noreferrer"
            >
              lockin-web.onrender.com
            </a>
            . Initial load may take up to ~10 seconds due to server warm-up. You
            may briefly see Render's loading screen before the app appears.
          </p>

          <p className="mb-4">
            I've been using LockIn since we built it, and it has noticeably improved
            my productivity. More than that, it's trained me to be more
            self-aware. I now catch myself getting distracted sooner, and I've
            started noticing the kinds of things I tend to gravitate toward when my
            focus slips.
          </p>

          <p className="mb-4">
            We're also planning to build attention metrics so users can better
            understand their own focus patterns over time. Feel free to give it a
            try and let me know what you think!
          </p>
        </div>
      }
    />
  );
};

export default LockIn;
