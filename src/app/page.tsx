"use client";

import Header from "./components/header";
import HomeTabs, { HomeTab, HomeTabsProps } from "./components/home-tabs";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./components/card";
import Chip from "./components/chip";
import ShareIcon from "./components/share-icon";

export default function Home() {
  const homeTabs: HomeTab[] = [
    {
      id: "1",
      name: "About",
      isSelected: true,
      href: "#about",
    },
    {
      id: "2",
      name: "Experience",
      isSelected: false,
      href: "#experience",
    },
    {
      id: "3",
      name: "Projects",
      isSelected: false,
      href: "#projects",
    },
  ];

  const [tabs, setTabs] = useState(homeTabs);

  const updateActiveTab = (id: string) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isSelected: tab.id === id,
      }))
    );
  };

  // Set up `useInView` for each section
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.5,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (aboutInView) {
      updateActiveTab("1");
    } else if (experienceInView) {
      updateActiveTab("2");
    } else if (projectsInView) {
      updateActiveTab("3");
    }
  }, [aboutInView, experienceInView, projectsInView]);

  return (
    <>
      <div className="grid lg:grid-cols-2 lg:justify-center">
        <div className="flex flex-col pt-10 w-full px-4 lg:w-auto lg:sticky lg:top-0 lg:block lg:h-screen">
          <div className="lg:max-w-md lg:mx-auto">
            <h1 className="font-medium text-3xl tracking-tight text-slate-20">
              Matheus Gonçalves
            </h1>
            <h2 className="mt-3 font-light text-xl">Software Engineer</h2>
            <p className="mt-4 font-thin">
              Mobile engineer with 3 years of experience
            </p>
            <HomeTabs className="mt-16" homeTabs={tabs} />
          </div>
        </div>

        <main className="flex flex-col mt-20 w-full px-4 lg:w-auto">
          <section id="about" ref={aboutRef} className="mb-20">
            <p className="font-thin text-md">
              Welcome! I’m Matheus Gonçalves, a software engineer with 3 years
              of experience. My current focus is{" "}
              <strong className="font-bold">mobile development</strong>, but I’m
              always eager to explore new technologies and concepts. With a
              strong attention to detail, I prioritize delivering quality
              solutions that satisfy clients while collaborating closely with my
              team to achieve this goal. Over the years, I’ve worked on projects
              in both the banking and healthcare sectors, and I’m excited to
              continue developing impactful solutions, regardless of the
              industry. On my free time i like to play football, socialize with
              my friends, hang out with my girlfriend and develop some new
              projects. Stick around, explore the page and if you have a cool
              project that i can contribute hit me up on my socials.
            </p>
          </section>

          <section id="experience" ref={experienceRef}>
            <Card className="grid group p-4">
              <div className="">
                <p className="font-medium uppercase tracking-wide text-sm">
                  Nov 2023 — Present
                </p>
                <a
                  className="font-thin hover:text-cyan-500 flex items-center w-max"
                  href="https://www.kenbi.de/"
                >
                  <p>Kenbi</p>
                  <ShareIcon />
                </a>
              </div>

              <div className="flex flex-col">
                <p className="font-thin text-lg group-hover:text-cyan-500">
                  Mid Software Engineer
                </p>
                <p className="font-thin text-sm mt-4">
                  Started developing a new healthcare application with all the
                  latest android technologies including jetpack compose.
                </p>
                <div className="flex flex-wrap mt-4 ">
                  <Chip name="Kotlin" className="m-2" />
                  <Chip name="Android" className="m-2" />
                  <Chip name="Compose" className="m-2" />
                  <Chip name="MVVM" className="m-2" />
                  <Chip name="MVI" className="m-2" />
                  <Chip name="Healthcare" className="m-2" />
                </div>
              </div>
            </Card>

            <Card className="grid group p-4">
              <div className="">
                <p className="font-medium uppercase tracking-wide text-sm">
                  Nov 2022 — Nov 2023
                </p>
                <a
                  className="font-thin hover:text-cyan-500 flex items-center w-max"
                  href="https://www.kenbi.de/"
                >
                  <p>Kenbi</p>
                  <ShareIcon />
                </a>
              </div>

              <div className="flex flex-col">
                <p className="font-thin text-lg group-hover:text-cyan-500">
                  Software Engineer II
                </p>
                <p className="font-thin text-sm mt-4">
                  Worked and maintained an health care application capable of
                  assisting care assist workers. With 500 active users we
                  implemented features like:
                </p>
                <ul className="list-disc font-thin text-sm ml-4">
                  <li>Message chat for exchanging patient information</li>
                  <li>Worker time tracking using graphs</li>
                </ul>
                <div className="flex flex-wrap mt-4 ">
                  <Chip name="Kotlin" className="m-2" />
                  <Chip name="Android" className="m-2" />
                  <Chip name="Compose" className="m-2" />
                  <Chip name="MVVM" className="m-2" />
                  <Chip name="Healthcare" className="m-2" />
                </div>
              </div>
            </Card>

            <Card className="grid group p-4">
              <div className="">
                <p className="font-medium uppercase tracking-wide text-sm">
                  Jan 2022 — Nov 2022
                </p>
                <a
                  className="font-thin hover:text-cyan-500 flex items-center w-max"
                  href="https://www.itsector.pt/"
                >
                  <p>IT Sector</p>
                  <ShareIcon />
                </a>
              </div>

              <div className="flex flex-col">
                <p className="font-thin text-lg group-hover:text-cyan-500">
                  IS Consultant
                </p>
                <p className="font-thin text-sm mt-4">
                  As my first professional experience i was able to fix
                  unexpected behaviour on a matured banking app targetting a big
                  bank in Canada. Next thing i know i was working on a brand new
                  solution for onboarding new debit and credit card customers.
                </p>
                <div className="flex flex-wrap mt-4 ">
                  <Chip name="Kotlin" className="m-2" />
                  <Chip name="Java" className="m-2" />
                  <Chip name="Android" className="m-2" />
                  <Chip name="XML" className="m-2" />
                  <Chip name="MVP" className="m-2" />
                  <Chip name="Banking" className="m-2" />
                </div>
              </div>
            </Card>

            <Card className="grid group p-4">
              <div className="">
                <p className="font-medium uppercase tracking-wide text-sm">
                  Sept 2021 — Jan 2022
                </p>
                <a
                  className="font-thin hover:text-cyan-500 flex items-center w-max"
                  href="https://www.itsector.pt/"
                >
                  <p>IT Sector</p>
                  <ShareIcon />
                </a>
              </div>

              <div className="flex flex-col">
                <p className="font-thin text-lg group-hover:text-cyan-500">
                  Professional Internship
                </p>
                <p className="font-thin text-sm mt-4">
                  Develop an Android module utilizing image recognition
                  technology to detect and translate information from receipts
                  into user-friendly input fields within the application.
                </p>
                <div className="flex flex-wrap mt-4 ">
                  <Chip name="Kotlin" className="m-2" />
                  <Chip name="Optical Character Recognition" className="m-2" />
                  <Chip name="Android" className="m-2" />
                  <Chip name="Banking" className="m-2" />
                </div>
              </div>
            </Card>
          </section>

          <section id="projects" ref={projectsRef}>
            <h1>Projects</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham. Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham. Contrary to popular belief, Lorem Ipsum is not simply
              random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard McClintock, a
              Latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure Latin words, consectetur, from a Lorem
              Ipsum passage, and going through the cites of the word in
              classical literature, discovered the undoubtable source. Lorem
              Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
