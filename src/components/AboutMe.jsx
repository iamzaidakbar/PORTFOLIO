import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";

import Wrapper from "./Wrapper";
import kashmir from '../assets/kashmiri-tulip.jpg'
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
	const {scrollY} = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [100, 0], {clamp: false});
	const y2 = useTransform(scrollY, [0, 500], [0, -200], {clamp: false});
	return (<div
			id="about"
			className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
		>
			{/* BACKGROUND ELEMENTS START */}
			<span className="sec-2-bg-gradient"/>
			<motion.img className="sec-2-p-e-1" style={{y: y1}} src={pe1}/>
			<motion.img className="sec-2-p-e-2" style={{y: y2}} src={pe2}/>
			{/* BACKGROUND ELEMENTS END */}

			<Wrapper>
				{/* HEADING START */}
				<Div
					className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
					<span>A Software engineer</span>
					<span className="flex items-center gap-2">
                        <span>Based In</span>
                        <img
	                        src={kashmir}
	                        alt=""
	                        className="w-[50px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                        <span className={"text-[tomato]"}>Kashmir</span>
                    </span>
				</Div>
				{/* HEADING END */}

				{/* PARAGRAPH START */}
				<Div
					className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
					I was Born in <span className={"text-[tomato] font-[500]"}>Kashmir</span>, and i'm living a dream.
					I’ve always been a great problem solver, an independent introvert, and a technophile obsessed with
					the latest devices. Today, I’ve worked for an organization namely Cyber Spark for around 1 year, and
					I get
					to show off all these elements of who I am.
				</Div>
				{/* PARAGRAPH END */}

				{/* PARAGRAPH START */}
				<Div
					className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
					I started learning to code when I was a teenager, though it was always more of a hobby than a career
					focus. After a college education in Computer Science, and continuing to pursue that hobby, I
					realized software engineering was the right field for me.
				</Div>
				{/* PARAGRAPH END */}

				{/* PARAGRAPH START */}
				<Div
					className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
					Since then, I’ve worked on countless freelance projects and have been involved with a handful of
					notable startups.
				</Div>
				{/* PARAGRAPH END */}
			</Wrapper>
		</div>);
};

export default AboutMe;
