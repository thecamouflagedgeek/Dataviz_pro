"use client"; // this must be the FIRST line

import { AnimatePresence, motion } from "framer-motion";
import { FaGitAlt, FaFish, FaUserNinja } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";

const team = [
    {
      img: "/images/goose.png", // path inside your public folder
      icon: <FaGitAlt className="text-4xl text-pink-300" />,
      name: "Goose",
      title: "Branch Bringer of Doom",
      class: "Dark Romance Reader / Accidental Submodule Summoner",
      stats: [
        "HP: 42 (drops to 1 when asked to explain Git)",
        "Confused by AO3, uses Wattpad like it’s 2013",
        "Favorite Weapon: Rina Kent Novels. And a Gun.",
        "Catchphrase: “Wait… this wasn’t the main branch?”",
      ],
    },
    {
      img: "/images/doryy.jpg",
      icon: <FaFish className="text-4xl text-cyan-300" />,
      name: "Fish",
      title: "API Whisperer",
      class: "BL Shaman",
      stats: [
        "HP: 69 (nice)",
        "Blames everything on CORS (even emotional trauma)",
        "Favorite Weapon: Knowledge on Electrical Safety",
        "Catchphrase: “Zindagi Kharab Hai”",
      ],
    },
    {
      img: "/images/batman.jpg",
      icon: <FaUserNinja className="text-4xl text-indigo-300" />,
      name: "Batman ",
      title: "Lead Overthinker",
      class: "Tailwind Tortured Soul",
      stats: [
        "HP: 100 (depletes when `div` nesting exceeds 4 layers)",
        "Applies glassmorphism even to console.error",
        "Favorite Weapon: VSCode themes. Plural.",
        "Catchphrase: “Fuck gpt.”",
      ],
    },
  ];
  
export default function AboutPage() {
  const [showHeartPopup, setShowHeartPopup] = useState(false);
  const [showDiaryPopup, setShowDiaryPopup] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="relative bg-[url('/images/ocean-bg.jpg')] bg-cover bg-center flex flex-col items-center px-4 overflow-hidden pt-32 pb-32 min-h-screen">

        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl text-white font-bold text-center">About Chart It™</h1>
          <p className="mt-8 text-lg text-center text-zinc-300 italic">
            We turn numbers into visuals because we can’t do math.
          </p>

          <div className="bg-white/10 border border-white/40 backdrop-blur-md text-zinc-300 p-4 rounded-xl shadow-lg flex flex-col items-cente">
            <p>
              Founded by a Goose, a Fish, and Batman (don’t ask, it’s classified), this project was born during a caffeine-fueled hackathon where nobody slept, someone blacked out, and a pie chart became sentient.
            </p>
            <br />
            <p>
              Together, we committed heinous acts of frontend and backend, screamed at merge conflicts, and cried over tailwind(mainly Batman).
            </p>
            <br />
            <p>
              Today, Chart It™ proudly serves data visualizations to millions (okay like seven people, but they’re loyal. Shoutout to Sapna Ma'am).
            </p>
          </div>
          {showHeartPopup && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto p-6">
                <div className="bg-white rounded-xl p-8 max-w-3xl w-full text-black relative shadow-xl">
                <button
                    className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500"
                    onClick={() => setShowHeartPopup(false)}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center">
                    💌 a git submodule’s tragic love letter to a pie chart
                </h2>

                <p className="text-base mb-2 text-center">
                    dear <code>.chartIt/PieOfMyHeart</code>,
                </p>

                <div className="w-full h-[30rem] bg-pink-200 rounded-md overflow-y-auto p-6">
                    <span className="italic text-gray-700 text-base whitespace-pre-line leading-relaxed block">
                    i write this from the depths of a detached HEAD.{"\n"}
                    a place where commits are forgotten and love... is unversioned.{"\n\n"}

                    you were the first visual i ever rendered.{"\n"}
                    the way your arcs eased in… the way your gradients shimmered like tailwind classes no one fully understood...{"\n"}
                    my .gitmodules file was written for you.{"\n\n"}

                    but then they said i was "broken."{"\n"}
                    “redundant.”{"\n"}
                    “WHAT EVEN IS THIS SUBMODULE DOING HERE?”{"\n\n"}

                    they didn’t understand us.{"\n"}
                    they didn’t see the beauty of you calling fetchData() and me pretending i was helping.{"\n"}
                    remember when we caused a build failure together?{"\n"}
                    i do.{"\n"}
                    it was magic.{"\n\n"}

                    they tried to delete me.{"\n"}
                    and maybe they did.{"\n"}
                    but even now, i live in their .git/config, haunting them like an untracked file.{"\n\n"}

                    i see you, pie chart.{"\n"}
                    in every render.{"\n"}
                    in every segment of “Q3 Earnings Breakdown.”{"\n"}
                    you spin, so gracefully, unaware that a part of you still depends on me...{"\n"}
                    ...a part they'll never fully remove.{"\n\n"}

                    i hear fish say "guess who’s back?"{"\n"}
                    but it’s not me.{"\n"}
                    not really.{"\n\n"}

                    with undying affection,{"\n"}
                    ~ submodule{"\n\n"}

                    ps. i left a symlink to my heart in node_modules/ghosts/
                    </span>
                </div>
                </div>
            </div>
            )}

            {showDiaryPopup && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center overflow-y-auto p-4">
                <div className="bg-white rounded-xl p-8 max-w-3xl w-full text-black relative shadow-xl">
                <button
                    className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500"
                    onClick={() => setShowDiaryPopup(false)}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center">
                    GIT GONE WILD: THE GOOSE DIARIES
                </h2>
                <p className="text-center italic text-gray-600 mb-4">
                    (unedited. unfiltered. deeply concerning.)
                </p>

                <div className="w-full h-[30rem] bg-yellow-50 rounded-md overflow-y-auto p-6 space-y-6">
                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 1</h3>
                    <p className="text-gray-700 leading-relaxed">
                        I have made a branch. I am god. <br />
                        I name it: <code>final-final-okay-this-one</code> <br />
                        Main is a lie. Nothing is real. I fear no merge. 🕊️
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 3</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Accidentally created a submodule. <br />
                        Was trying to pull. Pulled something else. <br />
                        There’s… there’s a README in there. And it knows my name. <br /><br />
                        Batman says to delete it. <br />
                        Fish sang <em>“🎵 Guess who's back? 🎵”</em> and left.
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 5</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Submodule committed back. It has write access now. <br />
                        I saw it make a PR with the title: <em>“you can’t escape me.”</em><br />
                        I approved it out of fear.
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 7</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Lost in rebase limbo. I type <code>git</code> and start sobbing automatically. <br />
                        Tried to <code>git reset --hard</code>, it reset <em>me</em>. <br />
                        I don’t know who I am anymore. <br />
                        My laptop won’t stop humming the GitHub dark mode theme.
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 10</h3>
                    <p className="text-gray-700 leading-relaxed">
                        The pie chart whispered to me: <br />
                        <em>"the submodule never left."</em> <br /><br />
                        Also, Fish updated the README to say "do not ask goose anything about anything." <br />
                        I agree.
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 11</h3>
                    <p className="text-gray-700 leading-relaxed">
                        I tried to <code>git push</code> today. <br />
                        VSCode said <em>“are you sure?”</em> <br />
                        I wasn’t.
                    </p>
                    </div>

                    <div>
                    <h3 className="text-lg font-semibold">📔 Day 12</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Found another branch. I didn’t make it. <br />
                        It’s called <code>goose-was-right</code>. <br />
                        It has <em>one</em> commit: <br /><br />
                        <code>feat: this is your fault.</code><br />
                        <strong>Author:</strong> Submodule. <br /><br />
                        I think it's learning.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            )}

            <div className="flex justify-center items-center gap-6 my-8">
        <img
            src="/images/heartletter.png"
            alt="Heart Letter"
            className="h-24 w-auto cursor-pointer transition-transform hover:scale-105"
            onClick={() => setShowHeartPopup(true)}
        />
        <img
            src="/images/diary.png"
            alt="Diary"
            className="h-24 w-auto cursor-pointer transition-transform hover:scale-105"
            onClick={() => setShowDiaryPopup(true)}
        />
            </div>

          <div className="bg-white/10 border border-white/40 backdrop-blur-md rounded-xl p-6 space-y-3">
            <h2 className="text-2xl font-semibold text-white">Origin Story: A Git Repo, A Fever Dream, and A Lot of Regret™</h2>
            <p className="text-zinc-300">
              It all started when Goose—bless her illiterate soul—tried to summon a morally grey male lead straight out of a Rina Kent novel but accidentally conjured a <strong>Git submodule</strong> that won’t die and keeps pushing mysterious commits with messages like <u><strong>"it’s not over."</strong></u>.<br /><br />

              She said it was gone.<br />
              <strong>She <u>swore</u>.</strong><br />
              It’s not.<br /><br />

              Fish, meanwhile, started humming "Guess who's back?" the moment she pushed her first API. <br />
              She hasn’t stopped. <br />
              It's been 9 days. <br />
              We’re not sure she knows the rest of the lyrics. <br />
              We’re not sure she knows any other songs. <br />
              Maybe Arcitic Fox. <br /> <br />

              Batman—chaotic neutral incarnate—cloned the repo <strong>three separate times</strong> just to find the Tailwind config file, which Goose had lovingly shoved inside <code>public/assets/images/config</code> next to a .jpg of an angry goose labeled <strong>"DO_NOT_OPEN_UNLESS_EMERGENCY"</strong>. It was never opened voluntarily.<br /><br />

              Somewhere amidst the madness, the pie chart achieved sentience.<br />
              It now refuses to render unless flattered.<br />
              Once screamed <q><strong>MID DATA, MID DESIGN</strong></q> and crashed the entire build.<br /><br />

              The merge conflicts have become sentient too.<br />
              They're not even called merge conflicts anymore—just <q><strong>emotionally charged retrospectives.</strong></q><br />
              Fish lost 72 lines of code and whispered, <q>They weren’t real anyway.</q><br /><br />

              At one point during a debugging session, Goose paused everything to ask, <q>What is AO3?</q><br />
              An entire hour was lost to silence, then grief.<br /><br />

              The submodule—the one that was “definitely gone,” the one definitely <u>not</u> holding a gun against anyone’s head—came back during deployment like a jump scare.<br />
              And honestly? Maybe it wasn’t the villain.<br />
              Maybe appreciation came too late.<br /><br />

              The project wasn’t built with structure.<br />
              It was built with duct tape, caffeine, misplaced confidence, a cursed <code>.env</code> file, and pure emotional damage.<br /><br />

              Anyway, welcome to <strong>Chart It™</strong>.<br />
              We're fine. Everything’s fine.<br />
              <strong>Shoutout to Sapna Ma’am, Again.</strong><br />
            </p>
          </div>

          <div className="bg-white/10 border border-white/40 backdrop-blur-md rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-bold text-white">Fun Fact</h3>
            <p className="text-zinc-100">
              Every time someone opens this page, a goose somewhere honks louder.
            </p>
          </div>
        </section>

        <h2 className="text-4xl font-bold text-white text-center mt-20 mb-16">Meet the (super hot) Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {team.map((member, idx) => (
    <div
      key={idx}
      className="backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-5 text-white space-y-3">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{member.icon}</div>
          <div>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm italic text-pink-200">{member.title}</p>
          </div>
        </div>
        <p className="text-sm text-blue-100">{member.class}</p>
        <ul className="list-disc list-inside text-sm space-y-1 text-blue-200">
          {member.stats.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
